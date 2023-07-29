import React, { FC } from 'react';

interface ICopyIcon {
  width: number;
  height: number;
}

export const CopyIcon: FC<ICopyIcon> = ({width, height}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5 10H16.6C16.2 10 15.8 10.2 15.5 10.5C15.2 10.8 15 11.2 15 11.6V24.4C15 24.8 15.2 25.2 15.5 25.5C15.8 25.8 16.2 26 16.6 26H26.4C26.8 26 27.2 25.8 27.5 25.5C27.8 25.2 28 24.8 28 24.4V14.5L23.5 10Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 15.6V28.4C11 28.8 11.2 29.2 11.5 29.5C11.8 29.8 12.2 30 12.6 30H22.4"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 10V15H28"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
