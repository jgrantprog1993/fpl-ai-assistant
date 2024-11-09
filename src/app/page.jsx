'use client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TeamInfoAndLeagues from '../components/TeamInfoAndLeagues';
import LeagueDetails from '../components/LeagueDetails';

function AppContent() {
  const [teamId, setTeamId] = useState('');
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      {!location.pathname.startsWith('/league/') && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">FPL Team Viewer</h1>
          <input
            type="text"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
            placeholder="Enter your FPL Team ID (e.g. 1234567)"
            className="border border-gray-300 p-2 rounded w-full max-w-md"
          />
        </div>
      )}
      <Routes>
        <Route path="/" element={teamId && <TeamInfoAndLeagues teamId={teamId} />} />
        <Route path="/league/:leagueId" element={<LeagueDetails />} />
      </Routes>
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