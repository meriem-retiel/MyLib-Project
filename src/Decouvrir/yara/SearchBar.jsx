import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    width: 600,
    height:'40px',
    border: '1px solid',
    borderColor:'#D3D3D3',
    background: 'linear-gradient(90deg, #FFFFFF 91%, #000000 9%)',
    margin :'15px',
  },
  checkbox:{
marginRight:"26px",

fontWeight: '300',
fontSize:' 14px',
lineHeight: '16px',
color: '#757575',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color:'#898989',
    fontSize: '13px',
    padding:'25px'

  },
  iconButton: {
    padding: 12,
    color: 'white',
    size:'sizeSmall',

  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Rechercher livre , auteur , vendeur ..."
        inputProps={{ 'aria-label': 'Effectuez une recherche' }}
      />
      <IconButton   borderRight={0} className={classes.iconButton} aria-label="Recherche">
        <SearchIcon />
      </IconButton>
    </div>
     <div style={{marginLeft:"15px" , marginBottom:'30px'}} >
         <span className={classes.checkbox}>
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">Tous </label>
  </span>

  <span className={classes.checkbox}><input type="checkbox" id="vehicle1" name="vehicle1" value={true}/> 
  <label for="vehicle1">Titre</label>
  </span>

  <span className={classes.checkbox}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">Auteur </label>
  </span>

  <span className={classes.checkbox}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1"> Genre</label>
  </span>

  <span className={classes.checkbox}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
  <label for="vehicle1">Vendeur </label>
  </span>
    
   </div>
   </div>
  );
}