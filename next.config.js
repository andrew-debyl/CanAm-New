/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable React's Strict Mode

    async redirects() {
      return [
        {
          source: '/About-Us.aspx',  // Replace with the old URL you want to redirect
          destination: '/about',  // Replace with the new URL where the traffic should go
          permanent: true,  // This makes it a 301 redirect (permanent)
        },
        {
          source: '/Contact-Us.aspx',
          destination: '/contact',
          permanent: true,
        },
        {
          source: '/Parts.aspx',
          destination: '/parts',
          permanent: true,
        },
        {
          source: '/Products.aspx',
          destination: '/equipment',
          permanent: true,
        },
        {
          source: '/Inventory.aspx',
          destination: '/equipment',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  