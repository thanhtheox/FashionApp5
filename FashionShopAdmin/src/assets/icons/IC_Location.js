import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22 11c0 5.523-10 13-10 13S2 16.523 2 11 6.477 1 12 1s10 4.477 10 10Z"
      stroke="#14142B"
    />
    <Circle cx={12} cy={11} r={3} stroke="#14142B" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
