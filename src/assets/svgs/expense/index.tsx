import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export function ExpenseSVG(props: SvgProps) {
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
        d="M18 10a6 6 0 000 12 6 6 0 000-12zm.5 8.474V19H18v-.499a3.459 3.459 0 01-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425V13h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zM10.589 13H8v-2h3.765a7.99 7.99 0 00-1.176 2zM10 16H8v-2h2.264A7.959 7.959 0 0010 16zm2.727-6H8V8h7v.589A8 8 0 0012.727 10zM15 4H8V2h7v2zm0 3H8V5h7v2zm-4.411 12H8v-2h2.069c.088.698.264 1.369.52 2zM0 8h7v2H0V8zm0 3h7v2H0v-2zm12.727 11H8v-2h3.082a8.05 8.05 0 001.645 2zM0 17h7v2H0v-2zm0 3h7v2H0v-2zm0-6h7v2H0v-2z"
      />
    </Svg>
  );
}