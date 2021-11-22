import usePageTitle from "../../core/hooks/usePageTitle";
import ErrorBoundary from "../Components/ErrorBoundary";
import Loading from "../Components/Loading";
import PostList from "../features/PostsList";
import UserEarnings from "../features/UserEarnings";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import DefaultLayout from "../Layouts/Default";

export default function Home() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <Loading />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <ErrorBoundary component="tags">
          <UserTopTags />
        </ErrorBoundary>
        <ErrorBoundary component="ganhos">
          <UserEarnings />
        </ErrorBoundary>
      </div>
      <UserPerformance />
      <ErrorBoundary component="lista de posts">
        <PostList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
