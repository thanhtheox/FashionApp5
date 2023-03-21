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
    <Path
      d="m7.65 11.446-3.81 7.095h16.14L11.988 3.547 8.735 9.34M3.779 6.955 21.809 16"
      stroke="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
