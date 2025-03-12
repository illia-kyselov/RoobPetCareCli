import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MinusSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path fill="#fff" d="M19 12.998H5v-2h14v2Z" />
    </Svg>
);
export default MinusSVG;
