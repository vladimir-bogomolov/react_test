import React from "react";
import Form from "../components/Form/Form";
import Chart from "../components/Chart/Chart";
import { getRadarChartUrl } from "../util/getChartUrl";

export default function Radar() {
  return (
    <>
      <Form />
      <Chart getUrl={getRadarChartUrl} />
    </>
  );
}
