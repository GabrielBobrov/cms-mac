import DefaultLayout from "../Layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import EditorsList from "../features/EditoresList";

export default function EditorsListView() {
  usePageTitle("Lista de editores");

  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  );
}
