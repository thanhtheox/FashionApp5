import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M15.963 18.926 9 11.963 15.963 5" stroke="#14142B" {...props} />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
