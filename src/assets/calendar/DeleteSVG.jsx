import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const DeleteSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#FF382B"
            d="M7.75 21c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 5.75 19V6h-1V4h5V3h6v1h5v2h-1v13c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 17.75 21h-10Zm2-4h2V8h-2v9Zm4 0h2V8h-2v9Z"
        />
    </Svg>
);
export default DeleteSVG;
