import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/Tab.css';

  const Tabs = () => {
  return (
    <>
    <Navbar id='navsTab' expand="lg">
      <Container>
        <Navbar.Brand className="XMText" href="/">House Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/nav" className="HomeTab">Home</Nav.Link>
            <Nav.Link href="/found" className="MaqsadTab">Maqsad</Nav.Link>
            <Nav.Link href="/search" className="MaqsadTab">Uy Topish</Nav.Link>
            <Nav.Link href="/selling" className="MaqsadTab">Uy sotib Olish</Nav.Link>
            <Nav.Link href="/problems" className="MaqsadTab">Muammolar</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Biz haqimizda</NavDropdown.Item>
              <NavDropdown.Item href="/bolimlar">Bo'limlar</NavDropdown.Item>
              <NavDropdown.Item href="/homeSelect">Uy Ko`rish</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Tabs;