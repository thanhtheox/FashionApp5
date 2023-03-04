import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.9 2.333a8.519 8.519 0 0 1-2.451.672 4.275 4.275 0 0 0 1.876-2.36 8.557 8.557 0 0 1-2.71 1.036 4.268 4.268 0 0 0-7.271 3.891 12.115 12.115 0 0 1-8.797-4.46A4.257 4.257 0 0 0 .97 3.26c0 1.48.753 2.786 1.898 3.551a4.259 4.259 0 0 1-1.933-.533v.053a4.268 4.268 0 0 0 3.423 4.184 4.269 4.269 0 0 1-1.927.074 4.273 4.273 0 0 0 3.987 2.964 8.559 8.559 0 0 1-6.319 1.767 12.081 12.081 0 0 0 6.542 1.917c7.85 0 12.14-6.503 12.14-12.142 0-.185-.003-.369-.011-.552a8.684 8.684 0 0 0 2.13-2.209Z"
      fill="#333"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
