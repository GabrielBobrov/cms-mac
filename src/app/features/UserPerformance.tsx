import { useState, useEffect } from "react";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsIntoChartJs from "../../sdk/utils/transformEditorMonthlyEarningsIntoChartJs";
import Chart, { ChartProps } from "../Components/Chart/Chart";

export default function UserPerformance() {
  const [editorEarnings, setEditorEarings] = useState<ChartProps["data"]>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarings);
  }, []);

  if (!editorEarnings) return null;

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={editorEarnings}
    />
  );
}
