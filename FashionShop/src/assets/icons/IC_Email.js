import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.688 3.969c-.72.562-1.626 1.25-4.813 3.562C10.25 8 9.094 9.031 8 9.031c-1.125 0-2.25-1.031-2.906-1.5C1.906 5.22 1 4.531.28 3.97c-.125-.094-.281 0-.281.156V10.5c0 .844.656 1.5 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V4.125c0-.156-.188-.25-.313-.156ZM8 8c.719.031 1.75-.906 2.281-1.281 4.156-3 4.469-3.282 5.406-4.032A.711.711 0 0 0 16 2.095V1.5c0-.813-.688-1.5-1.5-1.5h-13A1.5 1.5 0 0 0 0 1.5v.594c0 .25.094.469.281.594.938.75 1.25 1.03 5.407 4.03C6.218 7.095 7.25 8.032 8 8Z"
      fill="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
