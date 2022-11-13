/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placekitten.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
}
