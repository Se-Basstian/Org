import type { ChangeEvent } from "react";

interface Props {
  titulo: string;
  idForm: string;
  necesario?: boolean;
  valor: string;
  setValor: (valor: string) => void;
}

function CampoTexto({ titulo, idForm, necesario, valor, setValor }: Props) {
  const placeHolder = `Ingresar${idForm === "foto" ? " enlace de " : " "}`;

  const cambiarValor = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor={idForm}>{titulo}</label>
      <input
        id={idForm}
        className="inputs"
        type="text"
        placeholder={placeHolder.concat(idForm)}
        value={valor}
        required={necesario}
        onChange={cambiarValor}
      />
    </>
  );
}

export default CampoTexto;
