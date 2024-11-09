import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function LeagueDetails() {
  const { leagueId } = useParams();
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagueDetails = async () => {
      try {
        const response = await axios.get(`/api/leagues?leagueId=${leagueId}`);
        setTeams(response.data.standings.results);
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
    <div>
      <h2>League Details</h2>
      <ul>
        {teams.map(team => (
          <li key={team.entry}>
            <p>Manager Name: {team.player_name}</p>
            <p>Team Name: {team.entry_name}</p>
            <p>Current League Rank: {team.rank}</p>
            <p>Last Week’s Rank: {team.last_rank}</p>
            <p>Entry ID: {team.entry}</p>
            <p>Total Points: {team.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}