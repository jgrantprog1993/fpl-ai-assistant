'use client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css'; // Import global styles

function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#37003C" />
            </head>
            <body>
                <BrowserRouter>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </BrowserRouter>
            </body>
        </html>
    );
}

export default RootLayout;