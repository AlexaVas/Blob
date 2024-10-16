/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // For GLSL files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    });

    // Enable content hashing for JS/CSS
    if (!isServer) {
      config.output.filename = "static/chunks/[name].[contenthash:8].js";
      config.output.chunkFilename = "static/chunks/[name].[contenthash:8].js";
    }
    return config;
  },
};

export default nextConfig;
