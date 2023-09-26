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

// reactstrap components

import {   Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button, } from "reactstrap";
import Swal from "sweetalert2";
import API_IP from "./config";
import { useNavigate } from "react-router-dom";
import Aos from "aos";


function Changer (){
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}  

function AfficheMateriels() {
  
  const [values, setValues] = useState({
  
    fam: '',
   
    reg: '',

  })
  const navigate = useNavigate();
  let [data, setData] =useState([]);
  function affiche (materiels,index){
    return <tr key={index} >
                                     <td>{materiels.idMateriels} </td>
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
   
  useEffect(()=>{
          axios.get(`http://${API_IP}:3000/api/materiels/materiels`)
          .then(res =>setData(res.data))
          .catch(err => console.log(err)); },[])   
          
        {/*const [data, setData] =useState([])
  useEffect(()=>{
        axios.get(`http://${API_IP}:3000/api/materiels/materiels/tri`)
        .then(res =>setData(res.data))
        .catch(err => console.log(err)); },[])
   */}
  
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.gro)
  }
          

  return (
    <>
      <div className="content">
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">liste des materiels</CardTitle>
                <button >imprimer</button>
                </CardHeader>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody >
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

export default AfficheMateriels;
