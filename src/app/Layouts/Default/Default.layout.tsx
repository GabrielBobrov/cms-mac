import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import Logo from "../../Components/Logo";
import NavBar from "../../Components/NavBar";
import SessionController from "../../Components/SessionController";
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
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name="Gabriel Bobrov"
            description="Programador há 1 ano"
            onLogout={() => {
              confirm({
                title: "quer mesmo deslogar?",
                onConfirm: () => {
                  info({
                    title: "Você foi deslogado",
                    description:
                      "Você será redirecionado para a página de login",
                  });
                },
                onCancel: () => window.alert("laranja"),
              });
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
