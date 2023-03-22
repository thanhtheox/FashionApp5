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
    <Path d="M12.205 17h7.772M12.228 7H20" stroke="#14142B" />
    <Path stroke="#14142A" d="M2.513 3.455h7v7h-7zM2.513 13.514h7v7h-7z" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
