import React, { FC } from 'react';

interface IPlusCircleIcon {
  color?: string;
  width?: number;
  height?: number;
}

const PlusCircleIcon: FC<IPlusCircleIcon> = ({
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
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <path
      d="M12 8.49997V15.5"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11.9999H15.5"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusCircleIcon;
