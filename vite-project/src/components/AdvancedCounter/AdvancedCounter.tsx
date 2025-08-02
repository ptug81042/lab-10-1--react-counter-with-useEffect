import React, { useState, useCallback } from 'react';

import styles from './styles.module.css';

// Import child components and hooks
import CounterDisplay from '../CounterDisplay/CounterDisplay';
import CounterControls from '../CounterControls/CounterControls';
import StepInput from '../StepInput/StepInput';
import HistoryList from '../HistoryList/HistoryList';

import { useLocalStorageSync } from '../../hooks/useLocalStorageSync';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { useHistoryTracker } from '../../hooks/useHistoryTracker';

// Key used for saving count in localStorage
const LOCAL_STORAGE_KEY = 'advanced-counter-count';

const AdvancedCounter: React.FC = () => {
    // Initialize count from localStorage or default to 0
    const initialCount = (() => {
        if (typeof window !== undefined) {
            const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
            return saved ? JSON.parse(saved) as number : 0;
        }
        // Default fallback if running on server or no storage
        return 0;
    })();

    // State for current count
    const [count, setCount] = useState<number>(initialCount);
    // State for current step size (default to 1)
    const [step, setStep] = useState<number>(1);

    // Custom hook for history tracking (starts with initial count)
    const {history, clearHistory} = useHistoryTracker(count);

    // Sync count state to localStorage whenever it changes
    useLocalStorageSync(LOCAL_STORAGE_KEY, count);

    // Handlers to increment/decrement count by current step, wrapped in useCallback to optimize re-renders
    const increment = useCallback(() => setCount((c) => c + step), [step]);
    const decrement = useCallback(() => setCount((c) => c - step), [step]);

    // Hook to add keyboard controls for increment and decrement actions
    useKeyboardControls({ onIncrement: increment, onDecrement: decrement });

    // Reset handler clears count and history
    const reset = () => {
        setCount(0);
        clearHistory();
    };

    return (
        <section className={`${styles.container} ${styles.section}`}>
            {/* Display current count */}
            <CounterDisplay count={count} />

            {/* Buttons for increment, decrement, reset */}
            <CounterControls 
                onIncrement={increment}
                onDecrement={decrement}
                onReset={reset}
            />

            {/* Input field for setting step value */}
            <StepInput 
                step={step}
                onStepChange={setStep}
            />

            {/* Display history of all count values */}
            <HistoryList history={history} />
        </section>
    );
};

export default AdvancedCounter;