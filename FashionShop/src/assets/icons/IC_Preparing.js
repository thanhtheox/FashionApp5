import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import scale from "../../constants/responsive"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={scale(28)} height={scale(28)}>
    <Path
      stroke={props.stroke||"#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 10a5 5 0 1 1-10 0M4.54 9.252l-.875 10.5c-.188 2.255-.282 3.383.1 4.253a3.75 3.75 0 0 0 1.649 1.793c.835.452 1.967.452 4.23.452h10.709c2.263 0 3.395 0 4.23-.452a3.75 3.75 0 0 0 1.65-1.793c.38-.87.287-1.998.099-4.253l-.875-10.5c-.162-1.941-.243-2.911-.672-3.646a3.75 3.75 0 0 0-1.618-1.489c-.768-.367-1.742-.367-3.69-.367H10.52c-1.947 0-2.921 0-3.689.367a3.75 3.75 0 0 0-1.618 1.49c-.43.734-.51 1.704-.672 3.645Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
