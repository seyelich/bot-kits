import React, { FC } from 'react';

interface IZapIcon {
  color?: string;
  width?: number;
  height?: number;
}

const ZapIcon: FC<IZapIcon> = ({ color, width = 20, height = 20 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8333 1.66699L2.5 11.667H10L9.16667 18.3337L17.5 8.33366H10L10.8333 1.66699Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ZapIcon;
