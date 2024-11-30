import add from "../../assets/imgs/add.png";
import "./style.css";

interface Props {
  ocultarForm: () => void;
}

function MiOrg({ ocultarForm }: Props) {
  return (
    <section className="mi-org">
      <h2 className="mi-org__titulo">Mi Organización</h2>
      <img
        className="mi-org__img"
        src={add}
        alt="Boton agregar"
        onClick={ocultarForm}
        onKeyDown={() => {}}
      />
    </section>
  );
}

export default MiOrg;
