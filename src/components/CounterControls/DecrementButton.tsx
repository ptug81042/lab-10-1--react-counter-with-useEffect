import React from 'react';

// Props interface expects a callback to handle decrement action
interface DecrementButtonProps {
    onDecrement: () => void;
};

// Button component that triggers decrement callback on click
const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
    return (
        <button
        onClick={onDecrement}
    >
        Decrement
    </button>
    );
};

export default DecrementButton;