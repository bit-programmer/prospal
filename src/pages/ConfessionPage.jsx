import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useConvince } from '../hooks/useConvince';
import '../ConfessionPage.css';

const ConfessionPage = () => {
    const navigate = useNavigate();
    const { noEnabled, handleNoInteraction, handleNoClick, getNoText, getYesStyle, getNoStyle } = useConvince();

    const paragraphs = [
        "Listen, Devanshi…",
        "I don’t know exactly when things shifted between us, but I know what hasn’t changed—how I feel about you. When we first started talking, it felt easy and genuine",
        "I was excited to wake up and talk to you, to share my day, to listen to yours. Somewhere along the way, that started fading, and I wasn’t ready for it, because by then I had already started seeing a future with you.",
        "I don’t want to let something so meaningful just slip away without trying. I truly believe what we have is real—that we vibe naturally, that being together feels right.",
        "Talking, laughing, discovering things together… it feels like an adventure waiting to happen",
        "Concerts you love, visiting Derasar like Samet Shikhar and Palitana, trips, quiet moments—everything feels more special when I imagine it with you.",
        "I want you to know this clearly: you can trust me. If you choose me, you will never regret that decision.",
        "I won’t love you halfway. Some days it won’t be 50–50—it’ll be 80–20, 90–10, whatever it needs to be",
        "I’ll put in the effort, I’ll show up, and I’ll always stand by your side—in happiness, in confusion, in everything.",
        "I have real feelings for you, Devanshi. And today, I’m choosing to be honest about them.",
        "I don’t know what the future holds, but I know this—I want that future to be with you."
    ];

    return (
        <div className="confession-page">
            <div className="story-container">
                <div className="story-text">
                    {paragraphs.map((text, index) => (
                        <p key={index}>
                            {text}
                        </p>
                    ))}
                </div>

                <motion.div
                    className="final-question"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2>Will you give us a chance and walk this journey with me?</h2>

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
                            onMouseEnter={!noEnabled ? handleNoInteraction : undefined}
                            onClick={noEnabled ? () => navigate('/rejection') : handleNoInteraction}
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
