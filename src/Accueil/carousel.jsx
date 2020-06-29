import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from "@material-ui/core/Grid"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
  
    Width: "100vh",
    height: "100vh",
    flexGrow: 1,

  
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  content: {

   display:"flex",
   alignItems:"center",
   marginBottom:"30px",
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',
  },
  title: {
    fontFamily: "Roboto Slab",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize: "35px",
    lineHeight: "46px",
    textAlign: "center"
   
   },
   text: {
   marginTop:"25px",
    fontFamily: "Roboto Slab",
    fontStyle: "normal",
    fontWeight:"300",
    fontSize: "21px",
    lineHeight: "26px",
    textAlign: "center"
   
   },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
     
      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
          <div style={{display: "flex",
            justifyContent: "center",marginTop:"13%"}}>
           <div className={classes.content} >
           <Typography  className={classes.title}  >Passionés de livres ?</Typography>
              <Typography className={classes.text} > Avec MALIB trouvez rapidement les livres que vous aimez, découvrez ce 
               que les vendeurs près  de chez vous proposent et echangez avec d'autres Passionnés de lecture.</Typography>
      
           </div>
          </div>
          <div style={{display: "flex",
            justifyContent: "center",marginTop:"13%"}}>
           <div className={classes.content} >
           <Typography  className={classes.title}  >Des livres que vous n’utilisez plus ?</Typography>
              <Typography className={classes.text} > Vendez vos livres et publiez votre annonce sur Malib pour en faire profitez d’autres pesonnes </Typography>
      
           </div>
          </div>

      </AutoPlaySwipeableViews>
      <Grid  style={{display: "flex",
            justifyContent: "center"}} >
        <Grid style={{marginTop:"15px", marginLeft:'15px'}} item><Button variant="contained" color="primary" disableElevation style={{textTransform:'lowercase'}}>
  Se connecter
</Button></Grid>
        <Grid style={{marginTop:"15px", marginLeft:'15px'}}item>
          <Button variant="outlined" color="primary" style={{textTransform:'lowercase',border: '1px solid #1C1C1C',color:''}}>
  S'inscrire
</Button></Grid>

      </Grid>
     
    </div>
  );
}

export default Carousel;
