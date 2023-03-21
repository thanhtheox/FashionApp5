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
    <Path d="M12 3v18M3 12h18" stroke="#000" {...props} />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
