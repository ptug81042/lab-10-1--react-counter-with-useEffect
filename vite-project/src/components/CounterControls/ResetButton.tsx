import React from 'react';

// Props interface expects a callback to handle reset action
interface ResetButtonProps {
    onReset: () => void;
};

// Button component that triggers reset callback on click
const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button
            onClick={onReset}
        >
            Reset
        </button>
    );
};

export default ResetButton;