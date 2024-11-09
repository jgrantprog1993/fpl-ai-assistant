const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
});

module.exports = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://fantasy.premierleague.com/api/:path*', // Ensure HTTPS is used
      },
    ];
  },
  // Add any other Next.js configurations here
});