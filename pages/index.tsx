import type { NextPage } from "next";
import Head from "next/head";
import Cotizaciones from "../components/Cotizaciones";
import Header from "../components/Header";
import { CotizacionesType } from "../components/Cotizaciones";

export default function Home(cotizaciones: CotizacionesType) {
  console.log(cotizaciones);
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
  };
  console.log(cotizaciones);
  return {
    props: { cotizaciones },
  };
}
