import "../css/components.css"

export default function ButtonGroup() {
  return (
    <div className="button-group-container">
      <button className="button-group-button" disabled={false} >First</button>
      <button className="button-group-button" disabled={false} >Second</button>
      <button className="button-group-button" disabled={false} >Third</button>
    </div>
  )
}

