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
      d="m3.496 23.28.816-16.56h16.347l.816 16.56H3.495Z"
      stroke={props.strokeA||"#14142B"}
      {...props}
    />
    <Path
      d="M8.16 10.15V5.55a4.325 4.325 0 0 1 8.65 0v4.598"
      stroke={props.strokeB||"#14142B"}
      {...props}
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
