import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import withBounday from "../../core/hoc/withBoundary";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsIntoChartJs from "../../sdk/utils/transformEditorMonthlyEarningsIntoChartJs";
import Chart, { ChartProps } from "../Components/Chart/Chart";

function UserPerformance() {
  const [editorEarnings, setEditorEarings] = useState<ChartProps["data"]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarings)
      .catch((error) => {
        setError(new Error(error.message));
      });
  }, []);
  if (error) {
    throw error;
  }
  if (!editorEarnings)
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={editorEarnings}
    />
  );
}

export default withBounday(UserPerformance, "batata");
