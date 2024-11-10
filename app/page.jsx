// app/page.jsx
'use client';
import React, { useState } from 'react';
import TeamIdInput from '../src/components/TeamIdInput';
import TeamInfoAndLeagues from '../src/components/TeamInfoAndLeagues';

function AppContent() {
    const [teamId, setTeamId] = useState('');

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#37003C] text-white space-y-6 px-4">
            <div className="w-full max-w-md">
                <TeamIdInput teamId={teamId} setTeamId={setTeamId} />
                {teamId && <TeamInfoAndLeagues teamId={teamId} />}
            </div>
        </div>
    );
}

export default AppContent;