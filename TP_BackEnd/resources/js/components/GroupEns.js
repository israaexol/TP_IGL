import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class GroupEns extends Component {

    constructor()
    {
        super()
        this.state={
            groupes : [],
            nomens :[]
        }
    }

componentDidMount()
{

    axios.get('api/groupes').then(response=> {
        this.setState({groupes : response.data.data,})
    })
    axios.get('api/nomprof').then(response=> {
        this.setState({nomens: response.data.data,})
        })
    
}

    render() {

        const groupes=this.state.groupes
        const nomens = this.state.nomens
        
        return (
            
            <div className="container">
                <div className="card-header" >
                                {nomens.map(nom=>(
                                    <div> {nom.nomens} {nom.prenomens} </div>
                                ))}
                            </div> 
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Mes Groupes</div>
                            
                            
                            {groupes.map(groupe=>(
                                    <Link to={`/groupe/${groupe.groupe}`} activeClassName="active">  
                                    niveau {groupe.niveau} groupe {groupe.groupe}
                                </Link>
                                ))}
                                
                                
                                


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('groupeens')) {
    ReactDOM.render(<App />, document.getElementById('groupeens'));
  }