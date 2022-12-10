import { Link } from "react-router-dom";
import kosmo from "../../images/kosmo-nb.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-container">
          <img src={kosmo} alt="kosmo logo" className="header-logo" />

          <ul className="nav-links">
            <Link to="/">
              <li className="top-links"> Earth </li>
            </Link>

            <Link to="/main">
              <li className="top-links">Home </li>
            </Link>

            <Link to="/contact">
              <li className="top-links"> Contact </li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
