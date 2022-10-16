import React from "react";

type Props = {};

const Calculadora = (props: Props) => {
  return (
    <div className="grid grid-rows-3 bg-[#333d29] h-[200px] items-center justify-center p-2 bg-gradient-to-t  drop-shadow-2xl from-[#718355] to-[#87986A]">
      <div className="justify-center items-center ">
        <h1 className="text-white font-semibold text-[13px] text-center mb-1">
          Ingrese monto en pesos
        </h1>
        <input
          type="text"
          className="bg-[#CFE1B9]/40 text-white rounded-md border-white border-b text-center text-sm outline-none"
        />
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-2">
        <h1 className="text-white text-center col-span-1">Compra</h1>
        <h1 className="text-white text-end font-semibold col-span-3 ">
          US$21331,0
        </h1>
        <h1 className="text-white text-center col-span-1">Venta</h1>
        <h1 className="text-white text-end font-semibold col-span-3 ml-3">
          US$23323,0
        </h1>
      </div>
      <div className="justify-center items-center">
        <h1 className="text-center text-2xl">💸</h1>
      </div>
    </div>
  );
};

export default Calculadora;
