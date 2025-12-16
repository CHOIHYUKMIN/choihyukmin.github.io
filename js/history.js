// IndexedDB History Management
const HistoryDB = {
    dbName: 'MindAgeHistory',
    dbVersion: 1,
    storeName: 'tests',
    db: null,

    // Initialize database
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                console.error('Failed to open IndexedDB:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('✅ IndexedDB initialized');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create object store if it doesn't exist
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, {
                        keyPath: 'id',
                        autoIncrement: true
                    });

                    // Create indexes
                    objectStore.createIndex('timestamp', 'timestamp', { unique: false });
                    objectStore.createIndex('date', 'date', { unique: false });

                    console.log('📦 Object store created');
                }
            };
        });
    },

    // Save test result
    async saveResult(data) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);

            const record = {
                timestamp: Date.now(),
                date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
                physicalAge: data.physicalAge,
                mentalAge: data.mentalAge,
                ageDifference: data.mentalAge - data.physicalAge,
                gender: data.gender,
                scenario: data.scenario,
                archetype: data.archetype,
                emotion: data.emotion,
                faceShape: data.faceShape,
                personalColor: data.personalColor
            };

            const request = objectStore.add(record);

            request.onsuccess = () => {
                console.log('💾 Test result saved:', record);
                resolve(request.result);
            };

            request.onerror = () => {
                console.error('Failed to save result:', request.error);
                reject(request.error);
            };
        });
    },

    // Get all history
    async getAllHistory() {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.getAll();

            request.onsuccess = () => {
                const results = request.result.sort((a, b) => b.timestamp - a.timestamp);
                console.log(`📚 Retrieved ${results.length} history records`);
                resolve(results);
            };

            request.onerror = () => {
                console.error('Failed to get history:', request.error);
                reject(request.error);
            };
        });
    },

    // Get history by date range
    async getHistoryByDateRange(startDate, endDate) {
        const allHistory = await this.getAllHistory();
        return allHistory.filter(record => {
            return record.date >= startDate && record.date <= endDate;
        });
    },

    // Get statistics
    async getStatistics() {
        const history = await this.getAllHistory();

        if (history.length === 0) {
            return null;
        }

        const mentalAges = history.map(r => r.mentalAge);
        const ageDiffs = history.map(r => r.ageDifference);

        return {
            totalTests: history.length,
            averageMentalAge: Math.round(mentalAges.reduce((a, b) => a + b, 0) / mentalAges.length),
            averageDifference: Math.round(ageDiffs.reduce((a, b) => a + b, 0) / ageDiffs.length),
            youngestMentalAge: Math.min(...mentalAges),
            oldestMentalAge: Math.max(...mentalAges),
            firstTest: new Date(history[history.length - 1].timestamp),
            lastTest: new Date(history[0].timestamp)
        };
    },

    // Delete a record
    async deleteRecord(id) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.delete(id);

            request.onsuccess = () => {
                console.log('🗑️ Record deleted:', id);
                resolve();
            };

            request.onerror = () => {
                console.error('Failed to delete record:', request.error);
                reject(request.error);
            };
        });
    },

    // Clear all history
    async clearAll() {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.clear();

            request.onsuccess = () => {
                console.log('🗑️ All history cleared');
                resolve();
            };

            request.onerror = () => {
                console.error('Failed to clear history:', request.error);
                reject(request.error);
            };
        });
    }
};

// Initialize on load
window.HistoryDB = HistoryDB; // Ensure clear global access

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => HistoryDB.init());
} else {
    HistoryDB.init();
}
