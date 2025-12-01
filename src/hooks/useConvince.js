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
    const [noEnabled, setNoEnabled] = useState(false);

    const NO_CLICK_THRESHOLD = 10; // Enable "No" button after 10 clicks

    const handleNoInteraction = () => {
        const newCount = noCount + 1;
        setNoCount(newCount);

        // Check if we've reached the threshold to enable the No button
        if (newCount >= NO_CLICK_THRESHOLD) {
            setNoEnabled(true);
            // Don't move the button anymore once it's enabled
            return;
        }

        setIsMoving(true);

        // Mobile detection
        const isMobile = window.innerWidth <= 768;

        // Safe bounds calculation with larger margins
        const buttonWidth = isMobile ? 250 : 200; // Even larger on mobile
        const buttonHeight = isMobile ? 100 : 80; // Taller on mobile
        const padding = isMobile ? 80 : 50; // Much larger safety margin on mobile

        const maxX = Math.max(padding, window.innerWidth - buttonWidth - padding);
        const maxY = Math.max(padding, window.innerHeight - buttonHeight - padding);

        // Ensure we stay within bounds
        const newX = Math.max(padding, Math.min(Math.random() * (maxX - padding), maxX - padding));
        const newY = Math.max(padding, Math.min(Math.random() * (maxY - padding), maxY - padding));

        setPosition({ x: newX, y: newY });
    };

    const handleNoClick = () => {
        // Just return whether the button is enabled
        // The API call will be made from the RejectionPage
        return noEnabled;
    };

    const getNoText = () => {
        if (noEnabled) {
            return "No, I'm sure";
        }
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
        if (noEnabled) {
            // Return to normal position when enabled
            return {
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            };
        }
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
        noEnabled,
        handleNoInteraction,
        handleNoClick,
        getNoText,
        getYesStyle,
        getNoStyle,
    };
}
