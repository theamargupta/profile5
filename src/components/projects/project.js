import React from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'
import Arrow from '../res/arrow-01.png'
import weather from '../res/1.png'
import todoa from '../res/2.png'
import todop from '../res/2-a.png'
import buisness from '../res/3.png'
import hotel from '../res/4.png'

class Project extends React.Component {
  render() {
   return (
    <div className="container">
    <Row>
          <Col sm={2}>
          <Link className="link-no-underline" to='/'><img className="arrow" src={Arrow} alt="arrow"/></Link>
          </Col>
          <Col sm={10}>
          <h3 className="home-header"><span className="bold-text">Projects</span></h3>
        </Col>
        </Row>
    <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/mental">
              <h4 className="home-image-title">01 Weather App</h4>
              <img className="home-mental image-hover" alt="mental website thumbnail" src={weather} />
              <div class="overlay">
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
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
                <div class="text">Learn more -{">"}</div>
              </div>
            </Link>
          </Col>
        </Row>
        
        <div className="spacer"></div>
        </div>
   ) 
  }
}

export default Project;
