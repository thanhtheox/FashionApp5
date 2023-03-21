import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.535 1.222 24.284 12.97 12.97 24.284 1.221 12.535l.436-10.878 10.878-.435Z"
      stroke="#14142B"
    />
    <Circle cx={8.141} cy={7.557} r={1} stroke="#14142B" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
