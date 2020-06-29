import React from 'react';

import Carousel from './carousel'
import Dots from './indicator-dots'
import Buttons from './buttons'

import {Button, Typography} from '@material-ui/core'




class Start extends React.Component {
 



  constructor () {
    super()
    this.state = {
      axis: 'x'
    }
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }
  render () {
    return (
      <div style={{height: '100%',backgroundColor:"#E5E5E5"}}>
        {/*
        <header>
          <span className={this.state.axis === 'x' ? 'axis current' : 'axis'}
            onClick={this.setAxis('x')}>horizontal</span>
          <span className={this.state.axis === 'y' ? 'axis current' : 'axis'}
            onClick={this.setAxis('y')}>vertical</span>
        </header> */}
        
        <Carousel loop auto axis={this.state.axis} widgets={[Dots, Buttons]} className="custom-class">
        <div style={{backgroundColor: 'red', height: '100%'}}>
          <div style={{margin :'auto',width :'50%', marginTop: '125px', justifyContent:'center', textAlign :'center' }}>
  
           <div>
           <Typography variant= 'h4' style={{ fontFamily: "Roboto Slab", fontStyle: "normal", fontWeight: "normal"}} >Passionés de livres ?</Typography>
           </div>
           <div style={{marginTop :"25px"}}>
           <Typography variant= 'h6' style={{fontFamily: "Roboto Slab", fontStyle: "normal", fontWeight: 300}} > Avec MALIB trouvez rapidement les livres que vous aimez, découvrez ce 
            que les vendeurs près  de chez vous proposent et echangez avec d'autres Passionnés de lecture.</Typography>
           </div>
           <div style={{marginTop :"50px"}}>
           <Button   variant='outlined' style={{fontFamily: "Roboto", textTransform: 'capitalize' , color :"white", backgroundColor: "black" , fontStyle: "normal", fontWeight: "bold", margin:'20px' , width :'125Px', height: '40px'}} >S'inscrire</Button>
           <Button   style={{ fontFamily: "Roboto",textTransform: 'capitalize',  fontStyle: "bold", fontWeight: "bold",  borderColor: 'black',   border: '2px solid'  , width :'150Px', height: '40px'}} >Se connecter</Button>
           </div>
           </div>
        </div>












          
      <div style={{backgroundColor: 'red', height: '100%'}}>
        <div style={{margin :'auto',width :'50%', marginTop: '125px', justifyContent:'center', textAlign :'center' }} >
         <div  >
          <Typography variant= 'h4' style={{ fontFamily: "Roboto Slab", fontStyle: "normal", fontWeight: "normal"}} >Des livres que vous n'utilisez plus?</Typography>
        </div>
        <div style={{marginTop :"25px"}} >
          <Typography variant= 'h6' style={{fontFamily: "Roboto Slab", fontStyle: "normal", fontWeight: 300}}>Qu'attendez vous? Vendez vos livres et publiez votre annonce sur MALIB pour en faire
          profiter d'autres personnes.</Typography>
        </div>
        <div style={{marginTop :"50px"}}>
          <Button variant='outlined' style={{ fontFamily: "Roboto", textTransform: 'capitalize' , color :"white", backgroundColor: "black" , fontStyle: "normal", fontWeight: "bold", margin:'20px' , width :'150Px', height: '40px'}} >S'inscrire</Button>
          
          <Button style={{fontFamily: "Roboto", textTransform: 'capitalize' , fontStyle: "normal", fontWeight: "bold" ,  borderColor: 'black',   border: '2px solid' , width :'150Px', height: '40px'}} >Se connecter</Button>
        </div>
        </div>
      </div>


         {/* <p  style={{backgroundColor: 'white', height: '100%'}}>test1</p>
         <p style={{backgroundColor: 'royalblue', height: '100%'}}>FRAME 2</p>
         <p style={{backgroundColor: 'orchid', height: '100%'}}>FRAME 3</p>'*/}
        </Carousel>
     
      </div>
    )
  }
}



export default Start;
