import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const DeleteSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M6 2h2a1 1 0 0 0-2 0ZM5 2a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 8.754 14H5.246a2.5 2.5 0 0 1-2.477-2.162L1.564 3H1a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0v-5ZM8.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"
        />
    </Svg>
);
export default DeleteSVG;
