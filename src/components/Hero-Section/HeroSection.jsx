import { BackgroundImage } from '@mantine/core';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './hero-section.css';

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h2 className='mb-4 hero__title'>
              ድር ቢያብር አንበሳ ያስር!
              </h2>
              <p className='mb-5'>
              Their healing begins with your donation. <br /> 
              Be the change with your spare change. <br /> 
              Don't turn away, give today!
              <br /><br />
              Their healing begins with your donation. <br /> 
              Be the change with your spare change. <br /> 
              Don't turn away, give today!
              <br /><br />
              Their healing begins with your donation. <br /> 
              Be the change with your spare change. <br /> 
              Don't turn away, give today!
              </p>
            </div>
            {/* <div className='search'>
              <input className='textInput' type='text' placeholder='Search any patient ...' />
              <button className='btn'>Search</button>
            </div> */}
          </Col>

          <Col lg='6' md='6'>
            <img src="./raiseToHelp.gif" alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
