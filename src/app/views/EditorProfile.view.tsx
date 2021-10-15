import ErrorBoundary from "../Components/ErrorBoundary";
import EditorProfile from "../features/EditorProfile";
import DefaultLayout from "../Layouts/Default";

function EditorProfileView() {
  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile hidePersonalData />
      </ErrorBoundary>
    </DefaultLayout>
  );
}

export default EditorProfileView;
