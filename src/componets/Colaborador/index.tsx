import "./style.css";
import perfil from "../../assets/imgs/perfil.webp";

type Imagen = { src: string; alt: string };

interface Props {
  imagen: Imagen;
  nombre: string;
  descripcion: string;
}

function Colaborador({ imagen, nombre, descripcion }: Props) {
  const colorNumero = Math.floor(Math.random() * 7) + 1;

  const foto = imagen.src || perfil;

  return (
    <div className="colaborador">
      <div
        className={`colaborador__header colaborador__header--color-${colorNumero}`}
      >
        <img className="colaborador__img" src={foto} alt={imagen.alt} />
      </div>
      <div className="colaborador__main">
        <p className="colaborador__main__nombre">{nombre}</p>
        <p className="colaborador__main__descripcion">{descripcion}</p>
      </div>
    </div>
  );
}

export default Colaborador;
