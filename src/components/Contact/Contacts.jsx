import React, { useContext } from "react";
import Contact from "./Contact";
import { ContactsDispatchContext } from "../../context/ContactsContext";
import "./Contacts.css";
import { Link } from "react-router-dom";

const Contacts = ({ contacts }) => {
  const dispatch = useContext(ContactsDispatchContext);

  return (
    <div className="contacts mx-auto">
      <h1 className="text-center">Mis contactos</h1>
      <Link to="/contacto/nuevo" className="btn btn-outline-info">
        Agregar
      </Link>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Contacts;
