import "./Card.css"
import CardHeader from "./CardHeader"

export default function Card({title, children}) {
  return (<section className="card">
    <CardHeader title={title}/>
    {children}
    </section>)
}