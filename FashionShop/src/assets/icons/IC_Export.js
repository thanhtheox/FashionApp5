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
    <Path d="m17 6-5.5-5L6 6M11.5 1v13M3 12v10h17V12" stroke="#14142B" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
