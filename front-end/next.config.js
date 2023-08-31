/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["verbum"],
    images: {
        domains: [
            'opengraph.githubassets.com',
            'images.unsplash.com',
        ]
    }
}

module.exports = nextConfig