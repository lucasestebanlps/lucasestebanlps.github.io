import React, { useEffect } from 'react';
import './FireflyBackground.css';

const FireflyBackground = () => {
    useEffect(() => {
        const container = document.querySelector('.firefly-container');
        const fireflyCount = 15;

        for (let i = 0; i < fireflyCount; i++) {
            const firefly = document.createElement('div');
            firefly.classList.add('firefly');

            // Alterna entre color-primary y color-accent
            const colorClass = Math.random() > 0.5 ? 'color-primary' : 'color-accent';
            firefly.classList.add(colorClass);

            // Genera valores aleatorios para tamaño, duración y parpadeo
            firefly.style.setProperty('--size-factor', Math.random().toFixed(2));
            firefly.style.setProperty('--duration', `${Math.random() * 20 + 10}s`); // entre 10s y 30s
            firefly.style.setProperty('--blink-duration', `${Math.random() * 4 + 2}s`); // entre 2s y 6s

            // Posición inicial aleatoria
            firefly.style.top = `${Math.random() * 100}vh`;
            firefly.style.left = `${Math.random() * 100}vw`;

            container.appendChild(firefly);
        }
    }, []);

    return <div className="firefly-container"></div>;
};

export default FireflyBackground;