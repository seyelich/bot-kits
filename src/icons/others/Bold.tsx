import React, { FC } from 'react';

interface IBoldIcon {
  color?: string;
}

export const BoldIcon: FC<IBoldIcon> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.55779V4H19V7.55779"
        stroke={color ? color : 'currentColor'}
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M12.1074 4V20.0909"
        stroke={color ? color : 'currentColor'}
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M8 20.01H16"
        stroke={color ? color : 'currentColor'}
        stroke-width="3"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
