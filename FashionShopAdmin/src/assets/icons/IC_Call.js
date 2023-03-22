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
      d="m15.972 1.828 6.364.707s.707 6.364-6.364 13.435C8.9 23.043 2.536 22.337 2.536 22.337l-.708-6.364 4.952-2.829 2.474 2.475s1.768-.354 3.889-2.475c2.121-2.122 2.475-3.89 2.475-3.89L13.143 6.78l2.829-4.95Z"
      stroke="#14142B"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
