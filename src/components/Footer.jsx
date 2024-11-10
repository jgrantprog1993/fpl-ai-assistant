// components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-[#37003C] text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;