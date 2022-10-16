import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="items-center grid bg-[#718355] h-[80px] m-4 rounded-2xl shadow-xl grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10 justify-end items-end mx-auto ">
          <h1 className="text-white font-bold text-5xl">💸DolARG</h1>
        </div>
        <div className="col-span-1 mx-auto">
          <InformationCircleIcon className="hidden sm:inline-flex sm:h-10 sm:w-10 text-white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
