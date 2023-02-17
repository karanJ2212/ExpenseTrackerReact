import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const datapointValues = props.datapoint.map((datapoint) => datapoint.value);
  const totalmMaximum = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxValue={totalmMaximum}
          lable={datapoint.lable}
        ></ChartBar>
      ))}
    </div>
  );
}
