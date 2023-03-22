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
      d="M12 7c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4S18.7 7 12 7ZM9.3 8.5c.5-.3 1.3-.3 1.3-.3s-.5.9-.5 1.6c0 .7.2 1.1.2 1.1l-1.1.2s-.3-.5-.3-1.2c0-.8.4-1.4.4-1.4Zm2.6 6.7c-4.1 0-6.2-2.3-6.8-3.2.3-.7 1.1-2.2 3.1-3.2-.1.4-.2.8-.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-.5-.1-.9-.2-1.3 2 .9 2.8 2.5 3.1 3.2-.7.9-2.8 3.2-7 3.2Z"
      fill="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
