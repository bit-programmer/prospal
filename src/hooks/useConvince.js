import { useState } from 'react';

const PHRASES = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

export function useConvince() {
    const [noCount, setNoCount] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);

    const handleNoInteraction = () => {
        setNoCount(noCount + 1);
        setIsMoving(true);

        // Safe bounds calculation with larger margins
        const buttonWidth = 200; // Increased estimate
        const buttonHeight = 80; // Increased estimate
        const padding = 50; // Larger safety margin

        const maxX = Math.max(padding, window.innerWidth - buttonWidth - padding);
        const maxY = Math.max(padding, window.innerHeight - buttonHeight - padding);

        const newX = Math.max(padding, Math.min(Math.random() * maxX, maxX));
        const newY = Math.max(padding, Math.min(Math.random() * maxY, maxY));

        setPosition({ x: newX, y: newY });
    };

    const getNoText = () => {
        return PHRASES[Math.min(noCount, PHRASES.length - 1)];
    };

    const getYesStyle = () => {
        return {
            transform: `scale(${1 + noCount * 0.1})`, // Reduced growth rate slightly
            transition: 'transform 0.3s ease',
        };
    };

    const getNoStyle = () => {
        if (!isMoving) return {};
        return {
            position: 'fixed',
            left: position.x,
            top: position.y,
            transition: 'all 0.2s ease',
            zIndex: 50,
            backgroundColor: 'white', // Solid background for visibility
            border: '2px solid var(--color-text-secondary)',
        };
    };

    return {
        noCount,
        handleNoInteraction,
        getNoText,
        getYesStyle,
        getNoStyle,
    };
}
