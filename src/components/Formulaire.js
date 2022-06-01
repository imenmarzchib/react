import React from 'react';
import {Form,Col,Row, Button, Navbar, Container, Nav} from "react-bootstrap"

function Formulaire() {
  return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
</>
 <Form style={{marginTop:"2%",width:"80%",marginLeft:"50px"}}>   
<Form.Group className="mb-3">
    <Form.Label className='ttt'>Nom</Form.Label>
    <Form.Control placeholder="Entrer Nom" disabled  style={{backgroundColor:"white"}}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Prenom</Form.Label>
    <Form.Control placeholder="Entrer Prenom" disabled style={{backgroundColor:"white"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Date De Naissance</Form.Label>
    <Form.Control placeholder="Entrer Date De Naissance" disabled style={{backgroundColor:"white"}}/>
  </Form.Group>
  <Form>
  <Form.Group className="mb-3" controlId="formPlaintextEmail">
    <Form.Label > Email</Form.Label>
      <Form.Control  defaultValue="email@example.com" />
   
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formPlaintextPassword">
    <Form.Label >
      Password
    </Form.Label>
    
      <Form.Control type="password" placeholder="Password" />
    
  </Form.Group>
</Form> 
<Form.Group className="mb-3">
    <Form.Label>Sexe</Form.Label>
    <Form.Select >
      <option>Homme</option>
      <option>Femme</option>
    </Form.Select>
  </Form.Group>
 
  <Row className="mb-3 jjj">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Adresse</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Ville</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose</option>
        <option>Tunis</option>
        <option>Bizert</option>
        <option>Sfax</option>
        <option>Gbés</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" type="number">
      <Form.Label >Téléphone</Form.Label>
      <Form.Control type="number" />
    </Form.Group>
  </Row>
  <fieldset className='bbb'>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
       Education
      </Form.Label>
      <Col sm={1}>
        <Form.Check
          type="Education"
          label="Secondaire"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="Education"
          label="Baccalaurea"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="Education"
          label="Universitaire"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
    
  </fieldset>
  <Button variant="primary" type="submit" style={{backgroundColor:"gray"}}>
    Submit
  </Button>
  </Form>
    </div>
  )
}

export default Formulaire