import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export function CardSVG(props: SvgProps) {
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
          d="M20.64 17.2c-7.565 0-13.76 6.195-13.76 13.76v75.68c0 6.719 4.891 12.268 11.288 13.438l4.515 25.477c1.316 7.444 8.465 12.497 15.91 11.18l115.132-20.532c7.444-1.317 12.497-8.466 11.18-15.91l-13.223-74.498a3.159 3.159 0 00-.322-.967V30.96c0-7.565-6.195-13.76-13.76-13.76zm0 6.88H137.6c3.843 0 6.88 3.037 6.88 6.88v10.32H13.76V30.96c0-3.843 3.037-6.88 6.88-6.88zm-6.88 34.4h130.72v48.16c0 3.843-3.037 6.88-6.88 6.88H20.64c-3.843 0-6.88-3.037-6.88-6.88zm17.2 10.32v6.88H86V68.8zm120.4 14.513l6.772 38.162c.672 3.776-1.8 7.283-5.59 7.955L37.41 149.962c-3.776.672-7.283-1.8-7.955-5.59l-4.3-23.972H137.6c7.565 0 13.76-6.195 13.76-13.76z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}

export function CardFillSVG(props: SvgProps) {
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
          d="M20.64 17.2c-7.592 0-13.76 6.168-13.76 13.76v10.32h144.48V30.96c0-7.592-6.168-13.76-13.76-13.76zM6.88 58.48v48.16c0 7.592 6.168 13.76 13.76 13.76H137.6c7.592 0 13.76-6.168 13.76-13.76V58.48zM30.96 68.8H86v6.88H30.96zm127.28 13.975v23.865c0 11.382-9.258 20.64-20.64 20.64H20.64c-.417 0-.873-.08-1.29-.107l3.333 18.382c.645 3.628 2.58 6.826 5.59 8.922a13.585 13.585 0 007.847 2.473c.806 0 1.666-.067 2.473-.215l115.132-20.532a13.82 13.82 0 008.923-5.698c2.096-3.01 2.902-6.598 2.257-10.212z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}
