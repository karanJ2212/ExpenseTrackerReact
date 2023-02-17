import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={null}
          lable={datapoint.lable}
        ></ChartBar>
      ))}
    </div>
  );
}
