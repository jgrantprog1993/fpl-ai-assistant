// app/layout.js
'use client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css'; // Import global styles

function RootLayout({ children }) {
  return (
    <BrowserRouter>
      <html lang="en">
          <head>
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#37003C" />
          </head>
          <body>
              <Header />
              <main>{children}</main>
              <Footer />
          </body>
      </html>
    </BrowserRouter>
  );
}

export default RootLayout;