import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowRightSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m2.452 6.58 1.061-1.06 5.779 5.777a.997.997 0 0 1 0 1.413l-5.779 5.78-1.06-1.06 5.424-5.425L2.452 6.58Z"
        />
    </Svg>
);
export default ArrowRightSVG;
