import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const DoneSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={12}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M5.557 9.162 14.032.687c.2-.2.433-.3.7-.3.266 0 .5.1.7.3.2.2.3.438.3.713a.97.97 0 0 1-.3.712l-9.175 9.2c-.2.2-.434.3-.7.3a.96.96 0 0 1-.7-.3l-4.3-4.3A.932.932 0 0 1 .269 6.3c.008-.274.112-.512.313-.713.2-.2.438-.3.713-.3.274.001.512.101.712.3l3.55 3.575Z"
        />
    </Svg>
);
export default DoneSVG;
