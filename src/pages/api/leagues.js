import axios from 'axios';

export default async function handler(req, res) {
  const { leagueId } = req.query; // Get leagueId from the query
  if (!leagueId) {
    return res.status(400).json({ error: 'leagueId is required' });
  }

  try {
    const response = await axios.get(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching league details:', error.message);
    res.status(500).json({ error: 'Failed to fetch league details.' });
  }
}