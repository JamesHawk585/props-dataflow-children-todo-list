import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import './App.css'
import './Card/Card.css'

// React components can only return one element. Frangments are a way around that limitation.

function Task({ task }) {
  const {title} = task


  return (
    <Card title={title}>
      <CardBody>
        <p>{task.description}</p>
        <button className='button--warning'>Remove🗑️</button>
      </CardBody>
    </Card>
    );
}

export default Task;
