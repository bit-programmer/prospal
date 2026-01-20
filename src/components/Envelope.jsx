import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Envelope.css';

const Envelope = ({ onOpen, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
            // Wait for animation to finish before triggering callback
            setTimeout(() => {
                onOpen && onOpen();
            }, 1000);
        }
    };

    return (
        <div className="envelope-container" onClick={handleClick}>
            <div className={`envelope ${isOpen ? 'open' : ''}`}>
                <div className="envelope-flap"></div>
                <div className="envelope-pocket"></div>
                <div className="wax-seal">P</div>
                <div className="card paper-texture">
                    <div className="elegant-border">
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>
                            For Devanshi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
