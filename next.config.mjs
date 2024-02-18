/** @type {import('next').NextConfig} */

const trimmed = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8)

const nextConfig = {

	images: {
		remotePatterns: [
			{
				hostname: "lh3.googleusercontent.com",
				protocol: "https",
			},
			{
				hostname: "avatars.githubusercontent.com",
				protocol: "https",
			},
			{
				hostname: `${trimmed}`,
				protocol: "https",
			}
		],
	},
};

export default nextConfig;
