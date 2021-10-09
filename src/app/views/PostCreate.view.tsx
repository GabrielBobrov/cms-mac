import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import DefaultLayout from "../Layouts/Default";

export default function PostCreateView() {
  usePageTitle("Cadastre um post");
  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  );
}
