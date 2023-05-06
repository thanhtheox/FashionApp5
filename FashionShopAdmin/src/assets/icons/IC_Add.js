import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={25} height={25}>
    <Path stroke="#000" d="M12 3v18M3 12h18" />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
