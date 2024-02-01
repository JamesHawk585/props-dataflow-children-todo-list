import CardHeader from "./CardHeader";
import CardBody from "./CardBody";



export default function Card({ title, children }) {

  return (
    <section className="card">
      <CardHeader title={title} />
      <CardBody children={children}/>
    </section>
  );
}
