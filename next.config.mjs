const backendUrl = new URL(process.env.NEXT_PUBLIC_BACKEND_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	experimental: {
		optimizePackageImports: ["@ark-ui/react"],
	},

	async rewrites() {
		return [
			{
				source: "/api/graphql",
				destination: `${backendUrl}/api/graphql`,
			},
		];
	},

	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "api.aisc.online",
				pathname: "**",
			},
		],
	},
	transpilePackages: ["use-mobile-detect-hook"],
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg"),
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ["@svgr/webpack"],
			},
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default nextConfig;
