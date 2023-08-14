import React, { FC } from 'react';

interface INotInLineIcon {
  color?: string;
  width?: number;
  height?: number;
}

const NotInLineIcon: FC<INotInLineIcon> = ({
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
      d="M5.55664 6.10001L2.55664 9.10001L5.55664 12"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M18.4434 6.10001L21.4434 9.10001L18.4434 12"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M4.94336 9.10001H7.94336"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M16.1602 9.10001L19.1602 9.10001"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M11.1191 9.10001H12.8813"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M2.55664 16.9186H21.4435"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default NotInLineIcon;
