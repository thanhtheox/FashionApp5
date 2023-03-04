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
    <Path d="m2.696 5.236 2.12 14.035h14.292l2.28-14.484" stroke="#000" />
    <Path
      d="M8.259 6.65c.033 1.074.803 3.224 3.619 3.224 2.816 0 3.783-2.193 3.915-3.29.208 1.108 1.612 3.303 4.639 3.224m-17.055.286c.638.057 2.092-.194 2.802-1.658M3.192 2.747l17.247 17.6"
      stroke="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
