import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={25} height={25}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="m2.81 6.5 4.55 4.56 7.97-7.98"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
