import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const InputCancelSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={29}
        fill="none"
        {...props}
    >
        <Path
            fill="#8E8E93"
            fillRule="evenodd"
            d="M14 22.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-3.766-4.234a.8.8 0 0 1 0-1.132L12.87 14.5l-2.635-2.634a.8.8 0 0 1 1.132-1.132L14 13.37l2.634-2.635a.8.8 0 0 1 1.132 1.132L15.13 14.5l2.635 2.634a.8.8 0 1 1-1.132 1.132L14 15.63l-2.634 2.635a.8.8 0 0 1-1.132 0Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default InputCancelSVG;
