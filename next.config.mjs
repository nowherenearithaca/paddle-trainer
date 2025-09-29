// export default { reactStrictMode: true }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // <-- enables static export
  trailingSlash: true, // <-- good for basic hosts (serves /page/index.html)
  // If deploying under a subfolder like https://yourdomain.com/paddle
  // basePath: '/paddle',   // <-- uncomment & set, then re-export
  basePath: "/paddle-trainer",
  assetPrefix: "/paddle-trainer/",
};
export default nextConfig;
