import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m8.715 11.275-3.48-4.7h6.96l-3.48 4.7Z"
      fill="#333"
      opacity={0.5}
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
