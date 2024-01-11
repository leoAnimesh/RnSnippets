import {Text, TextProps} from 'react-native';
import React from 'react';

interface CustomTextProps extends TextProps {
  children: string;
}

const CustomText: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return <Text {...rest}>{children}</Text>;
};

export default CustomText;
