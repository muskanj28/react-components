import { Outlet, Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 bg-success ">
        <div className="container">
              <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item ">
                        <Link className="nav-link " to="/news">News</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact us</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/todo">Todo List</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/textUtiles">Text Utiles</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/timer">My Work Timer</Link>
                    </li>
                </ul>
            
        </div>
          
      </nav>
      {/* <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav>
                <Link to="/">Home</Link></Nav>
            <Nav.Link to="/news">News</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
      </Navbar> */}

      <Outlet />
    </>
  )
};

export default Layout;