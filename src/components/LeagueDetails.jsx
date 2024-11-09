// src/components/LeagueDetails.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LeagueDetails = () => {
  const { leagueId } = useParams();
  const [league, setLeague] = useState([]);
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagueDetails = async () => {
      try {
        const response = await axios.get(`/api/leagues?leagueId=${leagueId}`);
        setTeams(response.data.standings.results);
        setLeague(response.data.league);
      } catch (error) {
        console.error('Error fetching league details:', error.message);
        setError('Failed to fetch league details.');
      }
    };

    fetchLeagueDetails();
  }, [leagueId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!teams.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">League Details</h2>
      <h3 className="text-lg font-semibold">League ID: {leagueId}</h3>
      <h3 className="text-lg font-semibold">League Name: {league.name}</h3>
      
      <ul className="mt-4 space-y-4">
        {teams.map(team => (
          <li key={team.entry} className="bg-gray-800 shadow-md rounded-lg p-4">
            <h4 className="text-lg font-semibold">{team.entry_name}</h4>
            <p className="text-gray-400">Manager Name: {team.player_name}</p>
            <p className="text-gray-400">Current League Rank: {team.rank}</p>
            <p className="text-gray-400">Last Week’s Rank: {team.last_rank}</p>
            <p className="text-gray-400">Entry ID: {team.entry}</p>
            <p className="text-gray-400">Total Points: {team.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeagueDetails;