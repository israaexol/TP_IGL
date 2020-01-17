import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Affich extends Component {

    constructor()
    {
        super()
        this.state={
            etudiants : []
        }
    }

componentDidMount()
{

    axios.get('api/affich').then(response=> {
        this.setState({etudiants : response.data.data,})
    }
        )
}

    render() {

        const etudiants=this.state.etudiants
        return (

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Etudiants</div>

                                {etudiants.map(etudiant=>(
                                    <div key={etudiant.id} className="card-body">{etudiant.nom} {etudiant.prenom}</div>
                                ))}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
if (document.getElementById('affich')) {
    ReactDOM.render(<Affich />, document.getElementById('affich'));
}


