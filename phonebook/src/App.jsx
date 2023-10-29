import React, { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handeInputName = (event) => setNewName(event.target.value);
  const handeInputNumber = (event) => setNewNumber(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some((elem) => elem.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };
  return (
    <>
      <h2>add new</h2>
      <form name={"addForm"} onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input name={"name"} autoComplete="on" onChange={handeInputName} />
        </div>
        <div>
          number:{" "}
          <input
            name={"number"}
            autoComplete="on"
            onChange={handeInputNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};
const Numbers = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </>
  );
};
const Filter = ({ setFilter }) => {
  const handleFilter = (event) => setFilter(event.target.value);
  return (
    <>
      filter shown with{" "}
      <input
        name={"filter"}
        autoComplete="off"
        type="text"
        onChange={handleFilter}
      />
    </>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [filter, setFilter] = useState("");
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <Numbers persons={filteredPersons} />
    </>
  );
};
export default App;
