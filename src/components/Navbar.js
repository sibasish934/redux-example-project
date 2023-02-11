import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div>Welcome, to Todo List Hub</div>
      <h1>Admin Table</h1>

      <section>
        <div>One Destination for  complete Todo List.</div>
        <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Navbar