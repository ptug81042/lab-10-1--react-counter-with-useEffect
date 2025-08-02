import React from 'react';

// Props expect an array of numbers representing past counts
interface HistoryListProps {
    history: number[];
};

const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
    return (
        <div>
            <h3>Previous Counts:</h3>
            {/* Conditionally render message if no history */}
            {history.length === 0 ? (
                <p>No history yet.</p>
            ) : (
                // Join array elements as a comma-separated string
                <p>{history.join(', ')}</p>
            )};
        </div>
    );
};

export default HistoryList;