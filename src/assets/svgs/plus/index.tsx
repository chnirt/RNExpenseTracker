import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function PlusSVG(props: SvgProps) {
  const {fill = '#000', width = 24, height = 24} = props;
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path fill={fill} d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
    </Svg>
  );
}
