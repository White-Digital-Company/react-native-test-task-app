const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// твои текущие настройки для SVG
const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

// объединяем default + svgConfig
const mergedConfig = mergeConfig(defaultConfig, svgConfig);

// оборачиваем в NativeWind
module.exports = withNativeWind(mergedConfig, { input: './global.css' });