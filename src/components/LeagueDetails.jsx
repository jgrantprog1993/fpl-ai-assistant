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
  {teams.map(team => {
    const rankChange = team.rank - team.last_rank;
    const arrow = rankChange > 0 ? '↑' : rankChange < 0 ? '↓' : '';
    const arrowColor = rankChange > 0 ? 'text-green-500' : rankChange < 0 ? 'text-red-500' : 'text-gray-400';

    // Function to get ordinal suffix
    const getOrdinalSuffix = (num) => {
      if (num > 3 && num < 21) return 'th'; // Special case for 11th, 12th, 13th
      switch (num % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return (
      <li key={team.entry} className="bg-gray-800 shadow-md rounded-lg p-4 flex items-center justify-between">
        {/* Current Rank Section */}
        <div className="flex-shrink-0">
          <h4 className="text-lg font-semibold">{team.rank}{getOrdinalSuffix(team.rank)}</h4>
        </div>

        {/* Team Details Section */}
        <div className="flex-grow mx-4">
          <p className="text-gray-400">Team Name: {team.entry_name}</p>
          <p className="text-gray-400">Manager Name: {team.player_name}</p>
          <p className="text-gray-400">Last Week’s Rank: {team.last_rank}{getOrdinalSuffix(team.last_rank)}</p>
          <p className="text-gray-400">Total Points: {team.total}</p>
        </div>

        {/* Movement Arrow Section */}
        <div className={`text-lg font-bold ${arrowColor}`}>
          {arrow && <span>{arrow}</span>}
        </div>
      </li>
    );
  })}
</ul>
    </div>
  );
};

export default LeagueDetails;