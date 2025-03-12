import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const RadioDisableSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#6C6FCB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
        />
    </Svg>
);
export default RadioDisableSVG;
