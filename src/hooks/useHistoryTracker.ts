import { useEffect, useState } from "react";

// Hook that tracks an array of past count values
export function useHistoryTracker(currentCount: number) {
    // Initialize history with the current count to avoid initial state
    const [history, setHistory] = useState<number[]>([currentCount]);

    // On every change of currentCount, append to history array
    useEffect(() => {
        setHistory((prevHistory) => [...prevHistory, currentCount]);
    }, [currentCount]);

    // Helper function to clear the history array
    const clearHistory = () => setHistory([]);

    // Return history array and method to clear it
    return { history, clearHistory };
};