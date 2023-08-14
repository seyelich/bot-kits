import React, { FC } from 'react';

interface IMoreIcon {
  color?: string;
  width?: number;
  height?: number;
}

const MoreIcon: FC<IMoreIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 11.9812L6 18"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MoreIcon;
