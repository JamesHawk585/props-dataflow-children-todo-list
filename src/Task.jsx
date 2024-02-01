import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import './App.css'
import './Card/Card.css'

// React components can only return one element. Frangments are a way around that limitation.

function Task({ task, onDeleteTask }) {
  const {title} = task

  // Add onCLick() event to button.
  // Add callback function to delete task when button is clicked.  

//  const {taskId} = task

  return (
    <Card title={title}>
      <CardBody>
        <p>{task.description}</p>
        <button onClick={() => onDeleteTask(task.id)} className='button--warning'>Remove🗑️</button>
      </CardBody>
    </Card>
    );
}

export default Task;
