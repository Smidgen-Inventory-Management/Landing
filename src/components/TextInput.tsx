import "../css/components.css"

export default function TextInput() {
  return (
    <div className="text-input-container">
      <h4 className="text-input-label">Label</h4>
      <input disabled={false} className="error text-input" type="text" placeholder="Input label" />
      <div className="foot-error icon-right" />
      <p className="text-input-subtitle">Supportive Text</p>
    </div>
  )
}
