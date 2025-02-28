import Styled from "./IconButton.styled";

export type IconButtonProps = {
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return <Styled.IconButton {...props}>{icon}</Styled.IconButton>;
};

export default IconButton;
