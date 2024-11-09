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
        <div>
            {error && <p>{error}</p>}
            <ul>
                {leagues.map((league) => (
                    <li key={league.id}>{league.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default LeagueList;