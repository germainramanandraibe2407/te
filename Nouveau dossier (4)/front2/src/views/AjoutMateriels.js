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
import { Aos } from "aos";
function AjoutMateriels() {

  const [values, setValues] = useState({
    groupe: '',
    famille: '',
    categorie: '',
    marque: '',
    status: '',
    etat: '',
    fournisseur: '',
    prixmateriel: '',
    dateinventaire: '',
    numerofacture: '',
    region: '',
    nomconsommable: '',
    numero:''

  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://${API_IP}:3000/api/ajoutmateriel`, values)
      .then(
        res => console.log(res));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'materiel ajouté avec succes',
          showConfirmButton: false,
          timer: 150000
        })
        
        navigate('../AfficheMateriels', { replace: true })
        window.location.reload();
  }

  return (
    <>

      <div className="content">

        <Row>
          <Col md="12">
            <Card>
              <CardHeader>

                <h5 className="title">Ajout de nouveau materiel</h5>
               
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardBody>


                  <label>famille</label><br />
                  <select onChange={e => setValues({ ...values, famille: e.target.value })}>
                    <option value="ORDINATEUR">ORDINATEUR</option>
                    <option value="TELECOMMUNICATION">TELECOMMUNICATION</option>
                    <option selected value="RESEAUX">RESEAUX</option>
                    <option value="ACCESSOIRE">ACCESSOIRE</option>
                    <option value="LOGICIEL">LOGICIEL</option>
                    <option selected value="AUDIOVISUEL">AUDIOVISUEL</option>
                    <option value="CONSOMMABLE">CONSOMMABLE</option>
                  </select>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>materiel</label>
                        <Input
                          defaultValue=""
                          placeholder="categorie(écran,...)"
                          type="text"
                          onChange={e => setValues({ ...values, categorie: e.target.value })}

                        />
                      </FormGroup>
                      <label>numero</label>
                      <Input
                        defaultValue="null"
                        placeholder="xxx"
                        type="number"
                        onChange={e => setValues({ ...values, numero: e.target.value })}
                      />
                      <>
                        <label>Groupe</label>
                            {/* The first radio button is made non-clickable by using the disabled attribute */}
                            <label><input type='radio' name="groupe" value="C" onChange={e => setValues({ ...values, groupe: e.target.value })}></input>radio et télécommunication</label> <br />
                            <label><input type='radio' name="groupe" value="I" onChange={e => setValues({ ...values, groupe: e.target.value })}></input>Enginneering</label> <br />
                            <label><input type='radio' name="groupe" value="E" onChange={e => setValues({ ...values, groupe: e.target.value })}></input>information et technologie </label> <br />
                        <br />
                      </>



                      <label>marque</label>
                      <Input
                        defaultValue=""
                        placeholder="sony,hp,..."
                        type="text"
                        onChange={e => setValues({ ...values, marque: e.target.value })}
                      />
                      <label>date inventaire</label>
                      <Input
                        defaultValue=""
                        placeholder=""
                        type="date"
                        onChange={e => setValues({ ...values, dateinventaire: e.target.value })}
                      />
                      <label>status</label>
                      <Input
                        defaultValue=""
                        placeholder="utilisé"
                        type="text"
                        onChange={e => setValues({ ...values, status: e.target.value })}
                      />
                      <label>nom consommable</label>
                      <Input
                        defaultValue=""
                        placeholder="encre,..."
                        type="text"
                        onChange={e => setValues({ ...values, nomconsommable: e.target.value })}
                      />

                      <label>fournisseur</label>
                      <Input
                        defaultValue=""
                        placeholder="don chine,achat,..."
                        type="text"
                        onChange={e => setValues({ ...values, fournisseur: e.target.value })}
                      />

                      <label>prix du materiel</label>
                      <Input
                        defaultValue="0"
                        placeholder="en ariary"
                        type="number"
                        onChange={e => setValues({ ...values, prixmateriel: e.target.value })}
                      />ar

                      <label>numero bon de livraison</label>
                      <Input
                        defaultValue="null"
                        placeholder="categorie(écran,...)"
                        type="number"
                        onChange={e => setValues({ ...values, numerofacture: e.target.value })}
                      />


                    </Col>
                  </Row>

                      <label>état</label><br />
                      <select onChange={e => setValues({ ...values, etat: e.target.value })}>
                        <option selected value="actif">actif</option>
                        <option value="en panne">en panne</option>
                      </select>

                      <label>localisation</label><br />
                      <select onChange={e => setValues({ ...values, region: e.target.value })}>
                        <option value="RALM">Alaotra Mangoro</option>
                        <option value="RAMM">Amoron'i Mania</option>
                        <option selected value="ANALAMANGA">Analamanga</option>
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

                </CardBody>
                <CardFooter>
                  <button className="btn btn-default" type="submit">
                    enregistrer
                  </button>

                </CardFooter>
              </form>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default AjoutMateriels;
