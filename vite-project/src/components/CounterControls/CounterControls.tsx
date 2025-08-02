import React from 'react';

import styles from './styles.module.css';

// Import button components
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

// Props interface expects handlers for increment, decrement, and reset
interface CounterControlProps {
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
};

// Container component that groups the three buttons
const CounterControls: React.FC<CounterControlProps> = ({ 
    onIncrement,
    onDecrement,
    onReset,
}) => {
    return (
        <div className={styles.controls}>
            {/* Pass handlers to respective buttons */}
            <IncrementButton onIncrement={onIncrement} />
            <DecrementButton onDecrement={onDecrement} />
            <ResetButton onReset={onReset} />
        </div>
    );
};

export default CounterControls;