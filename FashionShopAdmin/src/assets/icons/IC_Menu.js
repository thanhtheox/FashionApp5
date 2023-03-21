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
    <Path d="M.307 12h15.675M.307 5h23.386M.307 19h23.386" stroke="#14142B" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
