import Card from "./Card/Card";
import CardBody from "./Card/CardBody";

// React components can only return on element. Frangments are a way around that limitation.

function Task({ task }) {
  console.log(task)
  const {title} = task
  console.log(title)
  return (
    <Card title={title}>
      <CardBody>
        <p>{task.description}</p>
      </CardBody>
    </Card>
  );
}

export default Task;
