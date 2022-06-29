import { NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-color">
      <div className="container">
        <NavLink className="navbar-brand" href="#">
          <img
            src="data:image/png;base64,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"
            height="38"
            alt="logo"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink href="#">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <Link to="/" className="nav-link">
              Register
            </Link>

            <li className="nav-item">
              <NavLink href="#">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
