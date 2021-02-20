import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";

import Colors from "../../styles/Colors";
import "./styles.css";

const LoadingDetails = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <div className="loading-item  mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={340} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12} md={6}>
        <div className="loading-item  mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={340} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12}>
        <div className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            <Skeleton height={340} />
          </SkeletonTheme>
        </div>
      </Col>
    </Row>
  );
};

export default LoadingDetails;