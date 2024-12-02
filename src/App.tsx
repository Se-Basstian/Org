import { useState } from "react";
import "./App.css";
import Header from "./componets/Header";
import Formulario from "./componets/formulario";
import MiOrg from "./componets/MiOrg";
import Equipo from "./componets/Equipo";
import Colaborador from "./componets/Colaborador";
import Footer from "./componets/Footer";
import { v4 as uuidv4 } from "uuid";

// import perfil from "./assets/imgs/perfil.webp";

interface formDatos {
  nombre: string;
  puesto: string;
  foto: string;
  equipo: string;
}

function App() {
  const [mostrarForm, setMostrarFor] = useState(true);
  const [colaboradores, setColaboradores] = useState<formDatos[]>([]);

  const ocultarForm = () => {
    setMostrarFor(!mostrarForm);
  };

  const equipos = [
    "Programación",
    "Front-End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const registrarColaborador = (datos: formDatos) => {
    setColaboradores([...colaboradores, datos]);
  };

  const creaColaborador = (colaboradores: formDatos[], titulo: string) => {
    if (!colaboradores.length) return null;

    return colaboradores
      .filter((colaborador) => colaborador.equipo === titulo)
      .map((colaborador) => {
        return (
          <Colaborador
            key={uuidv4()}
            imagen={{ src: colaborador.foto, alt: "foto perfil" }}
            nombre={colaborador.nombre}
            descripcion={colaborador.puesto}
            eliminar={() => console.log("Hola munde")}
          />
        );
      });
  };

  const creaEquipos = (equipos: string[]) => {
    if (colaboradores.length === 0) {
      return (
        <div className="app__div">
          <h2 className="app__mensaje">Empieza a registar colaboradores</h2>
        </div>
      );
    }

    return equipos.map((equipo) => {
      return (
        colaboradores.some((colaborador) => colaborador.equipo === equipo) && (
          <Equipo key={`equipo-${++i}`} titulo={equipo}>
            {creaColaborador(colaboradores, equipo)}
          </Equipo>
        )
      );
    });
  };

  return (
    <>
      <Header />

      {mostrarForm && (
        <Formulario
          listaOpc={equipos}
          registarColaborador={registrarColaborador}
        />
      )}

      <MiOrg ocultarForm={ocultarForm} />

      {creaEquipos(equipos)}

      <Footer />
    </>
  );
}

export default App;
