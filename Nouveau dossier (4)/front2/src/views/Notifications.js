/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Swal from "sweetalert2";
import API_IP from "./config";
 


{/*ajout de mouvement dse sortie*/ }

function UserProfile() {
  const [values, setValues] = useState({
    Nom: '',
    Prenom: '',
    occupation: '',
    Categorie: '',
    Marque: '',
    IdentifiantMat: '',
    dateutilisation: ''

        })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://${API_IP}:3000/api/Mouvement`, values)
      .then(
        res => console.log(res));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'demande de materiel validé avec succes',
          showConfirmButton: false,
          timer: 150000
        })
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                  <Row>
                        <Col className="pr-md-1" md="6">
                            <h5 className="title">Demandeur</h5>
                        </Col>
                        <Col className="pr-md-1" md="6">
                            <h5 className="title">Materiel</h5>
                        </Col>
                  </Row>      
               </CardHeader>
               <CardBody>
                     <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Nom</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                                onChange={e => setValues({ ...values, Nom: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="6">
                            <FormGroup>
                              <label>nom du materiel</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                                onChange={e => setValues({ ...values, Categorie: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>prenom</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                                onChange={e => setValues({ ...values, Prenom: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="6">
                            <FormGroup>
                              <label>Marque</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                                onChange={e => setValues({ ...values,Marque : e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>occupation</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="text"
                                onChange={e => setValues({ ...values, occupation: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="6">
                            <FormGroup>
                              <label>numero d'identification materiel</label>
                              <Input
                                defaultValue=""
                                placeholder="xxx"
                                type="number"
                                onChange={e => setValues({ ...values, IdentifiantMat: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>date d'utilisation</label>
                              <Input
                                defaultValue=""
                                placeholder=""
                                type="date"
                                onChange={e => setValues({ ...values,dateutilisation: e.target.value })}
                              />
                            </FormGroup>
                          </Col>
                         
                      </Row>
              </CardBody>
              <CardFooter>
             
                 
                
                <Button className="btn-fill center" color="green" type="submit">
                  Valider la demande et  Generer une attestation de mise a disposition 
                </Button>
              </CardFooter>
            </form>
            </Card>
          </Col>

          {/*materiel*/}

          
        </Row>
      </div >
    </>
  );
}

export default UserProfile;
