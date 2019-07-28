const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
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
        // await copyFile(join(dir, '/.nojekyll'), join(outDir, '/.nojekyll'));
        // await copyFile(join(dir, '/CNAME'), join(outDir, '/CNAME'));
        return {
            '/': { page: '/' },
            '/about': { page: 'about' },
            '/work': { page: 'work' }
        };
      },
      assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
      github: 'https://github.com/awiggs/awiggs.ca-source',
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
}));
