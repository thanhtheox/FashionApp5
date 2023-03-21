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
    <Path d="m19.445 8.481-6.963 6.964L5.518 8.48" stroke="#14142B" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
