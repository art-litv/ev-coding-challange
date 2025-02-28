import Styled from "./Button.styled";

export type ButtonProps = {} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
