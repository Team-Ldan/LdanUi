import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Company = () => {
  return (
    <section style={{ backgroundColor: "#B3E5FC"}}>
      <Container>
        <Row>
          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <img src='./pawlos.png' width='50px' height='50px' />
              Pawlos
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <img src='./petros.png' width='80px' height='50px' />
              Petros
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <img src='./minilik.png' width='50px' height='50px' />
              Minilik
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <img src='./zewditu.png' width='50px' height='50px' />
              Zewditu
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <img src='./yekatit.png' width='50px' height='50px' />
              Yekatit
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h2 className=' d-flex align-items-center gap-1'>
              <img src='./tikurAnbesa.png' width='300px' height='70px' />
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
