import tw from 'lib/tailwind';
import { FC } from 'react';
import { View } from 'react-native';

const Divider: FC = () => <View style={tw`bg-divider h-[1px] w-full`} />;

export default Divider;
