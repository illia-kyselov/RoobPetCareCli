import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const RadioActiveSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#6C6FCB"
            d="M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9Zm0-16.714A7.72 7.72 0 0 0 4.286 12 7.72 7.72 0 0 0 12 19.714 7.72 7.72 0 0 0 19.714 12 7.72 7.72 0 0 0 12 4.286Z"
        />
        <Path fill="#6C6FCB" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </Svg>
);
export default RadioActiveSVG;
