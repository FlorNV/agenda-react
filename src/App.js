import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  ContactsContext,
  ContactsDispatchContext,
} from "./context/ContactsContext";
import { ContactsReducer } from "./reducers/ContactsReducer";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import ContactDetails from "./routes/Contact/ContactDetails";
import ContactForm from "./routes/Contact/ContactForm";
import Navigation from "./routes/Navigation/Navigation";

const contactList = [
  {
    id: uuid(),
    name: "Juan Perez",
    photo:
      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    phone: "123456789",
  },
  {
    id: uuid(),
    name: "Maria Lara",
    photo:
      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    phone: "123456789",
  },
  {
    id: uuid(),
    name: "Jose Lopez",
    photo:
      "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    phone: "123456789",
  },
];

const init = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : contactList;
  // return contacts ? JSON.parse(contacts) : [];
};

function App() {
  const [contacts, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactsContext.Provider value={contacts}>
        <ContactsDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="contacto/:id" element={<ContactDetails />} />
              <Route path="contacto/nuevo" element={<ContactForm />} />
            </Route>
          </Routes>
        </ContactsDispatchContext.Provider>
      </ContactsContext.Provider>
    </div>
  );
}

export default App;
