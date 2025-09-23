import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GUIDE_LINE_BASE_WIDTH = 375;
const GUIDE_LINE_BASE_HEIGHT = 872;
  
const w = (value: any) => {
    const width =
        typeof value === 'number' ? (value * 100) / GUIDE_LINE_BASE_WIDTH : value;
    return wp(width);
};

const h = (value: any) => {
    const width =
        typeof value === 'number' ? (value * 100) / GUIDE_LINE_BASE_HEIGHT : value;
    return hp(width);
};
  
export { w, h };