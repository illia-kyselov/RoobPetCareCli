import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const GrayDoneSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={166}
        height={166}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M66.156 124.25 26.97 85.062l9.797-9.796 29.39 29.39 63.078-63.078 9.797 9.797-72.875 72.875Z"
            opacity={0.3}
        />
    </Svg>
);
export default GrayDoneSVG;
