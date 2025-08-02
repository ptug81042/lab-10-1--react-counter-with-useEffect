import { useEffect } from "react";

// Interface for increment and decrement callbacks
interface KeyboardControlsOptions {
    onIncrement: () => void;
    onDecrement: () => void;
};

// Hook to add keyboard listeners for ArrowUp and ArrowDown keys
export function useKeyboardControls({ onIncrement, onDecrement }: KeyboardControlsOptions) {
    useEffect(() => {
        // Handler checks event key and calls appropriate callback
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault(); // Prevent default scroll behavior
                onIncrement();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                onDecrement();
            }
        };

        // Attach event listener to document
        document.addEventListener('keydown', handleKeyDown);
        
        // Cleanup listener on unmount or dependencies change
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onIncrement, onDecrement]); // Re-run effect if callbacks change
};