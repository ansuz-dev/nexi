/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  eslint: {ignoreDuringBuilds: true},
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    domains: [
      "localhost",
    ],
  },
  // swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/u,
      // include: [path.resolve(__dirname, "assets/icons")],
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [{
              name: "removeViewBox",
              active: false,
            }],
          },
        },
      }],
    });

    return config;
  },
};

module.exports = nextConfig;
