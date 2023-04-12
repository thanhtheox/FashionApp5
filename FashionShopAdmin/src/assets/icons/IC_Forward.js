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
    <Path d="m9 5 6.963 6.963L9 18.926" stroke={ props.stroke ||"#14142B"} />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
