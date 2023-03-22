import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 14a1.5 1.5 0 0 0 1.5-1.5v-11c0-.813-.688-1.5-1.5-1.5h-11A1.5 1.5 0 0 0 0 1.5v11c0 .844.656 1.5 1.5 1.5h11ZM7.437 4.562a.19.19 0 0 1 .25 0l1.75 1.75a.19.19 0 0 1 0 .25l-4.25 4.25-1.78.188A.351.351 0 0 1 3 10.594l.188-1.781 4.25-4.25Zm3.344-.375a.736.736 0 0 1 0 1.032l-.75.75a.19.19 0 0 1-.25 0l-1.75-1.75a.19.19 0 0 1 0-.25l.75-.75a.736.736 0 0 1 1.031 0l.97.969Z"
      fill="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
