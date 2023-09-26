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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

// reactstrap components
import {   Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button, } from "reactstrap";
import API_IP from "./config";

function Tables() {

  const [data, setData] =useState([])
  useEffect(()=>{
        axios.get(`http://${API_IP}:3000/api/AfficheUser`)
        .then(res =>setData(res.data))
        .catch(err => console.log(err)); },[])


  return (
    <>
      <div className="content">
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">liste des utilisateurs</CardTitle>
                <button>imprimer</button>
                </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>id</th>
                      <th>nom</th>
                      <th>prenom</th>
                      <th>occupation</th>
                      <th>localisation</th>
                      <th>telephone</th>
                
                    </tr>
                  </thead>
                  <tbody >
                    {data.map((utilisateurs,index)=>{
                        return <tr key={index} >
                                    <td>{utilisateurs.idutilisateurs} </td>
                                    <td>{utilisateurs.nomutilisateur}</td>
                                    <td>{utilisateurs.prenomutilisateur}</td>
                                    <td>{utilisateurs.occupation}</td>
                                    <td>{utilisateurs.region}</td>
                                    <td>{utilisateurs.telephone}</td>
                                    
                                    <td><Button>voir</Button>
                                  </td>                          
                              </tr>
                    })

                    }
                     
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>

      </div>
    </>
  );
}

export default Tables;
