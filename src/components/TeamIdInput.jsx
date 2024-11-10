// src/components/TeamIdInput.jsx
import React from 'react';

function TeamIdInput({ teamId, setTeamId }) {
    return (
        <input
            type="text"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
            placeholder="Enter your FPL Team ID (e.g. 1234567)"
            className="border border-gray-300 bg-gray-800 text-white p-4 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white"
        />
    );
}

export default TeamIdInput;