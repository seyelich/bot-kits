import React, { FC } from 'react';

interface IDashBoardIcon {
  color?: string;
  width?: number;
  height?: number;
}

const DashBoardIcon: FC<IDashBoardIcon> = ({
  color,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3H3V12H10V3Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3H14V8H21V3Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12H14V21H21V12Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16H3V21H10V16Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DashBoardIcon;
