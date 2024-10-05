import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-secondary fixed-top'>
        <div className='container-fluid'>
          <Link href="#" className='navbar-brand'>Navbar</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
           data-bs-target='#Navbamu' aria-controls='Navbamu' aria-expanded='false' aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='Navbamu'>
            <ul className='navbar-nav me-auto md-2 md-lg-0'>
              <li className='nav-item '>
                <Link to={'/Home'} class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className='nav-item '>
                <Link to={'/Blog'} class="nav-link active" aria-current="page" href="#">Blog</Link>
              </li>
              <li className='nav-item '>
                <Link to={'/About'} class="nav-link active" aria-current="page" href="#">About</Link>
              </li>
              <li className='nav-item '>
                <Link  to={'/Products'} className="nav-link active" aria-current="page">Products</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li><Link className="dropdown-item" href='#'></Link></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar