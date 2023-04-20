/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      "/women": { page: "/women" },
      "/men": { page: "/men" },
      "/wishlist": { page: "/wishlist" },
      "/orders": { page: "/orders" },
    };
  },
  trailingSlash: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
};

const withImages = require("next-images");

module.exports = { nextConfig, withImages };
