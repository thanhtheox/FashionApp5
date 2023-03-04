import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m9.612 19-6.717-7 6.717-7M3.267 11.891H21"
      stroke="#14142B"
      {...props}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
