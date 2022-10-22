import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { ContactsDispatchContext } from "../../context/ContactsContext";
import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useContext(ContactsDispatchContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", phone: "", photo: "" });
  const { name, phone, photo } = data;

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
      name: name,
      phone: phone,
      photo: photo,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
    navigate("/");
  };

  return (
    <div className="container my-5">
      <form className="form mx-auto">
        <h1 className="mb-3 text-center">Nuevo contacto</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control"
            id="name"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Número de teléfono
          </label>
          <input
            onChange={handleChange}
            name="phone"
            value={phone}
            type="text"
            className="form-control"
            id="phone"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Foto
          </label>
          <input
            onChange={handleChange}
            name="photo"
            value={photo}
            type="url"
            className="form-control"
            id="photo"
            autoComplete="off"
          />
        </div>
        <button onClick={handleAdd} className="btn btn-outline-info">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
