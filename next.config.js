/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	// 외부 사이트에서 이미지 파일을 가져오고 싶을 때 설정
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	},
	// 페이지 리다이렉트
	async redirects() {
		return [
			{
				source: '/products/deleted_forever',
				destination: '/products',
				permanent: true
			},
			{
				source: '/products/deleted_temp',
				destination: '/products',
				permanent: false
			}
		]
	},
	// 복잡하거나 or 외부에 노출되면 안되는(민감한) url을 다른 것으로 대체
	async rewrites() {
		return [
			{
				source: '/wijeong',
				destination: '/about/me/wijeong'
			},
			{
				source: '/items/:slug',
				destination: '/products/:slug'
			}
		]
	}
};

module.exports = nextConfig;
