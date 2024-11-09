// app/page.jsx
'use client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TeamInfoAndLeagues from '../src/components/TeamInfoAndLeagues';
import LeagueDetails from '../src/components/LeagueDetails';
import LeagueList from '../src/components/LeagueList';

function AppContent() {
  const [teamId, setTeamId] = useState('');
  const location = useLocation();

  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-500">Fantasy Premier League</h1>
        <nav>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            My Team
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-4">
            Join League
          </button>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!location.pathname.startsWith('/league/') && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">FPL Team Viewer</h2>
            <input
              type="text"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              placeholder="Enter your FPL Team ID (e.g. 1234567)"
              className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}
        <Routes>
          <Route path="/" element={teamId && <TeamInfoAndLeagues teamId={teamId} />} />
          <Route path="/league/:leagueId" element={<LeagueDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}