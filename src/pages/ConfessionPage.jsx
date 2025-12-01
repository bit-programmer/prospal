import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useConvince } from '../hooks/useConvince';
import '../ConfessionPage.css';

const ConfessionPage = () => {
    const navigate = useNavigate();
    const { noEnabled, handleNoInteraction, handleNoClick, getNoText, getYesStyle, getNoStyle } = useConvince();

    const paragraphs = [
        "Listen, Prachi…",
        "There’s a truth I’ve been carrying like a quiet ache one that began back in our NIPER days, when I first felt something I didn’t yet understand.",
        "I waited for a sign, for the right moment, for fate to behave…",
        "but the night I finally tried to tell you, that whole incident with the officer tore the moment apart. So I’m done waiting on fate. I’m choosing to speak now because silence is starting to feel like a betrayal to what I feel.",
        "From the very first time we spoke, something in me shifted.",
        "You matched my energy, my ambition, my hunger to build, to grow, to rise. It felt like meeting a mirror but warmer, brighter, kinder.",
        "You, with your softness wrapped in spark… you were impossible to ignore. And yes, life kept canceling our plans, rearranging us like it enjoys testing what we can handle. But every time I meet you, something inside me spins out of control. My confidence cracks. My smile gives me away.",
        "My heartbeat trips over itself as if it recognizes you deeper than I admit. You walk in and the world narrows down to the sound of my pulse.",
        "I don’t want this fragile, undefined era between us to fade like smoke. I want it to transform into something real, something raw, something we can hold with both hands.",
        "Because I don’t just “like” you. I like you in that “ruin my sleep, steady my soul, shape my future” kind of way.",
        "In the kind of way that wants long drives where the road is ours, night walks where even silence becomes intimate, and growth not just in numbers or dreams but in every part of life that matters.",
        "I want sunsets shared without rushing. Problems faced without running. And all those wild adventures we once laughed about bungee jumping, surfing, trekking",
        "I want them with you, not someday, but when we decide. I want someone I can challenge, tease, push, protect and who does the same for me.",
        "Someone who walks beside me through the dark, not behind me or ahead with their fingers intertwined with mine like a quiet promise.",
        "I don’t know where this leads. No great story ever starts with certainty.",
        "But I know this. I want to find out with you. This isn’t pressure. It’s just truth truth I’ve carried too long, truth I trust you with.",
        "A feeling that refused to stay silent any longer."
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
