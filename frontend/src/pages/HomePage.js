import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HomePage.css'; 
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-md-left">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="hero-title">Explore the Underwater World with Us</h1>
              <p className="hero-text">
                Join our diving adventures and discover the wonders beneath the waves.
              </p>
              <Button variant="primary" size="lg">Discover More</Button>
            </Col>
            <Col md={6}>
              <img src="/path-to-hero-image.jpg" alt="Diving" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          {/* Content for Services */}
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          {/* Content for About */}
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          {/* Content for Contact */}
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
