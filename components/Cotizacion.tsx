import React from "react";
import { CotizacionesType } from "./Cotizaciones";
import moment from "moment";

import TimeAgo from "timeago-react";

export type CotizacionType = {
  compra: string | undefined;
  venta: string | undefined;
  fecha: string | undefined;
};

type Props = {
  nombre: string;
  cotizacion?: CotizacionType;
};

function Cotizacion({ nombre, cotizacion }: Props) {
  let hora = moment(cotizacion?.fecha?.split(" ")[0].split(":")[0], "hh:mm:ss");
  hora = hora.subtract(3, "hours");
  let fecha = cotizacion?.fecha?.split(" ")[0];
  let fechaHora = fecha + " " + hora;
  return (
    <div className="grid grid-rows-3 grid-flow-col bg-gradient-to-t opacity-90 hover:opacity-100 drop-shadow-2xl from-[#718355] to-[#87986A] h-[150px] rounded-2xl items-center justify-center sm:w-[240px] m-2 transform transition duration-500 hover:scale-110">
      <div className="items-center justify-center m-3 mb-4 ">
        <h1 className="text-center text-lg sm:text-3xl text-white font-bold">
          {nombre}
        </h1>
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
      <div className="items-center justify-center mx-auto">
        <TimeAgo
          datetime={fechaHora}
          locale="es"
          className="text-center text-sm sm:text-1xl mt-3 text-[#CFE1B9] font-bold"
        />
      </div>
    </div>
  );
}

export default Cotizacion;
