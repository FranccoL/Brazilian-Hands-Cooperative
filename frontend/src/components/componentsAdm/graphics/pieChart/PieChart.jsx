import * as React from "react";
import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";
import "./pieChart.css";

export const PieChart = () => {
  return (
    <section className="chartPie">
        <h3>Trabalhos por área no mês atual</h3>
      <MUIPieChart
        
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={240}
      />
    </section>
  );
};
