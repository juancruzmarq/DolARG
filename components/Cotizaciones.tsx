import React from "react";
import Cotizacion from "./Cotizacion";
import { CotizacionType } from "./Cotizacion";

export type CotizacionesType = {
  cotizaciones: {
    oficial: CotizacionType;
    blue: CotizacionType;
    bolsa: CotizacionType;
    turista: CotizacionType;
    promedio: CotizacionType;
    liqui: CotizacionType;
    bbva: CotizacionType;
    piano: CotizacionType;
    hipotecario: CotizacionType;
    santander: CotizacionType;
  };
};

type Props = {
  cotizaciones?: CotizacionesType;
};

function Cotizaciones({ cotizaciones }: Props) {
  return (
    <div>
      <div className="items-center justify-center m-4 sm:flex ">
        <div className="grid grid-rows-3 grid-flow-col bg-gradient-to-t transform transition duration-500 hover:scale-110 from-[#718355] to-[#87986A] h-[200px] rounded-2xl shadow-xl items-center justify-center sm:w-[300px]">
          <div className="items-center justify-center m-3 border-b-2">
            <h1 className="text-center text-3xl text-white font-bold">
              Dolar Oficial
            </h1>
          </div>
          <div className="items-center justify-center m-3">
            <h1 className="text-center text-5xl text-white font-bold">
              ${cotizaciones?.cotizaciones.oficial.compra}
            </h1>
          </div>
          <div className="items-center justify-center">
            <h1 className="text-center text-2xl text-[#CFE1B9] font-bold">
              {cotizaciones?.cotizaciones.oficial.fecha?.split(" ")[0]}
            </h1>
          </div>
        </div>
      </div>

      <div className="grid m-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center place-items-center">
        <Cotizacion
          nombre="Blue"
          cotizacion={cotizaciones?.cotizaciones?.blue}
        />
        <Cotizacion
          nombre="Bolsa"
          cotizacion={cotizaciones?.cotizaciones?.bolsa}
        />
        <Cotizacion
          nombre="Turista"
          cotizacion={cotizaciones?.cotizaciones?.turista}
        />
        <Cotizacion
          nombre="Promedio"
          cotizacion={cotizaciones?.cotizaciones?.promedio}
        />
        <Cotizacion
          nombre="Contado Liqui"
          cotizacion={cotizaciones?.cotizaciones?.liqui}
        />
        <Cotizacion
          nombre="BBVA"
          cotizacion={cotizaciones?.cotizaciones?.bbva}
        />
        <Cotizacion
          nombre="Piano"
          cotizacion={cotizaciones?.cotizaciones?.piano}
        />
        <Cotizacion
          nombre="Hipotecario"
          cotizacion={cotizaciones?.cotizaciones?.hipotecario}
        />
      </div>
    </div>
  );
}

export default Cotizaciones;
