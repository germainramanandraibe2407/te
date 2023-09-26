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

function UserProfile() {
  const [data, setData] =useState([])
  useEffect(()=>{
        axios.get(`http://${API_IP}:3000/api/AfficheMouvement/Mouvement`)
        .then(res =>setData(res.data))
        .catch(err => console.log(err)); },[])


  return (
    <>
      <div className="content">
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">liste des materiels</CardTitle>
                <button>
                     Exporter en CSV
               </button>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>n°</th>
                      <th>groupe</th>
                      <th>categorie</th>
                      <th>marque</th>  
                      <th>numero identification materiel</th>  
                      <th>Nom et Prenom de l'emprunteur</th>
                      <th>rendu à</th>
                      <th>telephone</th> 
                      <th>localisation</th>
                      <th>date utilisation</th>
                      <th>date retour</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((mouvement,index)=>{
                        return <tr key={index}  >
                                <td>{mouvement.idMateriels}</td>
                                <td>{mouvement.groupe}</td>
                                <td>{mouvement.categorie}</td>
                                <td>{mouvement.marque}</td>
                                <td>{mouvement.numero}</td>
                                <td>{mouvement.preuneurnom +' '+ mouvement.preuneurprenom}</td>
                                <td>{mouvement.depotnom +' '+ mouvement.depotprenom}</td>
                                <td>{mouvement.preuneurtelephone}</td>
                                <td>{mouvement.region}</td>
                                <td>{mouvement.dateutilisation}</td>
                                <td>{mouvement.dateretour}</td>                   
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

export default UserProfile;
