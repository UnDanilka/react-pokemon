import React from 'react';
import './App.css';
import Home from '../../pages/home/Home';
import ListCharacter from '../../pages/listCharacter/ListCharacter';
import Contacts from '../../pages/contacts/Contacts';
import Header from '../header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonDetails from '../pokemonDetails/PokemonDetails';

function App() {
  return (
    <div className="App">
        <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'
                        component={Home}/>
                    <Route exact path='/listCharacter'
                        component={ListCharacter}/>
                    <Route exact path='/contacts'
                        component={Contacts}/>
                    <Route path='/:id' component={PokemonDetails}/>    
                </Switch>
            </Router>
    </div>
  );
}

export default App;
