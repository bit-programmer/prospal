import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useConvince } from '../hooks/useConvince';
import '../LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const { handleNoInteraction, getNoText, getYesStyle, getNoStyle } = useConvince();

    return (
        <div className="landing-page">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="cinematic-container"
            >
                <h1 className="cinematic-heading">
                    <span>A Question For You</span>
                    There is something I have carried in my heart for so long.
                </h1>

                <div className="buttons-container">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-gold"
                        onClick={() => navigate('/confession')}
                    >
                        Hear Me Out
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
    );
};

export default LandingPage;
