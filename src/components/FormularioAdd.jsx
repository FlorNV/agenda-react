import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre: nombre,
      numero: numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="contacto" className="form-label">
            Nombre
          </label>
          <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            id="contacto"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Número de teléfono
          </label>
          <input
            onChange={handleChange}
            name="numero"
            value={numero}
            type="text"
            className="form-control"
            id="telefono"
            autoComplete="off"
          />
        </div>
        <button onClick={handleAdd} className="btn btn-outline-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormularioAdd;
