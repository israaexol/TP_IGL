
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thListeEtud, tdArray } from "variables/Variables.jsx";
import { Route, Switch } from "react-router-dom";
import routes from "routesEns.js";
import SidebarEns from "components/SidebarEns/SidebarEns.jsx";
import image from "assets/img/sidebar-3.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableGroupEns extends Component {
  constructor(props)
    {
        super(props)
        this.state={
          _notificationSystem: null,
          image: image,
          color: "black",
          hasImage: false,
          fixedClasses: "dropdown show-dropdown open",
          etudiants : [
            
          ],
          groupe : {},
        }
    }
    
    getRoutes = routes => {
      return routes.map((prop, key) => {
        if (prop.layout != "/admin") {
          return (
            <Route
              path={ prop.path}
              render={props => (
                <prop.component
                  {...props}
                  handleClick={this.handleNotificationClick}
                />
              )}
              key={key}
            />
          );
        } else {
          return null;

        }
      });
    };
    getBrandText = path => {
      for (let i = 0; i < routes.length; i++) {
        if (
          this.props.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
      return "Brand";
    };
    handleImageClick = image => {
      this.setState({ image: image });
    };
    handleColorClick = color => {
      this.setState({ color: color });
    };
    handleHasImage = hasImage => {
      this.setState({ hasImage: hasImage });
    };
    handleFixedClick = () => {
      if (this.state.fixedClasses === "dropdown") {
        this.setState({ fixedClasses: "dropdown show-dropdown open" });
      } else {
        this.setState({ fixedClasses: "dropdown" });
      }
    };
    componentDidMount()
    {   
        this._isMounted = true 
            const id_groupe = this.props.match.params.id_groupe
            axios.get(`http://127.0.0.1:8000/api/affichgroupe/${id_groupe}`).then(response=> {
                this.setState({etudiants : response.data.data,})
                })
          
    }

   
    componentDidUpdate(e) {
      if (
        window.innerWidth < 993 &&
        e.history.location.pathname !== e.location.pathname &&
        document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
      }
      if (e.history.action === "PUSH") {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainPanel.scrollTop = 0;
      }
    }
  render() {
    const etudiants=this.state.etudiants
    const id_groupe = this.props.match.params.id_groupe
    return (
      <div className="wrapper">
    <SidebarEns {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          
          <Switch>{this.getRoutes(routes)}</Switch>
          <div className="content">
              <h2 className="nomgrp">Groupe : {id_groupe} </h2>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                content={
                    
                  <Table striped hover>
                      
                    <thead>
                      <tr>
                        {thListeEtud.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                  
                    <tbody> 
                         {etudiants.map(etudiant=> {
                         return(
                         <tr>
                           <td> {etudiant.nom}</td>
                           <td> {etudiant.prenom}</td>
                           <td> {etudiant.matricule}</td>
                          </tr>
                            )
                                
                 } )}
  
                    </tbody>
                  </Table>
                }
              />
            </Col>   
          </Row>
        </Grid>
      </div>
        </div>
      
      </div>
    );
  }
}

export default TableGroupEns;
