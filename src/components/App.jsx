import React from "react";
import Typical from "react-typical";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      dat={contact.dateofbirth}
      pos={contact.position}
    />
  );
}

function App() {
  return (
    <div>
    <h1 className="heading">
    <Typical steps={["My Favorite Players"]}
     />
    </h1>
    {contacts.map(createCard)}

    </div>
  );
}

export default App;
