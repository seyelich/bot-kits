import React, { FC } from 'react';

interface IHorizontalIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const HorizontalIcon: FC<IHorizontalIcon> = ({ color, width=24, height=24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9.68699L20 6.68699L17 3.68699"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 6.68699L4 6.68699"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="15"
        width="6"
        height="4.68701"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <rect
        x="14"
        y="15"
        width="6"
        height="4.68701"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};
