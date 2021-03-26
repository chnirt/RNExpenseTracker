import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function TransactionFillSVG(props: SvgProps) {
  const {fill = '#000', width = 50, height = 50} = props;
  return (
    <Svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <Path
        fill={fill}
        d="M444.862 109.779L338.221 3.138A10.63 10.63 0 00330.667 0h-224C83.146 0 64 19.135 64 42.667v426.667C64 492.865 83.146 512 106.667 512h298.667c23.52 0 42.666-19.135 42.666-42.667v-352a10.63 10.63 0 00-3.138-7.554zM160 149.333c-17.646 0-32-14.354-32-32 0-13.888 8.944-25.617 21.333-30.035v-1.965c0-5.896 4.771-10.667 10.667-10.667s10.667 4.771 10.667 10.667h10.667C187.229 85.333 192 90.104 192 96s-4.771 10.667-10.667 10.667H160c-5.875 0-10.667 4.781-10.667 10.667 0 5.885 4.792 10.667 10.667 10.667 17.646 0 32 14.354 32 32 0 13.888-8.944 25.617-21.333 30.035V192c0 5.896-4.771 10.667-10.667 10.667s-10.667-4.771-10.667-10.667h-10.667a10.66 10.66 0 01-10.667-10.667 10.66 10.66 0 0110.667-10.667H160c5.875 0 10.667-4.781 10.667-10.667s-4.792-10.666-10.667-10.666zM266.667 448h-128A10.66 10.66 0 01128 437.333a10.66 10.66 0 0110.667-10.667h128a10.66 10.66 0 0110.667 10.667A10.662 10.662 0 01266.667 448zm106.666-64H138.667A10.66 10.66 0 01128 373.333a10.66 10.66 0 0110.667-10.667h234.667a10.66 10.66 0 0110.667 10.667A10.662 10.662 0 01373.333 384zm0-64H138.667A10.66 10.66 0 01128 309.333a10.66 10.66 0 0110.667-10.667h234.667a10.66 10.66 0 0110.667 10.667A10.662 10.662 0 01373.333 320zm0-64H138.667A10.66 10.66 0 01128 245.333a10.66 10.66 0 0110.667-10.667h234.667a10.66 10.66 0 0110.667 10.667A10.662 10.662 0 01373.333 256zm0-64h-128a10.66 10.66 0 01-10.667-10.667 10.66 10.66 0 0110.667-10.667h128A10.66 10.66 0 01384 181.333 10.66 10.66 0 01373.333 192zm-10.666-85.333c-11.771 0-21.333-9.573-21.333-21.333V36.417l70.25 70.25h-48.917z"
      />
    </Svg>
  );
}

export function TransactionSVG(props: SvgProps) {
  const {fill = '#000', width = 50, height = 50} = props;
  return (
    <Svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <Path
        fill={fill}
        d="M444.875 109.792L338.208 3.125c-2-2-4.708-3.125-7.542-3.125h-224C83.146 0 64 19.135 64 42.667v426.667C64 492.865 83.146 512 106.667 512h298.667c23.52 0 42.666-19.135 42.666-42.667v-352c0-2.833-1.125-5.541-3.125-7.541zM341.333 36.417l70.25 70.25h-48.917c-11.771 0-21.333-9.573-21.333-21.333V36.417zm85.334 432.916c0 11.76-9.563 21.333-21.333 21.333H106.667c-11.771 0-21.333-9.573-21.333-21.333V42.667c0-11.76 9.563-21.333 21.333-21.333H320v64C320 108.865 339.146 128 362.667 128h64v341.333z"
      />
      <Path
        fill={fill}
        d="M373.333 298.667H138.667A10.66 10.66 0 00128 309.334a10.66 10.66 0 0010.667 10.667h234.667a10.66 10.66 0 0010.667-10.667 10.662 10.662 0 00-10.668-10.667zM373.333 234.667H138.667A10.66 10.66 0 00128 245.334a10.66 10.66 0 0010.667 10.667h234.667a10.66 10.66 0 0010.667-10.667 10.662 10.662 0 00-10.668-10.667zM373.333 362.667H138.667A10.66 10.66 0 00128 373.334a10.66 10.66 0 0010.667 10.667h234.667a10.66 10.66 0 0010.667-10.667 10.662 10.662 0 00-10.668-10.667zM266.667 426.667h-128A10.66 10.66 0 00128 437.334a10.66 10.66 0 0010.667 10.667h128a10.66 10.66 0 0010.667-10.667 10.662 10.662 0 00-10.667-10.667zM234.667 181.333A10.66 10.66 0 00245.334 192h128a10.66 10.66 0 0010.667-10.667 10.66 10.66 0 00-10.667-10.667h-128a10.662 10.662 0 00-10.667 10.667zM160 170.667h-21.333A10.66 10.66 0 00128 181.334a10.66 10.66 0 0010.667 10.667h10.667c0 5.896 4.771 10.667 10.667 10.667s10.667-4.771 10.667-10.667v-1.965C183.056 185.617 192 173.888 192 160c0-17.646-14.354-32-32-32-5.875 0-10.667-4.781-10.667-10.667 0-5.885 4.792-10.667 10.667-10.667h21.333c5.896 0 10.667-4.771 10.667-10.667s-4.771-10.667-10.667-10.667h-10.667c0-5.896-4.771-10.667-10.667-10.667s-10.667 4.771-10.667 10.667v1.965C136.944 91.716 128 103.445 128 117.333c0 17.646 14.354 32 32 32 5.875 0 10.667 4.781 10.667 10.667s-4.792 10.667-10.667 10.667z"
      />
    </Svg>
  );
}
