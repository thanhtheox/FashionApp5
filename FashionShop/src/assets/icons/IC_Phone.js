import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.56 11.48-3.28-1.406c-.089-.03-.176-.058-.294-.058a.712.712 0 0 0-.527.263l-1.465 1.787A10.872 10.872 0 0 1 3.81 6.881l1.787-1.465a.725.725 0 0 0 .263-.557.855.855 0 0 0-.058-.263L4.395 1.314A.74.74 0 0 0 3.72.875c-.03 0-.088.03-.147.03l-3.047.702A.687.687 0 0 0 0 2.281c0 7.53 6.064 13.594 13.594 13.594a.687.687 0 0 0 .674-.527l.703-3.047v-.147a.765.765 0 0 0-.41-.674Z"
      fill="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
