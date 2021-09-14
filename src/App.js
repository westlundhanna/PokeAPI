import React from 'react';
import PokemonList from './components/PokemonList';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import PokemonDetails from './components/PokemonDetails';
import './App.css';

function App() {
 
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonList /> 
          </Route>
          <Route path="/:pokemonName" component={PokemonDetails}></Route>
        </Switch>
      </Router>
  )

}
export default App
