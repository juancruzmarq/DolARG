import React from "react";
import { CotizacionesType } from "./Cotizaciones";

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
  return (
    <div className="grid grid-rows-3 grid-flow-col bg-gradient-to-t shadow-2xl drop-shadow-2xl from-[#718355] to-[#87986A] h-[150px] rounded-2xl items-center justify-center sm:w-[240px] m-2 transform transition duration-500 hover:scale-110">
      <div className="items-center justify-center m-3 mb-4 ">
        <h1 className="text-center text-2xl sm:text-3xl text-white font-bold">
          {nombre}
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center m-3 px-2 py-1">
        <h1 className="text-center mx-3 text-white ">Compra</h1>
        <h1 className="text-center mx-3 text-white ">Venta</h1>
        {cotizacion?.compra !== "No cotiza" ? (
          <h1 className="text-center mx-3 text-2xl sm:text-3xl text-white font-bold">
            ${cotizacion?.compra?.split(".")[0]}
          </h1>
        ) : (
          <h2 className="text-center mx-3 sm:mx-0  text-sm sm:text-xl text-white font-bold">
            No Cotiza
          </h2>
        )}
        <h1 className="text-center mx-3 text-2xl sm:text-3xl text-white font-bold">
          ${cotizacion?.venta?.split(".")[0]}
        </h1>
      </div>
      <div className="items-center justify-center">
        <h1 className="text-center text-1xl sm:text-1xl mt-3 text-[#CFE1B9] font-bold">
          {cotizacion?.fecha?.split(" ")[0]}
        </h1>
      </div>
    </div>
  );
}

export default Cotizacion;
