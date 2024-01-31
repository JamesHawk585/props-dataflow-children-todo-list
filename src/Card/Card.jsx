import "./Card.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card({ task, children }) {
  return (
    <section className="card">
      <CardHeader title={task} />
      <CardBody children={children}/>
    </section>
  );
}
