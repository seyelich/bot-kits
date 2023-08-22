import React, { FC } from 'react';

interface IEqualWithoutCaseIcon {
  color?: string;
  width?: number;
  height?: number;
}

const EqualWithoutCaseIcon: FC<IEqualWithoutCaseIcon> = ({
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
      d="M12 12.9412V10.8368H19.7329V12.9412"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M18.5166 15.4903H23.5423"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M15.8662 10.8368V20.5434"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M21.0293 15.4903V20.5435"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M1.86621 4.83681H15.8662"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.86621 10.8368H8.35148"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EqualWithoutCaseIcon;
