/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.jotform.com", "files.jotform.com"]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.jotform.com',
    //     port: '',
    //     pathname: '/uploads/**',
    //   },
    // ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: "html-loader",
    });

    // Important: return the modified config
    return config;
  },
  
}

module.exports = nextConfig
