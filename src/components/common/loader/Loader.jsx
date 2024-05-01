import React from "react";
import { Spin } from "antd";

export default function Loader({ subject }) {
  return (
    <Spin tip={`${subject} is loading`} size="large">
      <span style={{ padding: 50 }}></span>
    </Spin>
  );
}
