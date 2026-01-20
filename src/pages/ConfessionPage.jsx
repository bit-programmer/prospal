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
        "I don’t really know what changed between us. We were so happy—I was genuinely excited to meet you and to talk to you every day.",
        "Somewhere along the way, our conversations started fading, and I wasn’t ready for that because I had already started seeing a future with you.",
        "When we first started talking, I was honestly so happy—sharing my day with you, listening to yours, and feeling that interest from both sides.",
        "It felt natural. Somehow things changed, but I don’t want to let that be the end of it.",
        "I want us to talk like we used to, spend time together, and reconnect. I truly believe we vibe really well—it’ll feel like an adventure",
        "Concerts you like, trips, little moments—everything. I just want you to know that I have real feelings for you."
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
