import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function BackspaceSVG(props: SvgProps) {
  const {fill = '#000', width = 24, height = 24} = props;
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44.18 44.18">
      <Path
        fill={fill}
        d="M10.625 5.09L0 22.09l10.625 17H44.18v-34H10.625zm31.555 32H11.734l-9.375-15 9.375-15H42.18v30z"
      />
      <Path
        fill={fill}
        d="M18.887 30.797l7.293-7.293 7.293 7.293 1.414-1.414-7.293-7.293 7.293-7.293-1.414-1.414-7.293 7.293-7.293-7.293-1.414 1.414 7.293 7.293-7.293 7.293z"
      />
    </Svg>
  );
}
