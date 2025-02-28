import Styled from "./IconButton.styled";

type IconButtonProps = {
  image?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({ image, ...props }) => {
  return <Styled.IconButton {...props}>{image}</Styled.IconButton>;
};

export default IconButton;
