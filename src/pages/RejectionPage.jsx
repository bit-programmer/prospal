import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../RejectionPage.css';

const RejectionPage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Call the API to notify rejection
        fetch('https://vulerability-engine.vercel.app/notify?isAccepted=false')
            .then(response => {
                if (response.ok) {
                    console.log('Rejection notification sent successfully');
                } else {
                    console.error('Failed to send rejection notification');
                }
            })
            .catch(error => {
                console.error('Error sending rejection notification:', error);
            });
    }, []);

    return (
        <div className="rejection-page">
            <motion.div
                className="rejection-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="broken-heart"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 1, type: "spring" }}
                >
                    💔
                </motion.div>

                <motion.h1
                    className="rejection-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    I Understand...
                </motion.h1>

                <motion.p
                    className="rejection-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    Though my heart aches, I respect your decision.
                </motion.p>

                <motion.p
                    className="rejection-quote"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    "Some feelings are meant to be felt, not returned."
                </motion.p>

                <motion.div
                    className="rain-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="raindrop"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1 + Math.random()}s`
                            }}
                        />
                    ))}
                </motion.div>

                <motion.p
                    className="final-message"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                >
                    I'll cherish the moments we shared and wish you nothing but happiness.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default RejectionPage;
