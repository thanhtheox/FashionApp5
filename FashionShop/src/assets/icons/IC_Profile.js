import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24}
  height={25} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M17 18.5c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667C13.593 13 12.896 13 11.5 13h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C1 16.407 1 17.104 1 18.5M13.5 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
