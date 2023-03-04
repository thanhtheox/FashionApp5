import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5.984c-3.349 0-7.695.839-7.695.839l-.011.012A3.192 3.192 0 0 0 .1 4.984V14.586a3.2 3.2 0 0 0 2.702 3.154l.003.005s4.346.84 7.695.84 7.695-.84 7.695-.84l.002-.002a3.2 3.2 0 0 0 2.703-3.157V4.983a3.2 3.2 0 0 0-2.702-3.156l-.003-.005S13.85.983 10.5.983ZM8.1 6.103l6.4 3.68-6.4 3.682V6.103Z"
      fill="#333"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
