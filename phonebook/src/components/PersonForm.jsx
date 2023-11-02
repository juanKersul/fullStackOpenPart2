import { useState } from "react";
import Notification from "./Notification";
import personService from "../services/persons";
const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);
  const showNotification = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 1000);
  };
  const handeInputName = (event) => setNewName(event.target.value);
  const handeInputNumber = (event) => setNewNumber(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some((elem) => elem.name === newName)) {
      if (confirm(`${newName} is already added to phonebook`)) {
        console.log("antes del find")
        const person = persons.find((elem) => elem.name === newName);
        console.log("despues del find")        
          personService
          .update(person.id, { ...person, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((elem) => (elem.id !== person.id ? elem : response))
            );
            showNotification(`Updated ${person.name}`);
          }).catch(error => {
            alert(
              `the note '${person.name}' was already deleted from server`
            )
            setPersons(persons.filter((person)=> person.id !== person))
          });
      }
    } else {
      showNotification(`Created ${newName}`);
      personService
        .create({ name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response));
        });
    }
  };
  return (
    <>
      <h2>add new</h2>
      <form name={"addForm"} onSubmit={handleSubmit}>
        <Notification message={message} />
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
export default PersonForm;
