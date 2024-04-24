import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { items } from './data';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { FaCartArrowDown } from "react-icons/fa";


function NavScrollExample({ setdata  , cart}) {
  const location = useLocation()
  const FillterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setdata(element);
  }

  const fillterbyPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setdata(element);
  }
  const Navigate = useNavigate();
  const [SearchTrem, setSearchTrem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    Navigate(`/search/${SearchTrem}`)
  }

  return (
    <>
      <header className='sticky-top'>
        <Navbar expand="lg" className="bg-dark navbar-dark">
          <Container>
            <Navbar.Brand href="#">E-Cart Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link><NavLink className='Navbar-links' to='/'>Peoducts</NavLink></Nav.Link>
                <Nav.Link><NavLink className='Navbar-links' to='/cart'>
                  <Button variant="primary">
                  <FaCartArrowDown  style={{fontSize:'25px'}}/>
                    <Badge bg="danger mx-2">{cart.length}</Badge>
                    <span className="visually-hidden">unread messages</span></Button>
                </NavLink></Nav.Link>

              </Nav>
              <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                  value={SearchTrem}
                  onChange={(e) => setSearchTrem(e.target.value)}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='Navbtn'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {
          location.pathname == "/" &&(
            <div className='nav-bar-wapper'>
          <div className="items">Fillter by {"->"}</div>
          <div onClick={() => setdata(items)}
            className="items">No Fillter</div>
          <div onClick={() => FillterByCategory("mobiles")} className="items">Mobile</div>
          <div onClick={() => FillterByCategory("laptops")} className="items">Laptop</div>
          <div onClick={() => FillterByCategory("tablets")} className="items">Tablets</div>
          <div onClick={() => fillterbyPrice("29999")} className="items">{">="}29999</div>
          <div onClick={() => fillterbyPrice("49999")} className="items">{">="}49999</div>
          <div onClick={() => fillterbyPrice("69999")} className="items">{">="}69999</div>
          <div onClick={() => fillterbyPrice("89999")} className="items">{">="}89999</div>
        </div>
          )
        }
      
      </header>
    </>
  );
}

export default NavScrollExample;