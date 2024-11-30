import type React from "react";
import "./style.css";

interface Props {
  titulo: string;
  children?: React.ReactNode;
}

function Equipo({ titulo, children }: Props) {
  return (
    <section
      className={`equipo equipo--${titulo.toLowerCase().replace(/ /gi, "-")}`}
    >
      <h3 className="equipo__titulo">{titulo}</h3>
      <div className="equipo__cards">{children}</div>
    </section>
  );
}

export default Equipo;
