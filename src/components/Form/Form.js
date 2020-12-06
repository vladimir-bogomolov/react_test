import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import MODULES from "../../modules";

export default function Form() {
  const { dataSet, setDataSet } = useContext(GlobalContext);

  return (
    <form>
      {dataSet.map((module, i) => {
        return (
          <div key={Math.random() * 100000000}>
            <label>{MODULES[i]}</label>
            <input
              type="number"
              value={module}
              onChange={(e) => {
                const newDataSet = [...dataSet];
                newDataSet[i] = parseInt(e.target.value);
                setDataSet(newDataSet);
              }}
            ></input>
          </div>
        );
      })}
    </form>
  );
}
