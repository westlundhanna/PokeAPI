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
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonList /> 
          </Route>
          <Route exact path="/:pokemonName">
            <PokemonDetails  />
          </Route>
        </Switch>
      </Router>
    </div>

  )

}
export default App
