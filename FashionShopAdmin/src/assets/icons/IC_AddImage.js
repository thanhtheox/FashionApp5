import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import scale from "../../constants/responsive"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={scale(30)} height={scale(30)}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 2.938H5.8c-1.68 0-2.52 0-3.162.347a3.1 3.1 0 0 0-1.311 1.393C1 5.36 1 6.252 1 8.038v8.924c0 1.786 0 2.678.327 3.36a3.1 3.1 0 0 0 1.311 1.393c.642.348 1.482.348 3.162.348H15c.93 0 1.395 0 1.776-.11 1.036-.294 1.844-1.153 2.122-2.253.102-.405.102-.9.102-1.887M17 8.25V1.875m-3 3.188h6M8.5 8.78c0 1.174-.895 2.125-2 2.125s-2-.951-2-2.125c0-1.173.895-2.125 2-2.125s2 .952 2 2.125Zm4.49 3.632-8.459 8.17c-.476.46-.714.69-.735.889a.55.55 0 0 0 .167.458c.142.133.463.133 1.106.133h9.387c1.44 0 2.159 0 2.724-.257a3.1 3.1 0 0 0 1.578-1.677c.242-.6.242-1.365.242-2.895 0-.514 0-.771-.053-1.01a2.185 2.185 0 0 0-.374-.827c-.143-.194-.332-.354-.71-.676l-2.797-2.377c-.379-.322-.568-.483-.776-.54a.943.943 0 0 0-.557.019c-.205.07-.384.244-.743.59Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
