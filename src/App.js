import React, { Component } from 'react';
import { Button, Grid, Row, Col, Form, FormGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

let model, vendor, description, origin, cost, listprice, price,
product, warranty, material, priority, serial, acconfig, minqty,
initqty, artcqty, arrivedate, notes;

class App extends Component {

submit(e) {
  e.preventDefault();

  axios
  .post('http://localhost:3001/pricing', {
    model: model.value,
    vendor: vendor.value,
    description: description.value,
    origin: origin.value,
    cost: cost.value,
    listprice: listprice.value,
    price: price.value,
    product: product.value,
    warranty: warranty.value,
    material: material.value,
    priority: priority.value,
    serial: serial.value,
    acconfig: acconfig.value,
    minqty: minqty.value,
    initqty: initqty.value,
    arrivedate: arrivedate.value,
    artcqty: artcqty.value,
    notes: notes.value
  })
  .then(response => {
    console.log(response);
    console.log(response.data);
  });
  model.value = vendor.value = description.value = origin.value = cost.value = listprice.value =
  product.value = warranty.value = material.value = priority.value = serial.value = acconfig.value =
  minqty.value = initqty.value = arrivedate.value = artcqty.value = notes.value = "";
};
  render() {
    return (
    <Grid>
    <Form className = "form-style">
    <Row>
    <b> BK Model Number: </b>

                <FormGroup>
                  <input
                    id = "model"
                    type = "text"
                    placeholder="Enter name"
                    ref={(input) => model = input}
                  />
                </FormGroup>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Vendor Model Number: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "vendor"
                    type = "text"
                    placeholder="Enter vendor"
                    ref={(input) => vendor = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Description </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "description"
                    type = "text"
                    placeholder="Description here"
                    ref={(input) => description = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b>Country of Origin</b></Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <select ref={(input) => origin = input}>
                    <option value='China'> China  </option>
                    <option value='USA'> USA </option>
                    <option value='UK'> UK </option>
                    <option value='French'> French </option>
                    <option value='Germany'> Germany </option>
                    <option value='Israel'> Israel </option>
                    <option value='Japan'> Japan </option>
                    <option value='Slovakia'> Slovakia </option>
                    <option value='Taiwan'> Taiwan </option>
                    <option value='Korea'> Korea </option>
                  </select>
                </FormGroup>
              </Col>
              </Row>
    <Row>
    <Col xs={2} md={2}> <b> Direct Cost </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "cost"
                    type = "text"
                    placeholder="Enter cost"
                    ref={(input) => cost = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> US List Price </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "listprice"
                    type = "text"
                    placeholder="Enter price"
                    ref={(input) => listprice = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Price Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                <select ref={(input) => price = input}>
                  <option value='ACC15 - Accessories - 15%'> ACC15 - Accessories - 15% </option>
                  <option value='PROD22 - Products - 22%'> PROD22 - Products - 22% </option>
                  <option value='PROD25 - Products - 25%'> PROD25 - Products - 25% </option>
                  <option value='PROD28 - Products - 28%'> PROD28 - Products - 28% </option>
                </select>
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Product Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                <select ref={(input) => product = input}>
                <option value="1">Analog Multimeter (AMM)</option>
    <option value="2">Battery Analzyer (BAT)</option>
    <option value="19">Cable Tester (TEC)</option>
    <option value="3">Component Tester (CTE)</option>
    <option value="4">DC Electronic Load (DEL)</option>
    <option value="5">Digital Multimeter (DMM)</option>
    <option value="6">Digital Storage Oscilloscope (DSO)</option>
    <option value="7">Digital Temperature Meter (DTM)</option>
    <option value="8">Electrical Meter (ELC)</option>
    <option value="9">Enviro. Testers - Dataloggers (ENV)</option>
    <option value="10">EPROM Programer (EPP)</option>
    <option value="12">Frequency Counter (FQC)</option>
    <option value="11">Function Generator (FNG)</option>
    <option value="13">IC Tester (ICT)</option>
    <option value="14">Insulation Tester (MOM)</option>
    <option value="15">Oscilloscope (OSC)</option>
    <option value="16">Power Supply (PSP)</option>
    <option value="17">RF Test Instruments (RFI)</option>
    <option value="18">Shielding Box (SHL)</option>
    <option value="21">Spectrum Analyzer (WFA)</option>
    <option value="20">Video Tester (VTE)</option>
                </select>
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Warranty </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                  id = "warranty"
                    type = "text"
                    placeholder="Enter name"
                    ref={(input) => warranty = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Material Type </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                <select ref={(input) => material = input}>
                <option value="1">Accessories (AC)</option>
                <option value="2">Components (CT)</option>
                <option value="4">Electronic Load (EL)</option>
                <option value="6">Environmental (EV)</option>
                <option value="7">Frequency Counter (FC)</option>
                <option value="8">Function Generator (FG)</option>
                <option value="9">Insulation Testers (M0)</option>
                <option value="3">Meters (DM)</option>
                <option value="10">Oscilloscopes (OS)</option>
                <option value="13">Other (OTH)</option>
                <option value="11">Power Supplies (PS)</option>
                <option value="5">Programmers (EP)</option>
                <option value="14">Spectrum Analyzers (SA)</option>
                <option value="12">Video Tester (VT)</option>
                </select>
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Priority Class </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                <select ref={(input) => priority = input}>
                <option value = "A"> A </option>
                <option value = "B"> B </option>
                <option value = "C"> C </option>
                </select>
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Unique Serial No. ID </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "serial"
                    type = "text"
                    placeholder="Enter Serial No."
                    ref={(input) => serial = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> AC Line Configuration </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <select ref={(input) => acconfig = input}>
                  <option value="1">Universal (100V - 240V)</option>
                  <option value="2">110V/220V selectable (110V is default)</option>
                  <option value="3">110V operation only</option>
                  <option value="4">220 V operation only</option>
                  <option value="5">N/A (accessories)</option>
                  </select>
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Min Order Qty. </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "minqty"
                    type = "text"
                    placeholder="Enter Qty"
                    ref={(input) => minqty = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Init Order Qty. </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "initqty"
                    type = "text"
                    placeholder="Enter Qty"
                    ref={(input) => initqty = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> 1st Artc Arrv Date: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "arrivedate"
                    type = "text"
                    placeholder="Enter Date"
                    ref={(input) => arrivedate = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> 1st Artc Qty: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "artcqty"
                    type = "text"
                    placeholder="Enter Qty"
                    ref={(input) => artcqty = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <Row>
    <Col xs={2} md={2}> <b> Notes: </b> </Col>
              <Col xs={2} md={2}>
                <FormGroup>
                  <input
                    id = "notes"
                    type = "text"
                    placeholder="Notes"
                    ref={(input) => notes = input}
                  />
                </FormGroup>
              </Col>
    </Row>
    <FormGroup>
      <Button type="submit" bsStyle="primary">
                  Submit
                    </Button>
      </FormGroup>
    </Form>
    </Grid>
    );
  }
}

export default App;
