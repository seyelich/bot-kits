import React, { FC } from 'react';

interface IItalicIcon {
  color?: string;
  width?: number;
  height?: number;
}

const ItalicIcon: FC<IItalicIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0263 4H9.97363"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M14.0263 20H5.97363"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M14.4097 4L9.40967 20"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ItalicIcon;
