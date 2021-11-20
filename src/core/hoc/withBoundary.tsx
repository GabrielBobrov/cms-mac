import ErrorBoundary from "../../app/Components/ErrorBoundary";

function withBounday<T extends object>(
  Component: React.ComponentType<T>,
  componentName?: string
) {
  return function (props: T) {
    return (
      <ErrorBoundary component={componentName}>
        <Component {...props}></Component>
      </ErrorBoundary>
    );
  };
}

export default withBounday;
