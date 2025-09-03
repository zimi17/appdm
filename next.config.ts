/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    // Studio redirects are handled by Sanity's built-in routing
    return []
  },
  // Enable static generation with revalidation for dynamic content
  experimental: {
    // Enable static generation for dynamic routes
    staticPageGenerationTimeout: 120,
  },
  // Configure revalidation for Sanity content
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
    ]
  },
}

export default nextConfig