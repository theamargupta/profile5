import React from 'react'

import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//import nogame from './res/5.png'


const Home = () => {
  return(
      <div className="container">
        <Row>
          <Col>
            <h3 className="home-header"><span className="bold-text">Amar Gupta</span> is a DELHI based web developer, backend engineer; intent on building beautiful applications with excellent features.</h3>
            <h3 className="home-header header-top"><a href = "mailto: amar9911056196@gmail.com">Get in touch <i class="fas fa-envelope-open-text"></i></a></h3>
            <Link to="/projects">
            <h3 className="home-header header-top">Projects <i class="fa fa-tasks" aria-hidden="true"></i></h3></Link>
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
        
        <div className="spacer"></div>
      </div>
  )
}

export default Home
