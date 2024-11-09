// pages/api/fpl.js

export default async function handler(req, res) {
    const { teamId } = req.query;
  
    try {
      const response = await fetch(`https://fantasy.premierleague.com/api/entry/${teamId}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }