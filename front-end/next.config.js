/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["verbum"],
    images: {
        domains: [
            'opengraph.githubassets.com',
            'www.notion.so',
            'images.unsplash.com',
            's3.us-west-2.amazonaws.com'
        ]
    }
}

module.exports = nextConfig