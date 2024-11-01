module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/screens': './src/screens',
          '@/components': './src/components',
          '@/api': './src/api',
          '@/lib': './src/lib',
          '#/icons': './assets/icons',
          '#/images': './assets/images',
          '#/fonts': './assets/images',
        },
      },
    ],
  ],
}
