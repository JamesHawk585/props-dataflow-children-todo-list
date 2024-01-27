import Card from "./Card/Card"
import CardBody from "./Card/CardBody"

export default function Task({task, onDeleteTask}) {

  // I just want title and description

  return (
    <Card title={task.title}>
      <CardBody>
       <p>{task.description}</p>
      <button className="button button--warning" onClick={() => onDeleteTask(task.id)}>🗑 Remove</button>
      </CardBody>
     
    </Card>
  )
}