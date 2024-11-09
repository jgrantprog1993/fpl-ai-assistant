import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LeagueList({ teamId }) {
    const [leagues, setLeagues] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (teamId) {
            const fetchLeagues = async () => {
                try {
                    const response = await axios.get(`https://fantasy.premierleague.com/api/entry/${teamId}/leagues-classic/`);
                    setLeagues(response.data.leagues.classic);
                } catch (error) {
                    console.error('Error fetching leagues:', error);
                    setError('Failed to fetch leagues. Please check the team ID.');
                }
            };
            fetchLeagues();
        }
    }, [teamId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {error && <p>{error}</p>}
            {leagues.map((league) => (
            <div key={league.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{league.name}</h3>
              <p className="text-gray-400">League Code: {league.code}</p>
              <p className="text-gray-400">Created on: {new Date(league.createdAt).toLocaleDateString()}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2">
                View League
              </button>
        </div>
      ))}
    </div>
    );
}

export default LeagueList;