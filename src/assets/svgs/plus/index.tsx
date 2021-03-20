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
      viewBox="0 0 172 172">
      <G
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: 'normal',
        }}>
        <Path d="M0 172V0h172v172z" />
        <Path
          d="M82.56 30.96v51.6h-51.6v6.88h51.6v51.6h6.88v-51.6h51.6v-6.88h-51.6v-51.6z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}
