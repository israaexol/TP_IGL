/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thEns, thArrayEtud, tdArray } from "variables/Variables.jsx";
import { Route, Switch } from "react-router-dom";
import routes from "routesEns.js";
import SidebarEns from "components/SidebarEns/SidebarEns.jsx";
import image from "assets/img/sidebar-3.jpg";
import { Link } from 'react-router-dom';
import './TableList.css';
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
          groupes : [
          //   {
          //   niveau: 1,
          //   groupe: 1
          // },
          // {
          // niveau: 1,
          //   groupe: 2
          // }
        ],
          nomens :[]
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
        const iduser = localStorage.getItem('iduser')
        axios.get(`http://127.0.0.1:8000/api/groupes/${iduser}`).then(response=> {
            this.setState({groupes : response.data.data,})
        })
        axios.get(`http://127.0.0.1:8000/api/nomprof/${iduser}`).then(response=> {
            this.setState({nomens: response.data.data,})
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
    const groupes=this.state.groupes
    const nomens = this.state.nomens
    return (
      <div className="wrapper">
    <SidebarEns {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          
          <Switch>{this.getRoutes(routes)}</Switch>
          <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Mes groupes"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thEns.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                  
                    <tbody> 
                         
                            
                             {groupes.map(groupe=> {
                               return(
                                 <tr>
                              <td> {groupe.niveau}</td>
                                <td><Link  className="liengrp" to={`/mesgroupes/${groupe.groupe}`} activeClassName="active">  
                                {groupe.groupe} 
                              </Link></td>
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
