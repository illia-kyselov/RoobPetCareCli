import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CloseSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M.773 12.602c-.422.423-.431 1.173.009 1.613.448.44 1.199.431 1.613.017L7.5 9.126l5.097 5.098c.431.43 1.173.43 1.613-.009.44-.448.44-1.182.008-1.613L9.122 7.505l5.097-5.106a1.15 1.15 0 0 0-.008-1.613c-.44-.44-1.182-.44-1.613-.009L7.5 5.875 2.395.777C1.98.355 1.222.337.782.787.342 1.225.35 1.984.773 2.398l5.098 5.106-5.098 5.097Z"
        />
    </Svg>
);
export default CloseSVG;
