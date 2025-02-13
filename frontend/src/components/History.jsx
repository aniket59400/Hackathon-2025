import React, { useEffect, useState } from 'react';
import axios from "axios";

function History() {
    const [call, setCall] = useState(1);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const callHistory = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getHistory", { params: { call } });
            setHistory(response.data.history || []);
            setCall((prev) => prev + 1);
            setError(null);
        } catch (error) {
            console.error("Error in getting history:", error);
            setError("Failed to load history");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        callHistory();
    }, []);

    if (loading) return <div className="w-8/12 h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="w-8/12 h-screen flex items-center justify-center text-red-500">{error}</div>;

    return (
        <div className='w-8/12 h-screen overflow-scroll bg-amber-500'>
            {history.length === 0 ? (
                <div className="p-4 text-center">No history available</div>
            ) : (
                history.map((data, index) => (
                    <div key={index} className='w-full p-2 border-[2px]'>
                        {data}
                    </div>
                ))
            )}
        </div>
    );
}

export default History;
