// Simple and reliable snow effect
(function () {
    'use strict';

    console.log('Snow effect script loaded');

    // Wait for DOM to be ready
    function initSnow() {
        console.log('Initializing snow effect...');

        // Create style element with keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes snowDrift {
                0% {
                    transform: translateY(-10px) translateX(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) translateX(20px);
                    opacity: 0.7;
                }
            }
            
            .snow-particle {
                position: fixed;
                color: white;
                user-select: none;
                pointer-events: none;
                z-index: 999999;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
            }
        `;
        document.head.appendChild(style);

        // Function to create a single snowflake
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'snow-particle';
            snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];

            // Random properties
            const startX = Math.random() * window.innerWidth;
            const fontSize = Math.random() * 15 + 10; // 10-25px
            const duration = Math.random() * 5 + 5; // 5-10 seconds
            const delay = Math.random() * 3;

            snowflake.style.left = startX + 'px';
            snowflake.style.top = '-20px';
            snowflake.style.fontSize = fontSize + 'px';
            snowflake.style.opacity = Math.random() * 0.5 + 0.5; // 0.5-1
            snowflake.style.animation = `snowDrift ${duration}s linear ${delay}s forwards`;

            document.body.appendChild(snowflake);

            // Remove after animation
            setTimeout(() => {
                if (snowflake && snowflake.parentNode) {
                    snowflake.remove();
                }
            }, (duration + delay) * 1000 + 500);
        }

        // Create initial snowflakes
        for (let i = 0; i < 15; i++) {
            setTimeout(createSnowflake, i * 200);
        }

        // Continuously create new snowflakes
        setInterval(createSnowflake, 300);

        console.log('Snow effect started!');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSnow);
    } else {
        initSnow();
    }
})();
