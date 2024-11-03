module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/screens': './src/screens',
          '@/data': './src/data',
          '@/assets': './src/assets',
          '@/components': './src/components',
        },
      },
    ],
  ],
};
