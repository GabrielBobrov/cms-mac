import { useHistory } from "react-router";
import styled from "styled-components";
import notfount from "../../Assets/not_found.svg";
import Button from "../Components/Button/Button";
export default function NotFound404() {
  const history = useHistory();
  return (
    <NotFound404Wrapper>
      <span>Oops!</span>
      <h1>Não encontramos esta página</h1>
      <img src={notfount} alt="Não encontrado"></img>
      <Button
        variant="primary"
        label="Ir para a home"
        onClick={() => history.replace("/")}
      />
    </NotFound404Wrapper>
  );
}

const NotFound404Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  span {
    font-size: 72px;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`;
