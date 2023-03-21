import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
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
      d="M13.565 6.871h4.487l4.435 4.383v6.73h-1.996M8.557 18.089h6.73"
      stroke="#000"
    />
    <Circle cx={17.948} cy={17.984} r={2.422} stroke="#000" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.052 19.906a1.922 1.922 0 1 0 0-3.843 1.922 1.922 0 0 0 0 3.843Zm0 1a2.922 2.922 0 1 0 0-5.843 2.922 2.922 0 0 0 0 5.843Z"
      fill="#000"
    />
    <Path
      d="M1.498 18.493V3.501l12.003.022v14.461H8.452M1.2 17.984h2.504"
      stroke="#000"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
