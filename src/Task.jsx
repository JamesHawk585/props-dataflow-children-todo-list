import Card from "./Card/Card";
import CardBody from "./Card/CardBody";

// React components can only return one element. Frangments are a way around that limitation.

function Task({ task }) {
  const {title} = task


  return (
    // <Card title={title}>
    //   <CardBody>
    //     <p>{task.description}</p>
    //   </CardBody>
    // </Card>
  <section className="card">
    <h2>{task.title}</h2>
    <p>{task.description}</p>
  </section>
  
    );
}

export default Task;
