import React, { useState, useEffect } from 'react';

// Props interface expects current step and a callback to update it
interface StepInputProps {
    step: number;
    onStepChange: (newStep: number) => void;
};

const StepInput: React.FC<StepInputProps> = ({ step, onStepChange }) => {
    // Local staet to control input element's value as a string
    const [inputValue, setInputValue] = useState(step.toString());

    // Sync local input if external 'step' prop changes (e.g., reset)
    useEffect(() => {
        setInputValue(step.toString());
    }, [step]);

    // Handler to validate and update step on user input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        // Only allow digits or empty string for controlled input
        if (/^\d*$/.test(val)) {
            setInputValue(val);

            // Convert input to number or fallback to 1 if empty
            if (val === '') {
                onStepChange(1);
            } else {
                onStepChange(parseInt(val, 10));
            }
        }
    };

    return (
        <label>
            Step: {' '}
            <input 
                type="text" 
                inputMode='numeric' // Shows numeric keypad on mobile devices
                pattern='[0-9]*' // Ensures numeric input pattern
                value={inputValue} // Controlled input value from state
                onChange={handleChange} // Update state on change
                aria-label='Step value for counter increment and decrement' // Accessibility
            />
        </label>
    );
};

export default StepInput;