import React, { FC } from 'react';

interface IMoreIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const MoreIcon: FC<IMoreIcon> = ({ color, width=24, height=24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L18 11.9812L6 18"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
