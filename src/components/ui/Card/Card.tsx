import Styled from "./Card.styled";

export type CardProps = {
  title: React.ReactNode;
  image?: string;
  actions?: React.ReactNode;
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  title,
  image,
  actions,
  children,
  ...props
}) => {
  return (
    <Styled.Card {...props}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {actions && <Styled.Actions>{actions}</Styled.Actions>}
      </Styled.Header>
      <Styled.Content>
        {image && (
          <Styled.ImageContainer>
            <Styled.Image
              src={image}
              alt={typeof title === "string" ? title : "Card image"}
            />
          </Styled.ImageContainer>
        )}
        {children && <Styled.Content>{children}</Styled.Content>}
      </Styled.Content>
    </Styled.Card>
  );
};

export default Card;
