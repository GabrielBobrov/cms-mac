import styled from "styled-components";
import ValueDescriptor from "../Components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos no mes"
        value={5044.33}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={5044.33}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={5044.33}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Total de palavras"
        value={2_345_333}
      />
    </UserEarningsWrapper>
  );
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
