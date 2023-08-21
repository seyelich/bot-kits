import React, { FC } from 'react';

interface IUpIcon {
  color?: string;
  width?: number;
  height?: number;
}

const UpIcon: FC<IUpIcon> = ({ color, width = 20, height = 20 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 12.5L10 7.5L5 12.5"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UpIcon;
