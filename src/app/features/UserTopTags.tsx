import { useEffect, useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../Components/CircleChart";

export default function UserTopTags() {
  const [topTags, setTop3Tags] = useState<Metric.EditorTagRatio>([]);

  useEffect(() => {
    MetricService.getTop3Tags().then(setTop3Tags);
  });
  return (
    <UserTopTagsWrapper>
      {topTags.map((tag, i) => {
        return (
          <CircleChart
            progress={tag.percentage}
            caption={tag.tagName}
            theme={i === 0 ? "primary" : "default"}
            size={88}
          />
        );
      })}
    </UserTopTagsWrapper>
  );
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
