import React, { useContext } from "react";
import { GlobalContext } from "../../App";

export default function Chart({ getUrl }) {
  const { dataSet } = useContext(GlobalContext);
  const url = getUrl(dataSet);
  return (
    <div>
      <img src={url} alt="chart of data" width="90%" />
    </div>
  );
}
