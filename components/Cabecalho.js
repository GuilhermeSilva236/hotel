import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Cabecalho = () => {
  // Estado para controlar o link ativo
  const [activeLink, setActiveLink] = useState(null);

  // Função para lidar com o clique no link
  const handleClick = (link) => {
    setActiveLink(link); // Atualiza o link ativo
  };

  return (
    <>
      <style jsx>{`
        .nav-link {
          transition: all 0.2s; // Define a duração da transição
          font-weight: ${activeLink ? 'normal' : 'bold'}; // Define o peso da fonte
        }

        .nav-link:hover {
          transform: scale(1.1); // Aumenta o tamanho do link em 10%
          font-weight: bold; // Torna o texto em negrito
        }
      `}</style>

      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/img/logo.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className={`nav-link ${activeLink === '/hospedagem' ? 'active' : ''}`}
              href="/hospedagem"
              onClick={() => handleClick('/hospedagem')}
            >
              Cadastro de Hóspede
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeLink === '/funcionario' ? 'active' : ''}`}
              href="/funcionario"
              onClick={() => handleClick('/funcionario')}
            >
              Cadastro de Funcionários
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeLink === '/quartos' ? 'active' : ''}`}
              href="/quartos"
              onClick={() => handleClick('/quartos')}
            >
              Cadastro de Quartos
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeLink === '/servicos' ? 'active' : ''}`}
              href="/servicos"
              onClick={() => handleClick('/servicos')}
            >
              Cadastro de Serviços
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
