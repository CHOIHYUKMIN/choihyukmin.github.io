// Seasonal particle effects
(function () {
    'use strict';

    console.log('Particle effect script loaded');

    // 시즌별 파티클 설정
    const PARTICLE_CONFIGS = {
        snow: {
            particles: ['❄', '❅', '❆'],
            color: '#ffffff',
            shadow: '0 0 5px rgba(255, 255, 255, 0.8)'
        },
        firework: {
            particles: ['✨', '💫', '⭐', '🌟'],
            color: '#ffd700',
            shadow: '0 0 10px rgba(255, 215, 0, 0.8)'
        },
        heart: {
            particles: ['💕', '💖', '💗', '💝'],
            color: '#ff69b4',
            shadow: '0 0 5px rgba(255, 105, 180, 0.8)'
        },
        sakura: {
            particles: ['🌸', '🌺', '🌼'],
            color: '#ffb7c5',
            shadow: '0 0 5px rgba(255, 183, 197, 0.8)'
        },
        bubble: {
            particles: ['💧', '💦', '🫧'],
            color: '#00bfff',
            shadow: '0 0 5px rgba(0, 191, 255, 0.8)'
        },
        leaf: {
            particles: ['🍂', '🍁', '🍃'],
            color: '#ff8c00',
            shadow: '0 0 5px rgba(255, 140, 0, 0.8)'
        }
    };

    // Wait for DOM to be ready
    function initParticles() {
        console.log('Initializing particle effect...');

        // 현재 시즌 가져오기
        const season = CONFIG.getCurrentSeason();
        const particleType = season.particle?.type || 'none';

        if (particleType === 'none') {
            console.log('No particle effect for current season');
            return;
        }

        const config = PARTICLE_CONFIGS[particleType];
        if (!config) {
            console.warn(`Unknown particle type: ${particleType}`);
            return;
        }

        console.log(`🎨 Particle effect: ${particleType}`);

        // Create style element with keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleDrift {
                0% {
                    transform: translateY(-10px) translateX(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) translateX(20px) rotate(360deg);
                    opacity: 0.7;
                }
            }
            
            .particle {
                position: fixed;
                user-select: none;
                pointer-events: none;
                z-index: 999999;
                color: ${config.color};
                text-shadow: ${config.shadow};
            }
        `;
        document.head.appendChild(style);

        // Function to create a single particle
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.innerHTML = config.particles[Math.floor(Math.random() * config.particles.length)];

            // Random properties
            const startX = Math.random() * window.innerWidth;
            const fontSize = Math.random() * 15 + 10; // 10-25px
            const duration = Math.random() * 5 + 5; // 5-10 seconds
            const delay = Math.random() * 3;

            particle.style.left = startX + 'px';
            particle.style.top = '-20px';
            particle.style.fontSize = fontSize + 'px';
            particle.style.opacity = Math.random() * 0.5 + 0.5; // 0.5-1
            particle.style.animation = `particleDrift ${duration}s linear ${delay}s forwards`;

            document.body.appendChild(particle);

            // Remove after animation
            setTimeout(() => {
                if (particle && particle.parentNode) {
                    particle.remove();
                }
            }, (duration + delay) * 1000 + 500);
        }

        // Create initial particles
        for (let i = 0; i < 15; i++) {
            setTimeout(createParticle, i * 200);
        }

        // Continuously create new particles
        setInterval(createParticle, 300);

        console.log(`Particle effect started: ${particleType}!`);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        initParticles();
    }
})();
