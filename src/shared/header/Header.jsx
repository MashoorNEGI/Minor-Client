//

import "./Header.scss"
function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand">
          <a className="navbar-brand"><img className="" src="https://cdn-icons-png.flaticon.com/512/1432/1432527.png" height={30} width={30} alt={""} /></a>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;