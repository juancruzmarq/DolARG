import React from "react";
import { CotizacionesType } from "./Cotizaciones";
import moment from "moment";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import TimeAgo from "timeago-react";
import Calculadora from "./Calculadora";
import { BsBank } from "react-icons/bs";

export type CotizacionType = {
  compra: string | undefined;
  venta: string | undefined;
  fecha: string | undefined;
};

type Props = {
  nombre: string;
  cotizacion?: CotizacionType;
  banco?: Boolean;
};

function Cotizacion({ nombre, cotizacion, banco }: Props) {
  let hora = moment(cotizacion?.fecha?.split(" ")[0].split(":")[0], "hh:mm:ss");
  hora = hora.subtract(3, "hours");
  let fecha = cotizacion?.fecha?.split(" ")[0];
  let fechaHora = fecha + " " + hora;
  return (
    <div className="grid grid-rows-3 grid-flow-col bg-gradient-to-t opacity-90 hover:opacity-100 drop-shadow-2xl from-[#718355] to-[#87986A] h-[150px] rounded-2xl items-center justify-center sm:w-[240px] m-2 transform transition duration-500 hover:scale-110">
      <div className="flex items-center  m-3 mb-4 border-b-2 border-b-[#b5bfa3]">
        {banco ? (
          <BsBank className="text-md text-center justify-center text-white" />
        ) : (
          false
        )}
        <div className="text-center justify-center mx-auto">
          <h1 className="text-center justify-center text-lg sm:text-3xl text-white font-bold mr-3">
            {nombre}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center ">
        <h1 className="text-center mx-3 text-white ">Compra</h1>
        <h1 className="text-center mx-3 text-white ">Venta</h1>
        {cotizacion?.compra !== "No cotiza" ? (
          <h1 className="text-center mx-3 text-xl sm:text-3xl text-white font-bold">
            ${cotizacion?.compra?.split(".")[0]}
          </h1>
        ) : (
          <h2 className="text-center mx-3 sm:mx-0  text-[12px] sm:text-xl text-[#CFE1B9] font-bold">
            No Cotiza
          </h2>
        )}
        <h1 className="text-center mx-3 text-xl sm:text-3xl text-white font-bold">
          ${cotizacion?.venta?.split(".")[0]}
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-flow-col items-center justify-center">
        <div className="items-center justify-center mx-auto">
          <Popup
            trigger={
              <button className="text-center items-center justify-center text-xl text-[#CFE1B9] text-[12px] sm:text-sm mt-1 border-2 rounded-lg px-1 sm:px-2 border-opacity-20 border-[#CFE1B9]">
                Calcular
              </button>
            }
            contentStyle={{
              background: "#CFE1B9",
              border: "none",
            }}
            arrowStyle={{
              color: "#CFE1B9",
            }}
            position={["bottom center", "bottom right", "bottom left"]}
          >
            <Calculadora cotizacion={cotizacion} />
          </Popup>
        </div>
        <div className="items-center justify-center mx-auto">
          <TimeAgo
            datetime={fechaHora}
            locale="es"
            className="text-center items-center justify-center text-xl text-[#CFE1B9] text-[12px] sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Cotizacion;
