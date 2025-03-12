import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowBackSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={28}
        fill="none"
        {...props}
    >
        <Path
            stroke="#6C6FCB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 5-8 8.526L15 23"
        />
    </Svg>
);
export default ArrowBackSVG;
