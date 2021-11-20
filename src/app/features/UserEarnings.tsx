import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import userService from "../../sdk/services/User.service";
import ValueDescriptor from "../Components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
  const [user, setUser] = useState<User.Detailed>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    userService
      .getDetailedUser(7)
      .then(setUser)
      .catch((error) => {
        setError(new Error(error.message));
      });
  }, []);
  if (error) {
    throw error;
  }
  if (!user) {
    return null;
  }

  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos no mes"
        value={user.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={user.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={user.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Total de palavras"
        value={user.metrics.lifetimeWords}
      />
    </UserEarningsWrapper>
  );
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
