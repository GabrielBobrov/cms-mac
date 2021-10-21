import styled from "styled-components";
import { User } from "../../@types/User";
import Profile from "../Components/Profile";

export default function EditorsList() {
  const editors: User.EditorSummary[] = [];
  return (
    <EditorsListWrapper>
      <Profile
        editorId={1}
        name="Gabriel Bobrov"
        description="Programador ha 1 ano"
      />
      <Profile
        editorId={2}
        name="Laura Pitaluga"
        description="Artista ha 4 anos"
      />
      <Profile
        editorId={3}
        name="Matheus Tavares"
        description="Cobre ha 5 anos"
      />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
