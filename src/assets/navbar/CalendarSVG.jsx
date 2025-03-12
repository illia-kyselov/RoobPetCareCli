import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CalendarSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M8.5 1.063a1.062 1.062 0 1 0-2.125 0v1.062H4.25A4.25 4.25 0 0 0 0 6.375V8.5h34V6.375a4.25 4.25 0 0 0-4.25-4.25h-2.125V1.062a1.062 1.062 0 1 0-2.125 0v1.063h-17V1.062ZM34 29.75V10.625H0V29.75A4.25 4.25 0 0 0 4.25 34h25.5A4.25 4.25 0 0 0 34 29.75Zm-7.438-14.875h2.125a1.062 1.062 0 0 1 1.063 1.063v2.124a1.062 1.062 0 0 1-1.063 1.063h-2.125a1.062 1.062 0 0 1-1.062-1.063v-2.125a1.062 1.062 0 0 1 1.063-1.062Z"
        />
    </Svg>
);
export default CalendarSVG;
