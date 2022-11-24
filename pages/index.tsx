import Head from "next/head";
import Cotizaciones from "../components/Cotizaciones";
import Header from "../components/Header";
import { CotizacionesType } from "../components/Cotizaciones";
import LineChart from "../components/LineChart";

export default function Home(cotizaciones: CotizacionesType) {
  return (
    <div>
      <Head>
        <title>DolARG</title>
        <meta
          name="description"
          content="Cotizacion de diferentes valores del dolar al dia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Cotizaciones */}
      <section>
        <Cotizaciones cotizaciones={cotizaciones} />
      </section>

      {/* LineChart
      <section>
        <h1 className="text-center mx-3 text-xl sm:text-3xl text-[#e7e9e4] font-bold">
          Historico de cotizaciones
        </h1>
        <LineChart
          blueHistorico={cotizaciones.cotizaciones.blueHistorico}
          oficialHistorico={cotizaciones.cotizaciones.oficialHistorico}
        />
      </section> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/dolaroficial"
  );
  const oficial = await res.json();

  const res2 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/dolarblue"
  );
  const blue = await res2.json();

  const res3 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/dolarbolsa"
  );
  const bolsa = await res3.json();

  const res4 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/dolarturista"
  );
  const turista = await res4.json();

  const res5 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/dolarpromedio"
  );
  const promedio = await res5.json();

  const res6 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/contadoliqui"
  );
  const liqui = await res6.json();

  const res7 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/bbva"
  );
  const bbva = await res7.json();

  const res8 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/piano"
  );
  const piano = await res8.json();

  const res9 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/hipotecario"
  );
  const hipotecario = await res9.json();

  const res10 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/santander"
  );
  const santander = await res10.json();

  const res11 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/ciudad"
  );
  const ciudad = await res11.json();

  const res12 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/patagonia"
  );
  const patagonia = await res12.json();

  const res13 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/supervielle"
  );
  const supervielle = await res13.json();

  const res14 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/galicia"
  );
  const galicia = await res14.json();

  const res15 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/nacion"
  );
  const nacion = await res15.json();

  const res16 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/bancor"
  );
  const bancor = await res16.json();

  const res17 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/comafi"
  );
  const comafi = await res17.json();

  const res18 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/chaco"
  );

  const chaco = await res18.json();

  const res19 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/evolucion/dolaroficial"
  );
  const oficialHistorico = await res19.json();

  const res20 = await fetch(
    "https://api-dolar-argentina.herokuapp.com/api/evolucion/dolarblue"
  );
  const blueHistorico = await res20.json();

  const cotizaciones = {
    oficial,
    blue,
    bolsa,
    turista,
    promedio,
    liqui,
    bbva,
    piano,
    hipotecario,
    santander,
    ciudad,
    patagonia,
    supervielle,
    galicia,
    nacion,
    bancor,
    comafi,
    chaco,
    oficialHistorico,
    blueHistorico,
  };
  return {
    props: { cotizaciones },
  };
}
