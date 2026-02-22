/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/pico-games/:path*",
        headers: [{ key: "Content-Type", value: "application/javascript" }],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/pico-games/:path*.html",
        destination: "/pico-games/:path*.html",
      },
    ];
  },
};

export default nextConfig;
