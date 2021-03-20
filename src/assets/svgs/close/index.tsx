import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function CloseSVG(props: SvgProps) {
  const {fill = '#000', width = 172, height = 172} = props;
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M23.954 21.03l-9.184-9.095 9.092-9.174L21.03-.046l-9.09 9.179L2.764.045l-2.81 2.81L9.14 11.96.045 21.144l2.81 2.81 9.112-9.192 9.18 9.1z"
      />
    </Svg>
  );
}
