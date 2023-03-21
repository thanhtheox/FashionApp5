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
      stroke="#14142B"
      d="M4.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 4.5h6v6h-6zM13.5 13.5h6v6h-6z"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
