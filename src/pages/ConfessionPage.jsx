import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useConvince } from '../hooks/useConvince';
import '../ConfessionPage.css';

const ConfessionPage = () => {
    const navigate = useNavigate();
    const { handleNoInteraction, getNoText, getYesStyle, getNoStyle } = useConvince();

    const paragraphs = [
        "Listen, Prachi…",
        "I still remember the first time we talked. It wasn’t just a conversation; it felt like the beginning of something I didn’t know I was waiting for.",
        "Your laugh, the way you see the world, the way you make everything feel a little lighter—it all became my favorite part of every day.",
        "I never planned for this. I never thought I’d find someone who understands me the way you do.",
        "But here we are.",
        "And now, I can’t imagine a tomorrow without you in it.",
        "So, I have to ask…"
    ];

    return (
        <div className="confession-page">
            <div className="story-container">
                <div className="story-text">
                    {paragraphs.map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    className="final-question"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <h2>Will you be mine?</h2>

                    <div className="buttons-container">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-gold"
                            style={getYesStyle()}
                            onClick={() => navigate('/success')}
                        >
                            Yes, I will
                        </motion.button>

                        <motion.button
                            className="btn-outline"
                            style={getNoStyle()}
                            onMouseEnter={handleNoInteraction}
                            onClick={handleNoInteraction}
                        >
                            {getNoText()}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ConfessionPage;
