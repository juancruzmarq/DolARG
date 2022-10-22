import React, { useState } from "react";
import { CotizacionType } from "./Cotizacion";

type Props = {
  cotizacion?: CotizacionType;
};

const Calculadora = ({ cotizacion }: Props) => {
  const [compra, setCompra] = useState("0");
  const [venta, setVenta] = useState("0");
  const [cantidad, setCantidad] = useState(0);

  const handleCompra = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(Number(e.target.value));

    const compraCurrency = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
    }).format(Number(e.target.value) / Number(cotizacion?.compra));

    const ventaCurrency = new Intl.NumberFormat("en-ES", {
      style: "currency",
      currency: "USD",
    }).format(Number(e.target.value) * Number(cotizacion?.venta));

    setCompra(compraCurrency);
    setVenta(ventaCurrency);
  };

  return (
    <div className="grid grid-rows-3 bg-[#333d29] h-[200px] items-center justify-center p-2 bg-gradient-to-t  drop-shadow-2xl from-[#718355] to-[#87986A]">
      <div className="justify-center items-center">
        <h1 className="text-white font-semibold text-[13px] text-center mb-1">
          Ingrese monto
        </h1>
        <input
          min={0}
          type="text"
          className="bg-[#CFE1B9]/40 text-white rounded-md border-white border-b text-center text-sm outline-none"
          value={cantidad}
          onChange={(e) => handleCompra(e)}
        />
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-2 m-2">
        <h1 className="text-white text-center col-span-1">Compras</h1>
        {cotizacion?.compra !== "No cotiza" ? (
          <h1 className="text-white text-end font-semibold col-span-3 ">
            US{compra}
          </h1>
        ) : (
          <h1 className="text-white opacity-50 text-end font-semibold col-span-3 ">
            {cotizacion?.compra}
          </h1>
        )}

        <h1 className="text-white text-center col-span-1">Vendes</h1>
        <h1 className="text-white text-end font-semibold col-span-3 ml-3">
          {venta}
        </h1>
      </div>
      <div className="justify-center items-center">
        <h1 className="text-center text-2xl">💸</h1>
      </div>
    </div>
  );
};

export default Calculadora;
