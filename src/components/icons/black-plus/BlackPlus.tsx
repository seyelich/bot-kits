import React, { FC } from 'react';

interface IBlackPlus {
  disabled?: boolean;
}

export const BlackPlus: FC<IBlackPlus> = ({ disabled }) => {
  return (
    <svg
      style={{ opacity: disabled ? '.5' : '1' }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2V18"
        stroke="#060C23"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 10H18"
        stroke="#060C23"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
