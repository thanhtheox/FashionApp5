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
    <Path stroke="#000" d="M4.386 4.49h15v15h-15z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.355 16.397 2.248 7.38l.445-.895L20.801 15.5l-.446.896Z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.845 14.751a3.997 3.997 0 0 1-6.807-3.39l-.932-.463a4.997 4.997 0 0 0 8.67 4.317l-.931-.464Zm-6.53-4.369a3.998 3.998 0 1 1 7.145 3.558l.897.447a4.997 4.997 0 1 0-8.938-4.451l.896.446Z"
      fill="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
