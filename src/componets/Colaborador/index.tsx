import "./style.css";
import perfil from "../../assets/imgs/perfil.webp";
// import imgCerrar from "../../assets/imgs/cerrar.png";
import { IoIosCloseCircle } from "react-icons/io";

type Imagen = { src: string; alt: string };

interface Props {
  idColaborador: string;
  imagen: Imagen;
  nombre: string;
  descripcion: string;
  eliminar: (id: string) => void;
}

export default function Colaborador({
  idColaborador,
  imagen,
  nombre,
  descripcion,
  eliminar,
}: Props) {
  const colorNumero = Math.floor(Math.random() * 7) + 1;

  const foto = imagen.src || perfil;

  return (
    <div id={idColaborador} className="colaborador">
      <div
        className={`colaborador__header colaborador__header--color-${colorNumero}`}
      >
        <img className="colaborador__img-perfil" src={foto} alt={imagen.alt} />
        <IoIosCloseCircle
          className="colaborador__img-cerrar"
          onClick={() => {
            eliminar(idColaborador);
          }}
        />
      </div>
      <div className="colaborador__main">
        <p className="colaborador__main__nombre">{nombre}</p>
        <p className="colaborador__main__descripcion">{descripcion}</p>
      </div>
    </div>
  );
}
