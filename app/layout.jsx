// app/layout.js
import '../src/styles/globals.css'; // Import global styles

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00843D" />
        <title>FPL AI</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;