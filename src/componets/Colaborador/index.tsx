import "./style.css";
import perfil from "../../assets/imgs/perfil.webp";
import imgCerrar from "../../assets/imgs/cerrar.png";

type Imagen = { src: string; alt: string };

interface Props {
  imagen: Imagen;
  nombre: string;
  descripcion: string;
  eliminar: () => void;
}

function Colaborador({ imagen, nombre, descripcion, eliminar }: Props) {
  const colorNumero = Math.floor(Math.random() * 7) + 1;

  const foto = imagen.src || perfil;
  const evtEliminar = () => {
    eliminar();
  };

  return (
    <div className="colaborador">
      <div
        className={`colaborador__header colaborador__header--color-${colorNumero}`}
      >
        <img className="colaborador__img-perfil" src={foto} alt={imagen.alt} />
        <img
          onClick={evtEliminar}
          className="colaborador__img-cerrar"
          src={imgCerrar}
          alt="Una equis para eliminar al colaborardor"
        />
      </div>
      <div className="colaborador__main">
        <p className="colaborador__main__nombre">{nombre}</p>
        <p className="colaborador__main__descripcion">{descripcion}</p>
      </div>
    </div>
  );
}

export default Colaborador;
