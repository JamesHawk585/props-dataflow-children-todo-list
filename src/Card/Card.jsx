import "./Card.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

// 1:05:41

export default function Card({ title, children }) {

  return (
    <section className="card">
      <CardHeader title={title} />
      <CardBody children={children}/>
    </section>
  );
}
