import React, { FC } from 'react';

interface IAddLInkLIcon {
  color?: string;
  width?: number;
  height?: number;
}

const AddLInkLIcon: FC<IAddLInkLIcon> = ({
  color,
  width = 20,
  height = 20,
}) => (
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
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <path
      d="M10 6.00879V13.9912"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.00879 10H13.9912"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddLInkLIcon;
