import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeagueDetails = ({ leagueId }) => {
  const [league, setLeague] = useState(null);
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (leagueId) {
      const fetchLeagueDetails = async () => {
        try {
          const response = await axios.get(`/api/leagues?leagueId=${leagueId}`);
          console.log('Fetched league details:', response.data); // Log the response data
          
          // Set league and standings based on the response structure
          setLeague(response.data.league);
          setStandings(response.data.standings.results);
        } catch (error) {
          console.error('Error fetching league details:', error);
          setError('Failed to fetch league details.');
        }
      };

      fetchLeagueDetails();
    }
  }, [leagueId]);

  if (error) {
    return <p className="text-red-500">{error}</p>; // Tailwind for error message
  }

  if (!league) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{league.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Standings:</h2>
      {standings.length > 0 ? (
        <div className="space-y-4">
          {standings.map((player) => (
            <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md p-4" key={player.id}>
              <div className="w-16 text-center text-lg font-bold text-gray-700">{player.rank}</div>
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{player.entry_name}</h2>
                <h3 className="text-lg font-semibold">Current Rank: {player.rank}</h3>
                <h3 className="text-lg font-semibold">Last Week's Rank: {player.last_rank}</h3>
                <p className="text-gray-700">Gamweek Points: {player.event_total}</p>
                <p className="text-gray-700">Total Points: {player.total}</p>
              </div>
              <div className="ml-4 text-2xl"> {/* Increased font size for arrows */}
                {player.last_rank > player.rank ? (
                  <span className="text-red-500">&#8595;</span> // Down arrow
                ) : player.last_rank < player.rank ? (
                  <span className="text-green-500">&#8593;</span> // Up arrow
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No standings available.</p>
      )}
    </div>
  );
};

export default LeagueDetails;