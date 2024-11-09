'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeamInfoAndLeagues = ({ teamId }) => {
  const [teamData, setTeamData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (teamId) {
      const fetchTeamData = async () => {
        try {
          const response = await axios.get(`/api/team?teamId=${teamId}`);
          setTeamData(response.data);
        } catch (error) {
          console.error('Error fetching team data:', error);
          setError('Failed to fetch team data. Please check the team ID.');
        }
      };
      fetchTeamData();
    }
  }, [teamId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!teamData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team Information</h2>
      <p className="text-gray-600">Team Name: {teamData.name}</p>
      <p className="text-gray-600">Overall Points: {teamData.summary_overall_points}</p>
      <p className="text-gray-600">Overall Rank: {teamData.summary_overall_rank}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Leagues</h2>
      <ul className="list-disc pl-5">
        {teamData.leagues.classic.map(league => (
          <li key={league.id} className="text-gray-600">
            <Link to={`/league/${league.id}`} className="text-blue-500 hover:underline">
              {league.name} - Rank: {league.entry_rank}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default TeamInfoAndLeagues;