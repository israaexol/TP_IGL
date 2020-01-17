import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

export default class AffichGroupe extends Component {

    constructor()
    {
        super()
        this.state={
            etudiants : [],
            groupe : {},
        }
    }

componentDidMount()
{   
    this._isMounted = true
    console.log('on mount')    
        const id_groupe = this.props.match.params.id_groupe
        axios.get(`/api/affichgroupe/${id_groupe}`).then(response=> 
            {
                this.setState({
                    etudiants : response.data.data,
                    })
            })
        console.log(id_groupe)
        console.log('on essaye')
        
        // etudiants.map(etudiant=>(
        //     console.log(etudiant.id)
        // ))
}

    render() {
        
       

        return (

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Etudiants </div>
                            {/* {etudiants.map(etudiant=>(
                                    <div key={etudiant.id} className="card-body">{etudiant.nom} {etudiant.prenom}</div>
                                ))} */}
                                

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


