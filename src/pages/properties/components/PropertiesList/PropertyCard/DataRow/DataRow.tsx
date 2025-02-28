import Styled from "./DataRow.styled";

interface DataRowProps {
  label: string;
  value: React.ReactNode;
}

const DataRow: React.FC<DataRowProps> = ({ label, value }) => {
  return (
    <Styled.DataRow>
      <Styled.DataLabel>{label}</Styled.DataLabel>
      <Styled.DataValue>{value}</Styled.DataValue>
    </Styled.DataRow>
  );
};

export default DataRow;
