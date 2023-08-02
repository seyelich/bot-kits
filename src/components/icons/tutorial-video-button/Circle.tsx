import React, { FC } from 'react';

interface ITutorialVideoCircleIcon {
  className: string;
}

export const TutorialVideoCircleIcon: FC<ITutorialVideoCircleIcon> = ({
  className,
}) => (
  <svg
    className={className}
    style={{
      position: 'absolute',
      borderRadius: '10px',
    }}
    width="149"
    height="74"
    viewBox="0 0 149 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="86.5"
      cy="86.5"
      r="86.5"
      transform="matrix(-1 0 0 1 149 -48)"
      fill="currentColor"
    />
  </svg>
);

export default TutorialVideoCircleIcon;
