import { useEffect } from "react";

// Custom hook to sync a value to localStorage safely
export function useLocalStorageSync(key: string, value: any) {
    useEffect(() => {
        // Flag to track if effect was cleaned up before awaiting
        let isCancelled: boolean = false;

        // Function that writes to localStorage if not cancelled
        const saveToLocalStorage = () => {
            if (isCancelled) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        };
        
        saveToLocalStorage();

        // Cleanup function to prevent writing if component unmounts or updates fast
        return () => {
            isCancelled = true;
        };
    }, [key, value]); // Re-run if key or value changes
};