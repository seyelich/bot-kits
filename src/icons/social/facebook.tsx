import SocialIcon from '../../components/social-icon/SocialIcon';

interface IFacebookIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function FacebookIcon({
  width,
  height,
  type,
  onClick,
}: IFacebookIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#2D88FF"
      onClick={onClick}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="currentColor" />
        <path
          d="M24.0088 21.125L24.5087 17.8674H21.383V15.7535C21.383 14.8623 21.8196 13.9936 23.2195 13.9936H24.6405V11.2201C24.6405 11.2201 23.351 11 22.1181 11C19.5439 11 17.8614 12.5602 17.8614 15.3847V17.8674H15V21.125H17.8614V29H21.383V21.125H24.0088Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

FacebookIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
