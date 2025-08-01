import React from "react";

// Props interface expects a callback to handle increment action
interface IncrementButtonProps {
    onIncrement: () => void;
};

// Button component that triggers increment callback on click
const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
    return (
        // Basic button with click handler
        <button onClick={onIncrement}>Increment</button>
    );
};

export default IncrementButton;