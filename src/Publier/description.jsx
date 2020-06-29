import React from 'react';


import { Grid, Typography } from '@material-ui/core';

import Cropper from './ImgDropAndCrop'
import Input from './Input'
import CheckBox from './CheckBox'
import Select from './Select'
import ChipInput from 'material-ui-chip-input'




export default function Description() {

    return( 
       
       <Grid   container
       direction="row"
       justify="center"
        > 
<Grid item sm={10}>
   <div style={{ display:'contents',}}><textarea name="textarea" style={{backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",
boxSizing: "border-box",borderRadius:" 2px",width:"-webkit-fill-available" ,height:"150px"}}></textarea></div>
  <div style={{paddingTop:"15px"}}>
  <label style={{fontWeight: "700",fontSize: "14px",marginBottom:"5px",display:"block",fontStyle: "normal",color: "#3F3F3F",}} 
 >Lien goodreads</label>
 <Typography style={{ marginBottom:"5px",fontSize: "13px",color: "#757575"}}>Nous vous conseillons de rechercher votre livre sur <a style={{color:'blue'}} href="https://www.goodreads.com/">www.goodreads.com</a> et mettre son lien , cela aidera les acheteurs à avoir plus de détails sur votre livre</Typography>
    <input style={{width:"100%",height:"35px",backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",
boxSizing: "border-box",borderRadius:" 2px",}}
      type={"text"}

    />
  
  </div> 
  <div>
      <CheckBox title={"Etat du livre"} options={['Neuf',"Ancien ou d'occasion"]}/>
      
  </div>
<div>
<Select title={'Langue'}
       name={'langue'}
       options = {['Francais','Anglais','Arabe']} 
       placeholder = {''}
/>
</div>
<div>
  <label style={{marginTop:"15px",fontWeight: "700",fontSize: "14px",marginBottom:"5px",display:"block",fontStyle: "normal",color: "#3F3F3F",}} 
 >Genre</label>
 <Typography style={{ marginBottom:"5px",fontSize: "13px",color: "#757575"}}>Mettez les genres aux quels appartient votre livre, cela aidera d’autres personnes le trouver. (ex: science fiction, policier, historique ...)</Typography>
<ChipInput
style={{backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",paddingTop:"5px",
boxSizing: "border-box",borderRadius:" 2px",}}
disableUnderline={true}
  defaultValue={[]}
  
  fullWidth ={true}
  alwaysShowPlaceholder={false}
/>
</div>
  <div>
      <CheckBox title={"Paramètre"} options={['Désactivier les commentaires sur cette annonce']}/>
      
  </div>


  </Grid>
    </Grid>

    )
};