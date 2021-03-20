import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function CardSVG(props: SvgProps) {
  const {fill = '#000', width = 24, height = 24} = props;
  return (
    <Svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M22 3a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h20zm1 8H1v8a1 1 0 001 1h20a1 1 0 001-1v-8zM8 16v1H3v-1h5zm13-2v1h-3v-1h3zm-10 0v1H3v-1h8zM1 8v2h22V8H1zm22-1V5a1 1 0 00-1-1H2a1 1 0 00-1 1v2h22z"
      />
    </Svg>
  );
}

export function CardFillSVG(props: SvgProps) {
  const {fill = '#000', width = 24, height = 24} = props;
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M0 8V5a2 2 0 012-2h20a2 2 0 012 2v3H0zm24 3v8a2 2 0 01-2 2H2a2 2 0 01-2-2v-8h24zM9 17H3v1h6v-1zm3-2H3v1h9v-1zm9 0h-3v1h3v-1z"
      />
    </Svg>
  );
}
