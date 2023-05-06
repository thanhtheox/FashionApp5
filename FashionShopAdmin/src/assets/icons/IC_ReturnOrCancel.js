import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import scale from "../../constants/responsive"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={scale(28)} height={scale(28)}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.625 9.097 15 15m0 0L4.375 9.097M15 15v11.875m11.25-11.25V9.927c0-.428 0-.642-.063-.833a1.25 1.25 0 0 0-.268-.455c-.136-.148-.323-.252-.698-.46l-9.25-5.14c-.354-.196-.531-.295-.72-.333a1.25 1.25 0 0 0-.503 0c-.188.038-.365.137-.72.334l-9.25 5.139c-.374.208-.56.312-.697.46a1.25 1.25 0 0 0-.268.455c-.063.19-.063.405-.063.833v10.146c0 .429 0 .643.063.834.056.169.147.324.268.455.136.148.323.252.698.46l9.25 5.139c.354.197.531.295.72.334.165.034.337.034.503 0 .188-.039.365-.137.72-.334l.278-.155M9.375 5.626l11.25 6.25m0 8.124 6.25 6.25m0-6.25-6.25 6.25"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
