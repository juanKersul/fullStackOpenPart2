const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Total = ({ parts }) => {
  return (
    <p>
      <b>
        Number of exercises{" "}
        {parts.reduce((last, current) => last + current.exercises, 0)}
      </b>
    </p>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default Course