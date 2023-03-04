import * as React from "react"
import { Svg, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.498.184A5.607 5.607 0 0 0 .9 5.785v8a5.607 5.607 0 0 0 5.602 5.599h8a5.607 5.607 0 0 0 5.598-5.602v-8A5.607 5.607 0 0 0 14.498.184h-8Zm9.602 3.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm-5.6 1.6c2.647 0 4.8 2.152 4.8 4.8 0 2.647-2.153 4.8-4.8 4.8a4.805 4.805 0 0 1-4.8-4.8c0-2.648 2.153-4.8 4.8-4.8Zm0 1.6a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
      fill="#333"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
