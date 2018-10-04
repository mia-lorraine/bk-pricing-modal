import React, { Component } from 'react';
import { Modal, Button, Grid, Row, Col, Checkbox, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <Grid>
    <Row className = "BK-ModelNo">
    <Col xs={2} md={2}> <b> BK Model Number: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Vendor Model Number: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter vendor"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Description </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Description here"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b>Country of Origin:</b></Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <select >
                    <option value='China'> China  </option>
                    <option value='USA'> USA </option>
                    <option value='Franch'> Franch </option>
                    <option value='Germany'> Germany </option>
                    <option value='Israel'> Israel </option>
                    <option value='Japan'> Japan </option>
                    <option value='Ayumu Tokiwa'> Ayumu Tokiwa </option>
                  </select>
                </FormGroup>
              </Col>
              </Row>
    <Row>
    <Col xs={2} md={2}> <b> Direct Cost </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> US List Price </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Price Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Product Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Warranty </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Material Type </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Priority Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Unique Serial No. ID </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> AC Line Configuration </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Min Order Qty. </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Init Order Qty. </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> 1st Artc Arrv Date: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> 1st Artc Qty: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    type = "text"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
    </Row>
    </Grid>
    );
  }
}

export default App;
