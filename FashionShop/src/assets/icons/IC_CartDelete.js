import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" 
  width={70}
  height={70}
  fill="none" {...props}>
    <Path
      stroke="#DD8560"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 3.25h6.5m-13 3.25h19.5m-2.167 0-.76 11.396c-.113 1.71-.17 2.564-.54 3.213a3.252 3.252 0 0 1-1.406 1.316c-.671.325-1.528.325-3.242.325h-3.27c-1.714 0-2.57 0-3.242-.325a3.25 3.25 0 0 1-1.406-1.316c-.37-.649-.427-1.503-.54-3.213L5.416 6.5m5.416 4.875v5.417m4.334-5.417v5.417"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
