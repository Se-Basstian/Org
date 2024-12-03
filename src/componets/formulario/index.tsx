import type { FormEvent } from "react";
import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

interface formDatos {
  identificador: string;
  nombre: string;
  puesto: string;
  foto: string;
  equipo: string;
}

interface Props {
  listaOpc: string[];
  registarColaborador: (datos: formDatos) => void;
}

function Formulario({ listaOpc, registarColaborador }: Props) {
  const [valorNombre, setValorNombre] = useState<string>("");
  const [valorPuesto, setValorPuesto] = useState<string>("");
  const [valorFoto, setValorFoto] = useState<string>("");
  const [valorEquipo, setValorEquipo] = useState<string>("");

  const manejarEnvio = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("Dato enviado");

    const datosEnviado: formDatos = {
      identificador: uuidv4(),
      nombre: valorNombre,
      puesto: valorPuesto,
      foto: valorFoto,
      equipo: valorEquipo,
    };

    registarColaborador(datosEnviado);
  };

  return (
    <section className="formulario">
      <h2 className="formulario__titulo">
        Rellena el formulario para crear el colaborador
      </h2>
      <form onSubmit={manejarEnvio} className="formulario__form">
        <CampoTexto
          titulo="Nombre"
          idForm="nombre"
          valor={valorNombre}
          setValor={setValorNombre}
          necesario
        />
        <CampoTexto
          titulo="Puesto"
          idForm="puesto"
          valor={valorPuesto}
          setValor={setValorPuesto}
          necesario
        />
        <CampoTexto
          titulo="Foto"
          idForm="foto"
          valor={valorFoto}
          setValor={setValorFoto}
        />
        <ListaOpciones
          valor={valorEquipo}
          setValor={setValorEquipo}
          opciones={listaOpc}
        />

        <button className="formulario__boton" type="submit">
          Crear
        </button>
      </form>
    </section>
  );
}

export default Formulario;
