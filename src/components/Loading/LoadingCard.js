import React from "react";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

function LoadingCard({ ...props }) {
  const { qty } = props;

  function RenderSkeleton() {
    var list = [];

    for (var i = 1; i <= qty; i++) {
      list.push(
        <Col xs={12} md={6} lg={3} key={i}>
          <div className="loading-item mb-3 p-3">
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton height={250} />
            <Skeleton height={47} />
          </div>
        </Col>
      );
    }
    return list;
  }

  return <Row>{RenderSkeleton()}</Row>;
}

export default LoadingCard;
