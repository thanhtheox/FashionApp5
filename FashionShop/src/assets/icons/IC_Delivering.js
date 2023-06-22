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
      d="M25.625 9.097 15 15m0 0L4.375 9.097M15 15v11.875m11.25-6.802V9.927c0-.428 0-.642-.063-.833a1.25 1.25 0 0 0-.268-.455c-.136-.148-.323-.252-.698-.46l-9.25-5.14c-.354-.196-.531-.295-.72-.333a1.25 1.25 0 0 0-.503 0c-.188.038-.365.137-.72.334l-9.25 5.139c-.374.208-.56.312-.697.46a1.25 1.25 0 0 0-.268.455c-.063.19-.063.405-.063.833v10.146c0 .429 0 .643.063.834.056.169.147.324.268.455.136.148.323.252.698.46l9.25 5.139c.354.197.531.295.72.334.165.034.337.034.503 0 .188-.039.365-.137.72-.334l9.25-5.14c.374-.207.56-.311.697-.46.12-.13.212-.285.268-.454.063-.191.063-.405.063-.834ZM20.625 11.875l-11.25-6.25"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
