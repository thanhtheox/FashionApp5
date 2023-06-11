import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import color from "../../constants/color"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M29 25a1 1 0 0 0-1 1 2 2 0 1 1-3-1.74 1 1 0 0 0 1.68.86l1.41-1.41a1.002 1.002 0 0 0 0-1.42l-1.41-1.41a1.002 1.002 0 0 0-1.42 0 1 1 0 0 0-.13 1.21A4.001 4.001 0 1 0 30 26a1 1 0 0 0-1-1Z"
    />
    <Path
      d="M24.58 5.53a3 3 0 0 0-2.92-.13l-.3.15a1 1 0 0 1-.82 0l-3.43-1.34a3 3 0 0 0-2.22 0l-3.43 1.37a1 1 0 0 1-.82 0l-.3-.15A3 3 0 0 0 6 8.08V23a5 5 0 0 0 5 5h9.38a5.779 5.779 0 0 1-.38-2v-.08a6 6 0 0 1 3.13-5.26 3 3 0 0 1 .75-1.28l.12-.11c.19-.167.397-.311.62-.43a3 3 0 0 1 1.18-.32h.2V8.08a3 3 0 0 0-1.42-2.55ZM18 21h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm2-6h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
