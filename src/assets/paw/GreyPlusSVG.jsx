import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const GreyPlusSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={58}
        height={58}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M43.5 31.412H31.417v12.083a2.417 2.417 0 0 1-4.834 0V31.412H14.5a2.417 2.417 0 0 1 0-4.833h12.083V14.495a2.417 2.417 0 0 1 4.834 0V26.58H43.5a2.417 2.417 0 1 1 0 4.833Z"
            opacity={0.3}
        />
    </Svg>
);
export default GreyPlusSVG;
