/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "www.instagram.com"],
  },
};

module.exports = nextConfig;
