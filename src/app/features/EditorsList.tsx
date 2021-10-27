import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import userService from "../../sdk/services/User.service";
import Profile from "../Components/Profile";

export default function EditorsList() {
  const [editors, setEditors] = useState<User.EditorSummary[]>([]);

  useEffect(() => {
    userService.getAllEditors().then(setEditors);
  }, []);

  return (
    <EditorsListWrapper>
      {editors.map((editor) => {
        return (
          <Profile
            editorId={editor.id}
            name={editor.name}
            description={"Editor ha X meses"}
            avatarUrl={editor.avatarUrls.small}
          />
        );
      })}
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
