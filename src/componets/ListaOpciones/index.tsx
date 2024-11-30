import type { ChangeEvent } from "react";

interface Props {
  valor: string;
  setValor: (v: string) => void;
  opciones: Array<string>;
}

function ListaOpciones({ valor, setValor, opciones }: Props) {
  let num = 0;

  const manejarCambio = (e: ChangeEvent<HTMLSelectElement>) => {
    setValor(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor="opciones">Equipos</label>
      <select name="lista" id="opciones" value={valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccione una opción
        </option>
        {opciones.map((opc) => {
          return (
            <option key={++num} value={opc}>
              {opc}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default ListaOpciones;
