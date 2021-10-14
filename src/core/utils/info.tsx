import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Info from "../../app/Components/Info/Info";

interface InfoProps {
  title: string;
  description: string;
}

export default function info(props: InfoProps) {
  confirmAlert({
    overlayClassName: "info-overlay",
    customUI: () => {
      return <Info title={props.title} description={props.description} />;
    },
  });
}