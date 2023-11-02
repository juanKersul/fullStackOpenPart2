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
export default Filter;
