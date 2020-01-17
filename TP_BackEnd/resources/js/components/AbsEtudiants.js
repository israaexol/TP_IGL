import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class AbsEtudiant extends Component {

    constructor()
    {
        super()
        this.state={
            absences : [],
            nom : []
        }
    }

componentDidMount()
{

    axios.get('api/abs').then(response=> {
        this.setState({absences: response.data.data,})
    }
        )
    axios.get('api/nom').then(response=> {
        this.setState({nom: response.data.data,})
        }
    )
}

    render() {

        const absences=this.state.absences
        const nom = this.state.nom
        console.log(JSON.stringify(nom))
        return (

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Mes absences 
                            <div>
                                {nom.map(nom=>(
                                    <div  className="card-body">{nom.nometudiant} {nom.prenometudiant} </div>
                                ))}
                            </div> 
                            </div>

                                {absences.map(absence=>(
                                    <div key={absence.id} className="card-body">{absence.module} {absence.date}</div>
                                ))}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


