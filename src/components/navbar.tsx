import "../css/navbar.css"

export default function Navbar() {
  return (
    <header>
      <nav className="header-container">
        <div className="header-section">
          <ul className="header-links">
            <li className="header-item"><a href="#" className="header-link">Features</a></li>
            <li className="header-item"><a href="#" className="header-link">Meet the Team</a></li>
            <li className="header-item"><a href="#" className="header-link">Learn More</a></li>
          </ul>
        </div>
        <div className="header-section">
          <a href="#" className="header-link">
            <h1 className="header-hero">Smidgen</h1>
          </a>
        </div>
        <div className="header-section">
          <button className="button-primary" disabled={false} >Log In</button>
        </div>
      </nav>
    </header>
  )
}

