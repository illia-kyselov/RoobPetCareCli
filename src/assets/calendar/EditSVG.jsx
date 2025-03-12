import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const EditSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#0A84FF"
            d="M19.175 3.137a3.027 3.027 0 0 0-4.283.001l-9.507 9.52a3.03 3.03 0 0 0-.885 2.14V18c0 .414.336.75.75.75h3.223c.803 0 1.573-.32 2.14-.887l9.5-9.506a3.03 3.03 0 0 0 0-4.28l-.938-.94ZM4.25 20.25a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5h-16Z"
        />
    </Svg>
);
export default EditSVG;
