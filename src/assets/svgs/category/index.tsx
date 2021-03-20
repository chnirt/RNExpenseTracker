import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function CategorySVG(props: SvgProps) {
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
        d="M11 11H0V0h11v11zm13 0H13V0h11v11zM11 24H0V13h11v11zm13 0H13V13h11v11z"
      />
    </Svg>
  );
}
