import "./Card.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card({ title, children }) {
  console.log('in Card.jsx: ', title)

  return (
    <section className="card">
      <CardHeader title={title} />
      <CardBody children={children}/>
    </section>
  );
}
