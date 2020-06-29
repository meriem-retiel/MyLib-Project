import React from 'react';
import './App.css';
import Header from "./Commain/Header"
import Decouvrir from './Decouvrir/Decouvrir';
import Actualite from './Actualite/Actualite';
import Accueil from './Accueil/Accueil';
import LivreRecherche from './LivreRech/LivreRecherche';
import Content from "./Publier/Content"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Rating from "@material-ui/lab/Rating";
import Checkbox from "@material-ui/core/Checkbox";
import MyForm from "./MyForm";
import FormContainer from './FormContainer';
import Profile from "./Profile/Profile"
import Mail from './Mail';
import SafaaProfile from './SafaaProfile/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    
    <Router>

      <switch>
    
      <Route path="/" exact component={Accueil}/>
      <Route path="/Actualite" component={Actualite}/>
      <Route path="/Decouvrir" component={Decouvrir}/>
      <Route path="/Annonce-Recherche" component={LivreRecherche}/>
      <Route path="/Publication" component={Content}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/mail" component={Mail}/>
      <Route path="/Safaa" component={SafaaProfile}/>
      </switch>
    </Router>

  );
}

export default App;
