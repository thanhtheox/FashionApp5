import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import scale from "../../constants/responsive"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={scale(28)} height={scale(23)}>
    <Path
      stroke={props.stroke||"#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 7.875V5c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C22.1 1 21.4 1 20 1H5.5c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C1.5 2.9 1.5 3.6 1.5 5v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.4 21 4.1 21 5.5 21H20c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C24 19.1 24 18.4 24 17v-2.875M17.75 11c0-.58 0-.871.048-1.113a2.5 2.5 0 0 1 1.964-1.964c.242-.048.532-.048 1.113-.048h2.5c.58 0 .871 0 1.113.048a2.5 2.5 0 0 1 1.964 1.964c.048.242.048.532.048 1.113 0 .58 0 .871-.048 1.113a2.5 2.5 0 0 1-1.964 1.964c-.242.048-.532.048-1.113.048h-2.5c-.58 0-.871 0-1.113-.048a2.5 2.5 0 0 1-1.964-1.964c-.048-.242-.048-.532-.048-1.113Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
