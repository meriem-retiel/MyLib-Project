import React, {Component} from 'react';  

/* Import Components */
import CheckBox from './components/CheckBox';  
import Input from './components/Input';  
import TextArea from './components/TextArea';  
import Select from './components/Select';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class FormContainer extends Component {  
  constructor(props) {
    super(props);


    this.state = {
      regle: {
        intitule: '',
        priorite: '',
        niveau: '',
        active:[],
        source: '',
        freq_temps: '',
        req_km: '',
        req_carb: '',
        id_vehicule: [],
        id_pr: [],
        files:[],

      },

      niveauOptions: [1,2,3,4,5],
      prioriteOptions: ['faible', 'moyenne', 'eleve'],
      vehicule_list: ["1", "3", "5"],
      pr_list: ["1", "3", "5"],
      active_option:['true','false']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleIntitule = this.handleIntitule.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleActiveCheckBox = this.handleActiveCheckBox.bind(this)
    this.handleVehiculeCheckBox = this.handleVehiculeCheckBox.bind(this)
    this.handlePrCheckBox = this.handlePrCheckBox.bind(this)

  }
  

  /* This life cycle hook gets executed when the component mounts */
  handleIntitule(e) {
    let value = e.target.value;
    this.setState( prevState => ({ regle : 
         {...prevState.regle, intitule: value
         }
       }))
   }
   handleActiveCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.regle.active.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.regle.active.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.regle.active, newSelection];
    }

      this.setState( prevState => ({ regle:
        {...prevState.regle, active: newSelectionArray }
      })
      )
}

handleVehiculeCheckBox(e) {

  const newSelection = e.target.value;
  let newSelectionArray;

  if(this.state.regle.id_vehicule.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.regle.id_vehicule.filter(s => s !== newSelection)
  } else {
    newSelectionArray = [...this.state.regle.id_vehicule, newSelection];
  }

    this.setState( prevState => ({ regle:
      {...prevState.regle, id_vehicule: newSelectionArray }
    })
    );
}
handlePrCheckBox(e) {

  const newSelection = e.target.value;
  let newSelectionArray;

  if(this.state.regle.id_pr.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.regle.id_pr.filter(s => s !== newSelection)
  } else {
    newSelectionArray = [...this.state.regle.id_pr, newSelection];
  }

    this.setState( prevState => ({ regle:
      {...prevState.regle, id_pr: newSelectionArray }
    })
    )
}


handleActiveCheckBox(e) {

  const newSelection = e.target.value;
  let newSelectionArray;

  if(this.state.regle.active.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.regle.active.filter(s => s !== newSelection)
  } else {
    newSelectionArray = [...this.state.regle.active, newSelection];
  }

    this.setState( prevState => ({ regle:
      {...prevState.regle, active: newSelectionArray }
    })
    )
}
   handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
       return { 
        regle : {
                   ...prevState.regle, [name]: value
                  }
       }
    }, () => console.log(this.state.regle)
    )
}

handleFormSubmit(e) {
  e.preventDefault();
  let userData = this.state.regle;

  fetch("http://example.com", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    response.json().then(data => {
      console.log("Successful" + data);
    });
  });
}
handleClearForm(e) {
  e.preventDefault();
  this.setState({
  regle: {
    intitule: '',
    priorite: '',
    niveau: '',
    active:[],
    source: '',
    freq_temps: '',
    freq_km: '',
    freq_carb: '',
    id_vehicule: [],
    id_pr: [],
    files:[],
    }
  });
};

  render() {
    return (
  
      <Card style={{width:'400px'}} >
      <form onSubmit={this.handleFormSubmit}>
      
      <header style={{paddingLeft:"139px",paddingTop:"10px",paddingBottom:"10px",fontSize: "16px",background: "linear-gradient(180deg, #001330 0%, #0F0344 100%)",color: "#E0E0E0"}}>Ajouter une règle</header>
    

<Input type={'text'} 
               title= {'Intitulé de la règle'} 
               name= {'intitule'}
               value={this.state.regle.intitule} 
               placeholder = {''}
               handleChange = {this.handleInput}
               />
       <div style={{display: "flex"}}>       
      <Select title={'Niveau'}
       name={'niveau'}
       options = { this.state.niveauOptions} 
       value = {this.state.regle.niveau}
       placeholder = {''}
       handleChange = {this.handleInput}
/>
<Select title={'Priorité'}
       name={'priorite'}
       options = { this.state.prioriteOptions} 
       value = {this.state.regle.priorite}
       placeholder = {''}
       handleChange = {this.handleInput}
/>
</div>
<div style={{display: "flex"}}> 

<Select title={'Source'}
       name={'source'}
       options = {['Rex','Guide consructeur']} 
       value = {this.state.regle.source}
       placeholder = {''}
       handleChange = {this.handleInput}
/>

</div>
<div style={{display:"block",paddingLeft:'15px',paddingTop:'15px'}}>
<Typography  style={{color:"#009ACB",fontSize:'14px',fontWeight:'bold'}}>Fréquence</Typography>
</div>
<Input type={'number'}
               title= {'Chaque:'} 
               name= {'freq_temps'}
               value={this.state.regle.freq_temps} 
               placeholder = {'jours'}
               handleChange = {this.handleInput}
               />
               <Input type={'number'}
               title= {'Chaque:'} 
               name= {'freq_km'}
               value={this.state.regle.freq_km} 
               placeholder = {'km'}
               handleChange = {this.handleInput}
               />
               <Input type={'number'}
               title= {'Chaque:'} 
               name= {'freq_carb'}
               value={this.state.regle.freq_carb} 
               placeholder = {'L'}
               handleChange = {this.handleInput}
               />
               
        <div>    
        <div style={{display:"block",paddingLeft:'15px',paddingTop:'15px'}}>
<Typography  style={{color:"#009ACB",fontSize:'14px',fontWeight:'bold'}}>Véhicules</Typography>
</div> 
<CheckBox title={'Ajouter des vehicules'}
       name={'id_vehicule'}
       options = { this.state.vehicule_list} 
       selectedOptions = {this.state.regle.id_vehicule}
       handleChange = {this.handleVehiculeCheckBox}
/>
</div>
<div style={{display:"block",paddingLeft:'15px',paddingTop:'15px'}}>
<Typography  style={{color:"#009ACB",fontSize:'14px',fontWeight:'bold'}}>Pièces de rechange</Typography>
</div>
<div>
<CheckBox title={'Affecter des pièces de rechanges'}
       name={'id_pr'}
       options = { this.state.pr_list }
       selectedOptions = {this.state.regle.id_pr}
       handleChange = {this.handlePrCheckBox}
/></div>
<div style={{paddingTop:'15px',paddingBottom:'15px',paddingLeft:'96px'}} >
         <Button style={{ marginRight:'15px',background:" #009ACB",color:"#E0E0E0",textTransform:'capitalize',fontSize: '16px'}}  variant="contained"  onClick={this.handleFormSubmit}>
Ajouter
</Button>
<Button style={{borderColor:" #009ACB",color:"#009ACB",textTransform:'capitalize',fontSize: '16px'}} variant="outlined" color="primary" onClick={this.handleClearForm}>
Effacer
</Button>
</div>  
        
      </form>
      </Card>
    );
  }
}

export default FormContainer;

