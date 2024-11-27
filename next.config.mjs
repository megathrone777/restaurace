import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
/*
  redirects: async () => [
    {
      destination: "https://udlabacu.com/:path*",
      has: [{ type: "host", value: "www.udlabacu.com" }],
      permanent: true,
      source: "/:path*",
    },
  ],*/
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
