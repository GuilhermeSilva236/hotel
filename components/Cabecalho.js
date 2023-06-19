import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>

      <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="/inicio">
            <img
              alt=""
              src="/img/logo4.png"
              width="90"
              height="90"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Brand className='nav-link' href="/cdpet">Cadastre seu o Pet</Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav.Link className='nav-link' href="/cddono">Cadastro Do Dono Do Pet</Nav.Link>
            <Nav.Link className='nav-link' href="/cdpetconsul">Cadastro De Consulta Do Pet</Nav.Link>
            <Nav.Link className='nav-link' href="/cdpm">Formulário de Pedido de Medicamentos</Nav.Link>
            <Nav.Link className='nav-link' href="/fapc">Formulário de Avaliação Pós-Consulta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho