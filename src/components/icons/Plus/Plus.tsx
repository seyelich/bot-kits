import { FC } from 'react';

interface IPlus {
  color?: string;
}

export const Plus: FC<IPlus> = ({ color }) => {

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke={color} style={{ transition: 'all 0.5s linear' }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12H19" stroke={color} style={{ transition: 'all 0.5s linear' }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};
