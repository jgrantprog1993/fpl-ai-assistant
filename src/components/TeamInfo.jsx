// src/components/TeamInfo.jsx
import React from 'react';

function TeamInfo({ teamId }) {
    // Mock data for demonstration
    const teamData = {
        name: "Guinness Grapplers",
        summary_overall_points: 611,
        summary_overall_rank: 1918457
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Team Information</h2>
            <p>Team Name: {teamData.name}</p>
            <p>Overall Points: {teamData.summary_overall_points}</p>
            <p>Overall Rank: {teamData.summary_overall_rank}</p>
        </div>
    );
}

export default TeamInfo;