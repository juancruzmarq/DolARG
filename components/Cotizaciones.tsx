import moment from "moment";
import React from "react";
import TimeAgo from "timeago-react";
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
    ciudad: CotizacionType;
    patagonia: CotizacionType;
    supervielle: CotizacionType;
    galicia: CotizacionType;
    nacion: CotizacionType;
    bancor: CotizacionType;
    comafi: CotizacionType;
    chaco: CotizacionType;
  };
};

type Props = {
  cotizaciones?: CotizacionesType;
};

function Cotizaciones({ cotizaciones }: Props) {
  let hora = moment(
    cotizaciones?.cotizaciones.oficial.fecha?.split(" ")[0].split(":")[0],
    "hh:mm:ss"
  );
  hora = hora.subtract(3, "hours");
  let fecha = cotizaciones?.cotizaciones.oficial.fecha?.split(" ")[0];
  let fechaHora = fecha + " " + hora;
  return (
    <div>
      <div className="items-center justify-center m-4 sm:flex ">
        <div className="grid grid-rows-3 grid-flow-col bg-gradient-to-t transform transition duration-500 hover:scale-110 from-[#718355] to-[#87986A] h-[200px] rounded-2xl shadow-xl items-center justify-center sm:w-[300px]">
          <div className="items-center justify-center m-3 border-b-2">
            <h1 className="text-center text-4xl text-white font-bold">
              Dolar Oficial
            </h1>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 items-center justify-center gap-2">
            <h1 className="text-center mx-3 text-xl text-white ">Compra</h1>
            <h1 className="text-center mx-3 text-xl text-white ">Venta</h1>
            {cotizaciones?.cotizaciones.oficial.compra !== "No cotiza" ? (
              <h1 className="text-center mx-3 text-3xl sm:text-3xl text-white font-bold">
                ${cotizaciones?.cotizaciones.oficial.compra?.split(".")[0]}
              </h1>
            ) : (
              <h2 className="text-center mx-3 sm:mx-0  text-[12px] sm:text-xl text-[#CFE1B9] font-bold">
                No Cotiza
              </h2>
            )}
            <h1 className="text-center mx-3 text-3xl  sm:text-3xl text-white font-bold">
              ${cotizaciones?.cotizaciones.oficial.venta?.split(".")[0]}
            </h1>
          </div>

          <div className="grid grid-cols-2 grid-flow-col items-center justify-center">
            <div className="items-center justify-center mx-auto">
              <button className="text-center items-center justify-center text-1xl text-[#CFE1B9] text-[12px] sm:text-sm mt-1 border-2 rounded-lg px-1 sm:px-2 border-opacity-20 border-[#CFE1B9]">
                Calcular
              </button>
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
        <Cotizacion
          nombre="Ciudad"
          cotizacion={cotizaciones?.cotizaciones?.ciudad}
        />
        <Cotizacion
          nombre="Patagonia"
          cotizacion={cotizaciones?.cotizaciones?.patagonia}
        />
        <Cotizacion
          nombre="Supervielle"
          cotizacion={cotizaciones?.cotizaciones?.supervielle}
        />
        <Cotizacion
          nombre="Galicia"
          cotizacion={cotizaciones?.cotizaciones?.galicia}
        />
        <Cotizacion
          nombre="Nacion"
          cotizacion={cotizaciones?.cotizaciones?.nacion}
        />
        <Cotizacion
          nombre="Bancor"
          cotizacion={cotizaciones?.cotizaciones?.bancor}
        />
        <Cotizacion
          nombre="Comafi"
          cotizacion={cotizaciones?.cotizaciones?.comafi}
        />
        <Cotizacion
          nombre="Chaco"
          cotizacion={cotizaciones?.cotizaciones?.chaco}
        />
      </div>
    </div>
  );
}

export default Cotizaciones;
