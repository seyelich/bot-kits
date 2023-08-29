import React, { FC } from 'react';

interface IMailingIcon {
  color?: string;
  width?: number;
  height?: number;
}

const MailingIcon: FC<IMailingIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_461_17819)">
      <g clipPath="url(#clip1_461_17819)">
        <path
          d="M22 14.2596V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H11.0646"
          stroke={color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9453 13.9168L2.5 5"
          stroke={color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M16 4H22V10"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14L22 4"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_461_17819">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_461_17819">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MailingIcon;
