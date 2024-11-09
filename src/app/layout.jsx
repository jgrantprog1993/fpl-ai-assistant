export default function RootLayout({ children }) {
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
} 