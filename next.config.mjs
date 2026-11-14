/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/services/curtain-walls-specialty-fabrication",
        destination: "/services/bespoke-aluminum-architectural-fabrication",
        permanent: true,
      },
      {
        source: "/services/automated-motorized-shutters",
        destination: "/services/automatic-manual-shutter-systems",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
