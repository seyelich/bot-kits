import React, { FC } from 'react';

interface IZapIcon {
  color?: string;
}

export const ZapIcon: FC<IZapIcon> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8333 1.66699L2.5 11.667H10L9.16667 18.3337L17.5 8.33366H10L10.8333 1.66699Z"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
