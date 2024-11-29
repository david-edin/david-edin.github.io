/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Change the output directory "out" -> "dist"
    distDir: "dist",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
