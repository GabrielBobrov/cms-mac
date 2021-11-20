import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../Components/CircleChart";

export default function UserTopTags() {
  const [topTags, setTop3Tags] = useState<Metric.EditorTagRatio>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTop3Tags)
      .catch((error) => {
        setError(new Error(error.message));
      });
  }, []);
  if (error) {
    throw error;
  }
  if (!topTags.length) {
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
      </UserTopTagsWrapper>
    );
  }
  return (
    <UserTopTagsWrapper>
      {topTags.map((tag, i) => {
        return (
          <CircleChart
            key={i}
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
