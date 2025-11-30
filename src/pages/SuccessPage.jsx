import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import '../SuccessPage.css';

const SuccessPage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const random = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Gold and Red Confetti
            confetti({
                ...defaults,
                particleCount,
                origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ffb703', '#c9184a', '#ffecd1']
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ffb703', '#c9184a', '#ffecd1']
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="success-page">
            <motion.div
                className="success-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="success-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    She Said Yes!
                </motion.h1>

                <motion.p
                    className="success-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    The Beginning of Forever
                </motion.p>

                <motion.div
                    className="photo-frame"
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: -2 }}
                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                >
                    <div className="photo-placeholder">
                        {/* Replace this with an actual <img> tag */}
                        <span>❤️</span>
                    </div>
                </motion.div>

                <motion.p
                    className="message"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    You are now officially enrolled for an adventurous journey full of fun, joy, and endless love.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default SuccessPage;
