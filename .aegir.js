
/** @type {import('aegir').PartialOptions} */
export default {
  dependencyCheck: {
    ignore: [
      // actual production deps not getting recognized
      '@tableflip/react-dropdown',
      'brace',
      'chart.js',
      'classnames',
      'details-polyfill',
      'internal-nav-helper',
      'is-ipfs',
      'istextorbinary',
      'react-ace',
      'react-chartjs-2',
      'react-copy-to-clipboard',
      'react-country-flag',
      'react-debounce-render',
      'react-dnd',
      'react-hook-form',
      'react-identicons',
      'react-joyride',
      'react-overlays',
      'uint8arrays',

      // type-only deps
      'ipfs',

      // webpack deps
      'crypto-browserify',
      'os-browserify',
      'path-browserify',
      'stream-browserify',
      'fake-indexeddb',

      // test deps
      'jest',
      'jest-environment-jsdom', // in npm script via --env=jsdom

      // storybook deps
      '@storybook/addons', // for types
      '@storybook/addon-a11y',
      '@storybook/addon-actions',
      '@storybook/addon-controls',
      '@storybook/addon-coverage',
      '@storybook/addon-essentials',
      '@storybook/addon-links',
      '@storybook/builder-webpack5', // storybookConfig.core.builder
      '@storybook/core-common', // types
      '@storybook/manager-webpack5', // implicit storybook dep
      '@storybook/preset-create-react-app',

      // npm scripts
      'wait-on',

      // github CI
      'nyc',
      'semantic-release'
    ],

    developmentIgnorePatterns: [
      'src/**/*.js',
      '!.aegir.js',
      '!.eslintrc.cjs',
      '!config-overrides.js',
      '!custom-release-notes-generator.cjs',
      '!postcss.config.js',
      '!**/*.test.js',
      '!**/*.stories.js',
      '!test/**',
      '!src/setupTests.js'
    ],

    productionIgnorePatterns: [
      '.aegir.js',
      '.eslintrc.cjs',
      'config-overrides.js',
      'custom-release-notes-generator.cjs',
      'postcss.config.js',
      '**/*.test.js',
      '**/*.stories.js',
      'test/**',
      'src/setupTests.js'
    ]
  }
}
