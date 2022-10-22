import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export type valorType = {
  anio: string;
  mes: string;
  valor: string;
};

export type historicoType = {
  fecha: string;
  meses: valorType[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export type Props = {
  blueHistorico: historicoType;
  oficialHistorico: historicoType;
};

export function LineChart({ oficialHistorico, blueHistorico }: Props) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const labels = oficialHistorico.meses.map((mes) => {
    return meses[parseInt(mes.mes) - 1] + " " + mes.anio;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dolar Oficial",
        data: oficialHistorico.meses.map((mes) => {
          return mes.valor;
        }),
        borderColor: "#333d29",
        backgroundColor: "#333d29",
        strokeColor: "rgba(220,220,220,0.8)",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "rgba(220,220,220,1)",
      },
      {
        label: "Dolar Blue",
        data: blueHistorico.meses.map((mes) => mes.valor),
        borderColor: "#006d77",
        backgroundColor: "#006d77",
        strokeColor: "rgba(151,187,205,0.8)",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "rgba(151,187,205,0.8)",
      },
    ],
  };
  return (
    <div className=" w-[340px] sm:p-10 sm:m-10 sm:mx-auto sm:w-[600px] md:w-[800px] lg:w-[1060px] xl:w-[1250px]  items-center mx-auto justify-center bg-gradient-to-tr from-[#eaeee7] to-[#c1c3bb] my-5 rounded-sm  shadow-xl border-[#black] border-l-gray-100 ">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
