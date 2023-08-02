import React, { FC } from 'react';

interface IAddLInkLIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const AddLInkLIcon: FC<IAddLInkLIcon> = ({
  color,
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="white"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
      />
      <path
        d="M10 6.00879V13.9912"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00879 10H13.9912"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
