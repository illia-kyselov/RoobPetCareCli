import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LockSVG = ({ width = 122, height = 121, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 122 121"
        fill="none"
        {...props}
    >
        <Path
            fill="#6C6FCB"
            d="M61 13.866c-25.75 0-46.634 20.872-46.634 46.634 0 25.761 20.884 46.634 46.634 46.634 25.758 0 46.634-20.873 46.634-46.634 0-25.762-20.872-46.634-46.634-46.634Zm0 11.343c6.995 0 13.507 2.073 18.997 5.597l-48.691 48.69A35.014 35.014 0 0 1 25.71 60.5c0-19.458 15.832-35.29 35.29-35.29Zm0 70.581a35.052 35.052 0 0 1-18.997-5.596L90.69 41.503A35.014 35.014 0 0 1 96.287 60.5c0 19.458-15.829 35.29-35.287 35.29Z"
        />
    </Svg>
);

export default LockSVG;
