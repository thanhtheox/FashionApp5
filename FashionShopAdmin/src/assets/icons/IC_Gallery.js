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
      d="M3.045 18.026h17.91M20.802 17.533v3.86M3.305 17.533v3.86"
      stroke="#14142B"
    />
    <Path stroke="#14142A" d="M3.25 3.455h17.5v10.746H3.25z" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
