// bootstrap elements
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// react router
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <Navbar bg='light' expand='lg' className='mt-3 border-bottom border-1'>
      <Container fluid>
        <Navbar.Collapse>
          <Nav className='me-auto my-2 my-lg-0'>
            <NavLink className='text-decoration-none' to='/'>Главная</NavLink>
          </Nav>
          
          <NavLink className='text-decoration-none' to='/newpost'>
            <Button variant='outline-primary'>
              Создать пост
            </Button>
          </NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;