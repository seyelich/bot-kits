import React, { FC } from 'react';

interface IMoreOrEqualIcon {
  color?: string;
  width?: number;
  height?: number;
}

const MoreOrEqualIcon: FC<IMoreOrEqualIcon> = ({
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
      d="M5.52378 3.64943L18.5137 10.124L5.52378 16.6393"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.45166 20.3506L18.9998 13.8556"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MoreOrEqualIcon;
