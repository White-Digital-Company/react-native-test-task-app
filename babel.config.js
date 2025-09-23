module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        '@babel/plugin-proposal-private-methods',
        { loose: true }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        { loose: true }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/screens': './src/screens',
          },
        },
      ],
      'nativewind/babel',
    ],
  };
};