import React from 'react';

// Define props interface for the component, expecting a numeric count
interface counterDisplayProps {
    count: number;
};

// Functional component that receives current count and displays it
const CounterDisplay: React.FC<counterDisplayProps> = ({ count }) => {
    return (
        // Use ARIA live region to announce updates for screen readers
        <div
            aria-live='polite' 
            aria-atomic='true' 
            role='status'
        >
            {/* Display the current count in a heading for prominence */}
            <h2>Current Count: {count}</h2>
        </div>
    );
};

export default CounterDisplay;