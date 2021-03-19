import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export function PlusSVG(props: SvgProps) {
  const {fill = '#000', width = 172, height = 172} = props;
  return (
    <Svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50">
      <Path
        fill={fill}
        d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm12 24H26v11h-2V26H13v-2h11V13h2v11h11v2z"
      />
    </Svg>
  );
}
