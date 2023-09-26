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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import  { useEffect, useState } from "react";
import API_IP from "./config";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import Swal from "sweetalert2";

function Dashboard(props) {
  const [values, setValues] = useState({
  
    fam: '',
   
    reg: '',

  })

  const [data, setData] =useState([])
  useEffect(()=>{
        axios.get(`http://${API_IP}:3000/api/materiels/materiels`)
        .then(res =>setData(res.data))
        .catch(err => console.log(err)); },[])
  Swal.fire({
    title: 'voir les ressources disponible',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  
  const [data2, setData2] =useState([])
  useEffect(()=>{
        axios.get(`http://${API_IP}:3000/api/materiels/nombremateriels`)
        .then(res =>setData2(res.data2)
                   
        )
        .catch(err => console.log(err)); },[])

  const [bigChartData, setbigChartData] = React.useState("data");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://${API_IP}:3000/api/materiels/materiels/tri`, values)
      
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
          <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Materiel disponible</h5>
                <h5>{console.log(data2)}</h5>
       
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast" style={{color:'#ec3429'}} />{" "}
                  
                  
               
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
            
          </Col>
        </Row>
        
        <Row>
        
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Materiels</CardTitle>
                <div>
                <form onLoad={()=>alert(`${values.reg}`)}>
                        <label>TRIER PAR</label><br/>{/* 
                             <select  onChange={e => setValues({ ...values,gro: e.target.value })} >
                             <option  selected="selected" value="">--Groupe--</option>
                              <option value="C">Radio et Télécommunication</option>
                              <option value="E">Engineering</option>
                              <option value="I">Information et technologie </option>
                            </select>
                             </select>
                            <select onChange={e => setValues({ ...values,sta: e.target.value })} >
                              <option  selected="selected" value="">--Status--</option>
                              <option value="libre">libre</option>
                              <option value="utilisé">utilisé</option>
                            </select>
                            <select  onChange={e => setValues({ ...values,eta: e.target.value })} >
                              <option  selected="selected" value="">--etat--</option>
                              <option value="actif">actif</option>
                              <option value="en panne">en panne</option>
                            </select>
                            <button className="btn btn-default" type="submit">
                                 Appliquer
                            </button>
                            */}
                            <select    onChange={e => setValues({ ...values,fam: e.target.value })} >
                              <option  selected="selected" value="">--Famille--</option>
                              <option value="ORDINATEUR">ORDINATEUR</option>
                              <option value="TELECOMMUNICATION">TELECOMMUNICATION</option>
                              <option value="RESEAUX">RESEAUX</option>
                              <option value="ACCESSOIRE">ACCESSOIRE</option>
                              <option value="LOGICIEL">LOGICIEL</option>
                              <option value="AUDIOVISUEL">AUDIOVISUEL</option>
                              <option value="CONSOMMABLE">CONSOMMABLE</option>
                            </select>
                            <select  onChange={e => setValues({ ...values,reg: e.target.value })} >
                               <option  selected="selected" value="">--Localisation--</option>
                              <option value="RALM">Alaotra Mangoro</option>
                              <option value="RAMM">Amoron'i Mania</option>
                              <option value="RANA">Analamanga</option>
                              <option value="RANJ">Analanjorofo</option>
                              <option value="RAND">Androy</option>
                              <option value="RANO">Anosy</option>
                              <option value="RATN">Atsimo Andrefana</option>
                              <option value="RATA">Atsimo Atsinanana</option>
                              <option value="RATS">Atsinanana</option>
                              <option value="RBET">Betsiboka</option>
                              <option value="RBOE">Boeny</option>
                              <option value="RBON">Bongolava</option>
                              <option value="RDIA">Diana</option>
                              <option value="RIHO">Ihorombe</option>
                              <option value="RITA">Itasy</option>
                              <option value="RHAM">Mahatsiatra Ambony</option>
                              <option value="RMEL">Melaky</option>
                              <option value="RMEN">Menabe</option>
                              <option value="RSAV">Sava</option>
                              <option value="RSOF">SOFIA</option>
                              <option value="RVAK">Vakinakaratra</option>
                              <option value="VATO">Vatovavy</option>
                              <option value="FITO">FITOVINANY</option>
                            </select>  
                           
                    </form>       
                </div>
                <button className="btn btn-default" type="submit">
                    Appliquer
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
                      <th>état</th>
                      <th>date inventaire</th>
                      <th>statut</th>
                      <th>consommable</th>
                      <th>peremption consommable</th>
                      <th>localisation</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((materiels,index)=>{
                        if   (((`${values.fam}`==="") && (`${values.reg}`==="")) && (`${materiels.groupe}`!=="null"))
                                {
                                    return <tr key={index} >
                                              <td>{materiels.idMateriels}</td>
                                              <td>{materiels.groupe}</td>
                                              <td>{materiels.categorie}</td>
                                              
                                              <td>{materiels.marque}</td>
                                              <td>{materiels.etat}</td>
                                              <td>{materiels.dateinventaire}</td>
                                              <td>{materiels.statuse}</td>
                                              <td>{materiels.nomconsommable}
                                              </td>
                                              <td>{materiels.dateremplacement}</td>
                                              <td>{materiels.region}</td>
                                              <td><Button>voir</Button>
                                            </td>                          
                                          </tr> 
                                }
                         
                               
                           if ((`${values.fam}`===`${materiels.famille}`) && (`${materiels.famille}`!=="null")  && (`${materiels.region}`!=="null")){
                                                
                                  return <tr key={index} >
                                                  <td>{materiels.idMateriels}</td>
                                                  <td>{materiels.groupe}</td>
                                                  <td>{materiels.categorie}</td>
                                                  
                                                  <td>{materiels.marque}</td>
                                                  <td>{materiels.etat}</td>
                                                  <td>{materiels.dateinventaire}</td>
                                                  <td>{materiels.statuse}</td>
                                                  <td>{materiels.nomconsommable}
                                                  </td>
                                                  <td>{materiels.dateremplacement}</td>
                                                  <td>{materiels.region}</td>
                                                  <td><Button>voir</Button>
                                                </td>                          
                                              </tr> 
            
                        
                                           } 

                
                          if ((`${values.reg}`===`${materiels.region}`) && (`${materiels.region}`!=="null") && !(`${values.fam}`===`${materiels.famille}`)){
                                                
                                              return <tr key={index} >
                                                              <td>{materiels.idMateriels}</td>
                                                              <td>{materiels.groupe}</td>
                                                              <td>{materiels.categorie}</td>
                                                              
                                                              <td>{materiels.marque}</td>
                                                              <td>{materiels.etat}</td>
                                                              <td>{materiels.dateinventaire}</td>
                                                              <td>{materiels.statuse}</td>
                                                              <td>{materiels.nomconsommable}
                                                              </td>
                                                              <td>{materiels.dateremplacement}</td>
                                                              <td>{materiels.region}</td>
                                                              <td><Button>voir</Button>
                                                            </td>                          
                                                          </tr> 
                        
                                    
                                                       }
                          
                          if (((`${values.fam}`===`${materiels.famille}`) && (`${materiels.famille}`!=="null")  && (`${materiels.region}`!=="null"))&&((`${values.reg}`===`${materiels.region}`) && (`${materiels.region}`!=="null") && !(`${values.fam}`===`${materiels.famille}`)))
                          {
                            return <tr key={index} >
                            <td>{materiels.idMateriels}</td>
                            <td>{materiels.groupe}</td>
                            <td>{materiels.categorie}</td>
                            
                            <td>{materiels.marque}</td>
                            <td>{materiels.etat}</td>
                            <td>{materiels.dateinventaire}</td>
                            <td>{materiels.statuse}</td>
                            <td>{materiels.nomconsommable}
                            </td>
                            <td>{materiels.dateremplacement}</td>
                            <td>{materiels.region}</td>
                            <td><Button>voir</Button>
                          </td>                          
                        </tr> 

  
                     }
                    }                             
                                                
                                                
                                                                           
                    )}
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

export default Dashboard;
