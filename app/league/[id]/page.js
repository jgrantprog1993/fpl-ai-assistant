   // app/league/[id]/page.js
   'use client';
   import { useRouter } from 'next/router';

   const LeaguePage = () => {
     const router = useRouter();
     const { id } = router.query;

     return (
       <div>
         <h1>League ID: {id}</h1>
         {/* Render league data here */}
       </div>
     );
   };

   export default LeaguePage;