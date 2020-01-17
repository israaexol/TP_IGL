import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Example from './Example'
import Affich from './Affich'
import AbsEtudiants from './AbsEtudiants'
import GroupEns from './GroupEns'
import AffichGroupe from './AffichGroupe'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div >
          <Switch>
            <Route path = '/groupe/:id_groupe' component = {AffichGroupe}/>
            <Route path = '/affichgroupe/:id_groupe' component = {AffichGroupe}/>
            {/* <Route path = '/:id_groupe' component = {AffichGroupe}/> */}
            <Route  path='/affich'  component= {Affich}/>
            <Route  path='/bla'  component= {Example}/>
            <Route path = '/abs' component = {AbsEtudiants}/>
            <Route path = '/groupes' component = {GroupEns}/>
            
            


          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}