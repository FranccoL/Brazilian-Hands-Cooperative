import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import "./profit.css";
import { useEffect, useState } from "react";

export function valueFormatter(value) {
  return `${value} US$`;
}

const chartSetting = {
  yAxis: [
    {
      label: "",
    },
  ],
  width: 530,
  height: 280,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

const processData = (dataDB) => {
  const groupData = {};

  dataDB.forEach((item) => {
    const month = new Date(item.date).toLocaleString("default", {
      month: "short",
    });

    if (!groupData[month]) {
      groupData[month] = { month };
    }

    const workType = item.work;

    if (!groupData[month][workType]) {
      groupData[month][workType] = { totalPrice: 0, count: 0 };
    }

    // Somar os preços para cada tipo de trabalho em cada mês, se o preço existir
    groupData[month][workType].totalPrice += item.price || 0;
    // Contar o número de serviços para cada tipo de trabalho em cada mês
    groupData[month][workType].count += 1;
  });

  // Transformar o groupData para ter um dataset simplificado apenas com valores numéricos
  const transformedData = Object.entries(groupData).map(([month, works]) => ({
    month,
    limpezaValor:
      works["Serviço de limpeza"]?.totalPrice ||
      (0 && works["Serviço de limpeza"]?.count) ||
      0,
    limpezaContagem: works["Serviço de limpeza"]?.count || 0,
    paisagismoValor: works["Paisagismo e jardinagem"]?.totalPrice || 0,
    paisagismoContagem: works["Paisagismo e jardinagem"]?.count || 0,
    pinturaValor: works["Pintura"]?.totalPrice || 0,
    pinturaContagem: works["Pintura"]?.count || 0,
  }));

  return transformedData;
};

export const ProfitPerAreaPerMonth = ({ dataDB }) => {
  const [dataset, setDataSet] = useState([]);
  const [showLucro, showCount] = useState(false);

  useEffect(() => {
    if (dataDB.length > 0) {
      const getData = processData(dataDB);
      setDataSet(getData);
    }
  }, [dataDB]);

  const toogleProfit = (event) => {
    const value = event.target.value;
    showCount(value === "profit");
  };

  return (
    <section className="profitContainer">
      <select onChange={toogleProfit} className="select">
        <option value="count">Número de serviços por área por mês</option>
        <option value="profit">Lucro por área por mês</option>
      </select>

      {showLucro ? (
        <>
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "limpezaValor", label: "Limpeza", valueFormatter },

              {
                dataKey: "paisagismoValor",
                label: "Paisagismo",
                valueFormatter,
              },

              { dataKey: "pinturaValor", label: "Pintura", valueFormatter },
            ]}
            {...chartSetting}
          />
        </>
      ) : (
        <>
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "limpezaContagem", label: "Limpeza" },

              { dataKey: "paisagismoContagem", label: "Paisagismo" },

              { dataKey: "pinturaContagem", label: "Pintura" },
            ]}
            {...chartSetting}
          />
        </>
      )}
    </section>
  );
};
