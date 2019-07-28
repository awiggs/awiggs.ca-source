const withSass = require('@zeit/next-sass')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(withSass({
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        if (dev) {
          return {
              '/': { page: '/' }
          };
        }
        return {
            '/': { page: '/' },
            // '/about': { page: 'about' },
            // '/work': { page: 'work' }
        };
      },
      // assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
      github: 'https://github.com/awiggs/awiggs.ca-source',
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
}));
