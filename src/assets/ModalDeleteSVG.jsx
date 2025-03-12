import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ModalDeleteSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={53}
        height={53}
        fill="none"
        {...props}
    >
        <Path
            fill="red"
            d="M23.188 9.938h6.625a3.313 3.313 0 0 0-6.625 0Zm-3.313 0a6.625 6.625 0 0 1 13.25 0h13.25a1.656 1.656 0 1 1 0 3.312h-1.868l-3.992 29.276a8.281 8.281 0 0 1-8.205 7.161H20.69a8.28 8.28 0 0 1-8.205-7.161L8.493 13.25H6.625a1.656 1.656 0 0 1 0-3.313h13.25Zm3.313 11.593a1.656 1.656 0 0 0-3.313 0v16.563a1.656 1.656 0 0 0 3.313 0V21.53Zm8.28-1.656a1.656 1.656 0 0 0-1.655 1.656v16.563a1.656 1.656 0 0 0 3.312 0V21.53a1.656 1.656 0 0 0-1.656-1.656Z"
        />
    </Svg>
);
export default ModalDeleteSVG;
