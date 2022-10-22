import React from "react";
import { useContext } from "react";
import Contacts from "../../components/Contact/Contacts";
import { ContactsContext } from "../../context/ContactsContext";

const Home = () => {
  const contacts = useContext(ContactsContext);

  return (
    <div className="container my-5">
      <Contacts contacts={contacts} />
    </div>
  );
};

export default Home;
