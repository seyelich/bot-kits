import SocialIcon from '../../social-icon/social-icon';

interface IArrow {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
  color: 'lightGrey' | 'darkGrey';
}

export default function Arrow({ width, height, type, onClick, color }: IArrow) {
  return (
    <SocialIcon type={type} width={width} height={height} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke={color === 'darkGrey' ? '#060C23' : '#BFC9D9'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SocialIcon>
  );
}
