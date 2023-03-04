import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.757.243 1.759 4.335 4.666.334-3.579 3.013 1.125 4.541-3.971-2.473-3.972 2.473L3.91 7.925.33 4.912l4.667-.334L6.757.243Z"
      fill="#DD8560"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
