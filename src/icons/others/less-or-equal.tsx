import React, { FC } from 'react';

interface ILessOrEqualIcon {
  color?: string;
  width?: number;
  height?: number;
}

const LessOrEqualIcon: FC<ILessOrEqualIcon> = ({
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
      d="M19.0001 3.64946L6.01025 10.124L19.0001 16.6393"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0723 20.3506L5.52417 13.8556"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LessOrEqualIcon;
