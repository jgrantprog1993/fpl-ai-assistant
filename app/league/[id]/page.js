// app/league/[id]/page.js
'use client'; // Ensure this is a client component
import { usePathname } from 'next/navigation';
import LeagueDetails from '../../../src/components/LeagueDetails'; // Adjust the path as necessary

const LeagueDetailsPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop(); // Extract the last segment of the path

  // Check if id is available before rendering LeagueDetails
  if (!id) {
    return <p>Loading...</p>; // or some loading state
  }

  // Render the LeagueDetails component and pass the id as a prop
  return <LeagueDetails leagueId={id} />;
};

export default LeagueDetailsPage;