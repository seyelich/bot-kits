import React, { FC } from 'react';

interface ITutorialVideoEllipseIcon {
  className: string;
}

const TutorialVideoEllipseIcon: FC<ITutorialVideoEllipseIcon> = ({
  className,
}) => (
  <svg
    className={className}
    width="83"
    height="69"
    viewBox="0 0 83 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 109C45.6305 109 81 73.9533 81 30.7211M75.5131 2C77.1081 6.00503 78.3793 10.1717 79.295 14.4683"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default TutorialVideoEllipseIcon;
