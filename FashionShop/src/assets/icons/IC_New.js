import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Path
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25 11.875V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C23.1 5 22.4 5 21 5H6.5c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 6.9 2.5 7.6 2.5 9v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 25 5.1 25 6.5 25H21c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C25 23.1 25 22.4 25 21v-2.875M18.75 15c0-.58 0-.871.048-1.113a2.5 2.5 0 0 1 1.964-1.964c.242-.048.532-.048 1.113-.048h2.5c.58 0 .871 0 1.113.048a2.5 2.5 0 0 1 1.964 1.964c.048.242.048.532.048 1.113 0 .58 0 .871-.048 1.113a2.5 2.5 0 0 1-1.964 1.964c-.242.048-.532.048-1.113.048h-2.5c-.58 0-.871 0-1.113-.048a2.5 2.5 0 0 1-1.964-1.964c-.048-.242-.048-.532-.048-1.113Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
