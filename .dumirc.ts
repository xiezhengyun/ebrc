import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'dist',
  publicPath: '/ebrc/',
  base: '/ebrc/',
  title: 'ebrc',
  apiParser: {},
  resolve: {
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'components', dir: 'packages/components/src' },
      { type: 'utils', dir: 'packages/utils/src/' },
      // { type: 'utils', dir: 'packages/utils/src/format' },
    ],
    entryFile: './.dumi/resolve-entry.ts',
  },
  alias: {
    'ebn-fe-hooks': path.join(__dirname, 'packages/hooks/src'),
    'ebn-fe-components': path.join(__dirname, 'packages/components/src'),
    'ebn-fe-utils': path.join(__dirname, 'packages/utils/src'),
  },
  themeConfig: {
    name: 'ebrc',
    footer: 'Copyright © 2024-present',
  },
  // monorepoRedirect: {
  //   srcDir: ['src'],
  //   peerDeps: true,
  // },
});
