'use client'; // Add this line at the top

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TeamInfo({ teamId }) {
  const [teamData, setTeamData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (teamId) {
      const fetchTeamData = async () => {
        try {
          console.log(`Fetching data for team ID: ${teamId}`);
          const response = await axios.get(`/api/fpl?teamId=${teamId}`);
          console.log('Response:', response.data);
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
    <div>
      <h2>Team Information</h2>
      <p>Team Name: {teamData.name}</p>
      <p>Overall Points: {teamData.summary_overall_points}</p>
      <p>Overall Rank: {teamData.summary_overall_rank}</p>
      {/* Add more fields as needed */}
    </div>
  );
}