import React, { FC } from 'react';

interface IFullScreenIcon {
  color?: string;
}

export const FullScreenIcon: FC<IFullScreenIcon> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3H21V9"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 21H3V15"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 3L14 10"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 21L10 14"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
