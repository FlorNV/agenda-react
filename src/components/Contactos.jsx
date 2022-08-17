import React, { useReducer, useEffect, useState } from "react";
import TablaContactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";
import { ContactosReducer } from "../reducers/ContactosReducer";

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  //   const [state, dispatch] = useReducer(ContactosReducer, contactos);
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  const handleAdd = () => {
    setFormView(!formView);
  };

  return (
    <div className="row m-5 gx-5">
      <div className="col-md-8 table-responsive order-1 order-md-0">
        <TablaContactos contactos={state} dispatch={dispatch} />
      </div>
      <div className="col-md-4">
        <button className="mb-4 btn btn-secondary" onClick={handleAdd}>
          {formView ? "Cancelar" : "Nuevo contacto"}
        </button>
        {formView && <FormularioAdd dispatch={dispatch} />}
      </div>
    </div>
  );
};

export default Contactos;
