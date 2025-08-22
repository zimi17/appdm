
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hbs.edu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cloudinary.hbs.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: "/studio/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3333/studio/:path*"
            : "/studio/index.html",
      },
    ]
  },
};

export default nextConfig;
