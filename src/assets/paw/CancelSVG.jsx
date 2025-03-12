import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CancelSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        fill="none"
        {...props}
    >
        <Path
            fill="#8E8E93"
            fillRule="evenodd"
            d="M8 16.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-3.766-4.234a.8.8 0 0 1 0-1.132L6.87 8.5 4.234 5.866a.8.8 0 0 1 1.132-1.132L8 7.37l2.634-2.635a.8.8 0 0 1 1.132 1.132L9.13 8.5l2.635 2.634a.8.8 0 1 1-1.132 1.132L8 9.63l-2.634 2.635a.8.8 0 0 1-1.132 0Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default CancelSVG;
