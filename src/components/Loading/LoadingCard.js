import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";

import Colors from "../../styles/Colors";
import "./styles.css";

const LoadingCard = ({ qty }) => {
  function RenderSkeleton() {
    var list = [];

    for (var i = 1; i <= qty; i++) {
      list.push(
        <Col xs={12} sm={6} lg={3} key={i}>
          <div className="loading-item mb-3 p-3">
            <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
              <Skeleton count={1} />
              <Skeleton count={1} />
              <div className="my-4 d-flex justify-content-center">
                <Skeleton circle={true} height={200} width={200} />
              </div>
              <Skeleton height={47} />
            </SkeletonTheme>
          </div>
        </Col>
      );
    }
    return list;
  }

  return <Row>{RenderSkeleton()}</Row>;
};

export default LoadingCard;
