'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Team Information</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Team Name:</span> {teamData.name}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Overall Points:</span> {teamData.summary_overall_points}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Overall Rank:</span> {teamData.summary_overall_rank}
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Leagues</h2>
      <ul className="space-y-3">
        {teamData.leagues.classic.map(league => (
          <li key={league.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <Link href={`/league/${league.id}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800">
              {league.name} - Rank: {league.entry_rank}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default TeamInfoAndLeagues;