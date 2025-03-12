import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowRightSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={13}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M.866 1.09 1.927.03l5.779 5.777a.996.996 0 0 1 0 1.413L1.927 13l-1.06-1.06 5.424-5.425L.866 1.09Z"
        />
    </Svg>
);
export default ArrowRightSVG;
