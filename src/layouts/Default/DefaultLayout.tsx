import Logo from "../../app/Components/Logo";
import NavBar from "../../app/Components/NavBar";
import SessionController from "../../app/Components/SessionController";
import * as DL from "./Default.layout.styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent> {props.children}</DL.FeaturedContent>
        <DL.Aside>
          {" "}
          <SessionController
            name="Gabriel Bobrov"
            description="Progamador há 1 ano"
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
