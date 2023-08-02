import React, { FC } from 'react';

interface ILinkSIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const LinkSIcon: FC<ILinkSIcon> = ({ color, width = 9, height = 9 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.5"
        cy="4.5"
        r="4"
        fill={color ? color : 'currentColor'}
        stroke="white"
      />
    </svg>
  );
};
