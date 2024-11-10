// components/Header.jsx
import { Link } from 'react-router-dom'; // Ensure you are using the correct Link

const Header = () => {
    return (
        <header className="bg-[#37003C] text-white p-4 flex justify-between items-center mb-6">
            <Link to="/" className="flex items-center"> {/* Use 'to' for react-router */}
                <img 
                    src="/images/pl-main-logo.png" 
                    alt="Fantasy Premier League Logo"
                    className="h-8 w-auto" 
                />
            </Link>
            <nav>
                <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                    My Team
                </Link>
                <Link to="/join-league" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-4">
                    Join League
                </Link>
            </nav>
        </header>
    );
};

export default Header;