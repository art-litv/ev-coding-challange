import Styled from "./Button.styled";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <Styled.Button $variant={variant} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
