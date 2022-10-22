import React from "react";
import { useContext } from "react";
import { ContactsDispatchContext } from "../../context/ContactsContext";
import "./Contact.css";

const Contact = ({ contact }) => {
  const { id, name, photo, phone } = contact;
  const dispatch = useContext(ContactsDispatchContext);

  const handleDelete = () => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <div className="border p-4 my-4 m-auto">
      <div className="row align-items-center">
        <div className="col-3">
          <img src={photo} alt={photo} className="photo" />
        </div>
        <div className="col-6">
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <div className="col-3 text-end">
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
