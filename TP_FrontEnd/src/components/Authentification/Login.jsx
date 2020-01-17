import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Login.css';
import axios from 'axios';
//import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'validator';

export default class Login extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
          email: "",
          mdp: "",
          pr:"",
          iduser:"",
        };
        localStorage.clear()
        
      }
      handleChange(event) {
        var value = event.target.value;
 
        this.setState({
        fullName: value});}
    handleChangeemail(event) 
    {
      var value = event.target.value;

      this.setState({
      email: value
    });
    }
    handleChangemdp(event) 
    {
      var value = event.target.value;

      this.setState({
      mdp : value
    });
    }
    
     
      handleSubmitForm(event) {
        event.preventDefault()
        const email = this.state.email
        const mdp = this.state.mdp
        axios.get(`http://127.0.0.1:8000/api/getcompte/${email}/${mdp}`).then(
          response=> {
          localStorage.clear()
          localStorage.setItem('iduser',response.data.iduser)
          localStorage.setItem('pr',response.data.privilege)
          if(localStorage.getItem('pr')=='0')
          {

            window.location.href = "/mesabsences"
          }
          else
          {
            window.location.href = "/mesgroupes"
          }
          })
          
         
          
       
        

      }
     
      
     
      render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <Link className="navbar-brand" to={"/"}>MyScholarApp</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                 <div className="auth-inner">

          <form>
          <h3 >Se connecter</h3> 
            <div className="form-group">
                <label>Adresse E-mail</label>
                <input id="mail" type="email" className="form-control" name = "email" placeholder="E-mail" value={this.state.email} 
                onChange={event => this.handleChangeemail(event)}/>
            </div> 
                 <div className="form-group">
                     <label>Mot de passe</label>
                     <input id="mdp" type="password" className="form-control" name = "mdp" placeholder="Mot de passe" value={this.state.mdp}
                     onChange={event => this.handleChangemdp(event)} />
                 </div>


             
            <button id="se-connecter" onClick={event => this.handleSubmitForm(event)} class="btn btn-primary btn-block">connexion</button>   
          </form>
          </div>
          </div>
          </div>

                 
                 
            //     <h3>Se connecter</h3>

            //     <div className="form-group">
            //         <label>Adresse E-mail</label>
            //         <input id="mail" type="email" className="form-control" placeholder="E-mail" />
            //     </div>

            //     <div className="form-group">
            //         <label>Mot de passe</label>
            //         <input id="mdp" type="password" className="form-control" placeholder="Mot de passe" />
            //     </div>

            //     <div className="form-group">
            //         <div className="custom-control custom-checkbox">
            //             <input type="checkbox" className="custom-control-input" id="customCheck1" />
            //             <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
            //         </div>
            //     </div>
            //     <a id="se-connecter" href="/mesabsences" class="btn btn-primary btn-block" role="button">Se connecter</a>
            //     <p className="forgot-password text-right">
            //         Mot de passe <a href="#">oublié?</a>
            //     </p>
            // </form>
            // </div>
            // </div>
            // </div>
           
        );
      }
}

// export default class Login extends Component {
//     constructor(props) {
//         super(props);
     
//         this.state = {
//           email: "",
//           mdp:""
//         };
//       }
//     handleConnexion(e)
//     {
//         console.log('handler\nnnnnnnnn\n\n\n hhhhhhh')

//     }
//     handleChange(event) {
//         var value = event.target.value;
     
//         this.setState({
//           email: value.email,
//           mdp: value.mdp
//         });
//       }
    

//     render() {
//         return (
//             <div className="App">
//                 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                     <div className="container">
//                     <Link className="navbar-brand" to={"/"}>MyScholarApp</Link>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                     </div>
//                     </div>
//                 </nav>
//                 <div className="auth-wrapper">
//                  <div className="auth-inner">
                 
                 
//                  <form onSubmit={event => this.handleSubmitForm(event)}>
//                 <h3 >Se connecter</h3>

//                 <div className="form-group">
//                     <label>Adresse E-mail</label>
//                     <input type="email" className="form-control" id = "email" placeholder="E-mail" value={this.state.email}
//             onChange={event => this.handleChange(event)} />
//                 </div>

//                 <div className="form-group">
//                     <label>Mot de passe</label>
//                     <input type="password" className="form-control" id = "mdp" placeholder="Mot de passe" value={this.state.mdp}
//             onChange={event => this.handleChange(event)}/>
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
//                     </div>
//                 </div>
//                 <a href="/mesabsences" class="btn btn-primary btn-block" role="button" >Se connecter</a>
//                 <input type="submit" value="Submit" />
//                 <p className="forgot-password text-right">
//                     Mot de passe <a href="#">oublié?</a>
//                 </p>
//             </form>
//             </div>
//             </div>
//             </div>
           
//         );
//     }
// }
