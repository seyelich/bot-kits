import React, { FC } from 'react';

interface IChevronBigIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const ChevronBigIcon: FC<IChevronBigIcon> = ({ color, width=24, height=24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9.42017L12 16.4202L5 9.42017"
        stroke={color ? color : 'currentColor'}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
