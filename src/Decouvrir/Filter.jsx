import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Rating} from '@material-ui/lab';
import{Typography, TextField} from '@material-ui/core';
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    width:"max-content"
    
  },
  formControl: {
    margin: theme.spacing(3),
  },
  label: {
    display:'block',
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "13px",
    color: "#3F3F3F",
  },
  slabel: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "13px",
    color: "#757575",
  },
  input: {
   width:"123px",
    background: "#D1D1D1",
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: "2px",
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { tous1,Neuf,Tous,Ancien_occasion,Tous_mes_favoris,Manga, Fiction, crime,Mistère,Paranormale,Romance,science_fiction,tous_genres } = state;
  const error = [tous1,Neuf,Tous,Ancien_occasion,Tous_mes_favoris,Manga ,Fiction, crime,Mistère,Paranormale,Romance,science_fiction,tous_genres].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl stcomponent="fieldset" className={classes.formControl}>
       <Typography style={{fontSize:'14px',color:"#9E9E9E",fontWeight: "normal"}}>Afficher les résultats par</Typography>
       <div  style={{marginLeft:"15px"}}>
       <div >
       <label1 className={classes.label}>
               Ville
               </label1>
                <input className={classes.input} type="text" name="Ville" size="11" margin="2px" />
                </div >
                <div >
        <label1 className={classes.label} >
    
               Langue
               </label1>

               <select className={classes.input} >
                <option value="Français">Français</option>
                <option value="Anglais">Anglais</option>
               <option selected value="Français">Français</option>
               <option value="Arabe">Arabe</option>
               <option value="Allmenad">Allmend</option>
               <option value="Espagnole">Espagnole</option>
               </select>
               </div>
             
              
               
        <label1 className={classes.label}> 
               Genre de livres         
        </label1>
        <label2 className={classes.slabel}> 
               Favoris        
        </label2>
        </div>
        <FormGroup style={{fontSize:"12px"}}> 
        <div  style={{marginLeft:"15px"}}>
        <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Tous mes favoris</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Crime</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Fiction</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Manga</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Romance</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Paranomal</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Science fiction</label></div>

 <label2 className={classes.slabel}>  Autres genre      </label2>
 <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
 
 
  <label for="vehicle1"> Tous les genres</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Crime</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Fiction</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Manga</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Romance</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Paranomal</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Science fiction</label></div>
  </div>
        <label1 style={{fontSize:'14px',color:"#9E9E9E",fontWeight: "normal"}} > 
               Afficher par   
        </label1>
        <div  style={{marginLeft:"15px"}}>
        <label2 className={classes.label}> 
               Etat    
        </label2>
        
      
  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Tout</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Neuf</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Ancien ou d'occasion</label></div>
          <label2 className={classes.label} > 
               Evaluation du vendeur   
        </label2>
        <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Tous les vendeurs</label></div>

  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">  
  <Rating  size="small" name="read-only" value={3} readOnly />
  </label></div>
  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">  
  <Rating size="small" name="read-only" value={4} readOnly  />
  </label></div>
  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">  
  <Rating size="small"  name="read-only" value={5} readOnly  />
  </label></div>
        
  </div>

        
         
        </FormGroup>
      </FormControl>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
      </FormControl>
      
    </div>
    
  );
}
