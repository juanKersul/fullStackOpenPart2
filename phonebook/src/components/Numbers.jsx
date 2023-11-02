import personService from "../services/persons";
const Numbers = ({ persons, setPersons }) => {
  const handleDelete = (id) => {
    console.log(id);
    personService.deletePerson(id).then((response) => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </li>
      ))}
    </>
  );
};
export default Numbers;
