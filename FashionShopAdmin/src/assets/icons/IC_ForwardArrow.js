import * as React from 'react';
// eslint-disable-next-line prettier/prettier
import Svg, { Path } from "react-native-svg"
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.283 5 21 12l-6.717 7M20.628 12.109H2.895"
      stroke="#14142B"
      {...props}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
