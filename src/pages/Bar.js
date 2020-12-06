import React from "react";
import Form from "../components/Form/Form";
import Chart from "../components/Chart/Chart";
import { getBarChartUrl } from "../util/getChartUrl";

export default function Bar() {
  return (
    <>
      <Form />
      <Chart getUrl={getBarChartUrl} />
    </>
  );
}
