import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create glowing particles
        const initialParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1, // Small particles
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5,
        }));
        setParticles(initialParticles);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            background: 'radial-gradient(circle at center, #ffe8ec 0%, #fff5f7 100%)' // Light vignette
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        x: `${p.x}vw`,
                        y: `${p.y}vh`,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        y: [`${p.y}vh`, `${p.y - 20}vh`, `${p.y - 40}vh`], // Float up slowly
                        x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`, `${p.x}vw`], // Meander
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius: '50%',
                        backgroundColor: '#c9184a', // Rose/red glow
                        boxShadow: `0 0 ${p.size * 4}px ${p.size * 2}px rgba(201, 24, 74, 0.3)` // Glowing effect
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingHearts;
