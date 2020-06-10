import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import weather from './res/1.png'
import todoa from './res/2.png'
import todop from './res/2-a.png'
import buisness from './res/3.png'
import hotel from './res/4.png'
//import nogame from './res/5.png'


const Home = () => {
  return(
      <div className="container">
        <Row>
          <Col>
            <h3 className="home-header"><span className="bold-text">Amar Gupta</span> is a DELHI based web developer, backend engineer; intent on building beautiful applications with excellent features.</h3>
            <h3 className="home-header header-top"><a href = "mailto: amar9911056196@gmail.com">Get in touch <i class="fas fa-envelope-open-text"></i></a></h3>
          </Col>
        </Row>
        <Row className="links-space-top">
          <Col className="link-size center-small-link" sm={3}>
            <a  href="https://github.com/amar-gupta-au8" target="_blank" rel="noopener noreferrer" ><i class="fab fa-github"></i> Github</a>
          </Col>
          <Col className="link-size center-link" sm={3}>
            <a className="center-link" href="https://www.linkedin.com/in/amar-gupta-2684a1157/" target="_blank" rel="noopener noreferrer" ><i class="fab fa-linkedin"></i> LinkedIn</a>
          </Col>
          <Col className="link-size center-link" sm={3}>
            <a className="right-align-link" href="https://twitter.com/amarguptta" target="_blank" rel="noopener noreferrer" ><i class="fab fa-twitter"></i> Twitter</a>
          </Col>
          <Col className="link-size right-align-link" sm={3}>
            <a  href="https://www.facebook.com/amarlalaji" target="_blank" rel="noopener noreferrer" ><i class="fab fa-facebook"></i> Facebook</a>
          </Col>
        </Row>
        <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/mental">
              <h4 className="home-image-title">01 Weather App</h4>
              <img className="home-mental image-hover" alt="mental website thumbnail" src={weather} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row className="home-top-image-row">
          <Col sm={6}>
          </Col>
         <Col className="col-hover" sm={6}>
            <Link to="/tcy-jewelry">
              <h4 className="home-image-title right-side">02 To Do App</h4>
              <img className="home-mental image-hover" alt="tcy website thumbnail" src={todoa} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/mental">
              <h4 className="home-image-title">03 To Do App(PWA)</h4>
              <img className="home-mental image-hover" alt="mental website thumbnail" src={todop} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
          <Col sm={6}></Col>
        </Row>
        
        <Row className="home-top-image-row">
          <Col sm={6}>
          </Col>
         <Col className="col-hover" sm={6}>
            <Link to="/tcy-jewelry">
              <h4 className="home-image-title right-side">04 Buisness website</h4>
              <img className="home-mental image-hover" alt="tcy website thumbnail" src={buisness} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/mental">
              <h4 className="home-image-title">05 Hotel</h4>
              <img className="home-mental image-hover" alt="mental website thumbnail" src={hotel} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <div className="spacer"></div>
      </div>
  )
}

export default Home
