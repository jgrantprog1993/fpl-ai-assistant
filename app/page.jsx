'use client';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LeagueDetails from '../src/components/LeagueDetails';
import TeamInfoAndLeagues from '../src/components/TeamInfoAndLeagues';

function AppContent() {
    const [teamId, setTeamId] = useState('');
    const [isClient, setIsClient] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        setIsClient(true); // This will run only on the client
    }, []);

    useEffect(() => {
        console.log('Current Path:', location.pathname);
        console.log('Current Team ID:', teamId);
        if (location.pathname === '/') {
            setTeamId('');
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen p-6">
            <div className="container mx-auto px-4 py-8">
                {location.pathname === '/' && ( // Only show on the homepage
                    <>
                        <h2 className="text-3xl font-bold mb-4">FPL Team Viewer</h2>
                        <input
                            type="text"
                            value={teamId}
                            onChange={(e) => setTeamId(e.target.value)}
                            placeholder="Enter your FPL Team ID (e.g. 1234567)"
                            className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                        />
                    </>
                )}
                {isClient && (
                    <Routes>
                        <Route path="/" element={teamId && <TeamInfoAndLeagues teamId={teamId} />} />
                        <Route path="/league/:leagueId" element={<LeagueDetails />} />
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default AppContent;