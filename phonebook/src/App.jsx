import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <Numbers persons={filteredPersons} setPersons={setPersons} />
    </>
  );
};
export default App;
