/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'baconmockup.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'spoonacular.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
}
