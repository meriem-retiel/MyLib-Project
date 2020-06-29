import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,

  },
  avatar: {
   // width: theme.spacing(10),
   // height: theme.spacing(10),
   width: '100px',
   height: '100px',
   border: '2px solid',
   borderColor:'#000000',
  },
  text: {
    fontFamily: 'Barlow, san-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  name: {
    
    fontWeight: "300",
fontSize: "24px",
color:" #3F3F3F"
  },
  pos: {
    marginBottom: 5,
  },
  btn: {
    borderRadius: 5,
    borderColor: '#becddc',
    fontSize: '0.75rem',
    background: '#000000',
    color: 'white',
  },
  startIcone: {
    color: '#FFD700',
  }

}));

export default function ProfilCard() {
  const classes = useStyles();
  return (
 <Grid >
  <CardContent>
    <Grid direction="row" container justify="center" >
            <Grid container item
                    sm={2} >
                <Avatar style={{width:"148.37px", height:"148.37px"}} alt="Meriem Retiel" src={"https://images.squarespace-cdn.com/content/v1/5d0e806114ec310001712792/1586877668176-8J2SUA1VJ1R1M7M8HDHV/ke17ZwdGBToddI8pDm48kCaFaGTlWr69A-R6KsbIUupZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PInVCfNir1GcnrBLo2mllEZVdnLbim-Cd1llQSp5GmzHsKMshLAGzx4R3EDFOm1kBS/article.jpg"} className={classes.avatar} />
            </Grid> 
                <Grid justify="center"item container direction="column" sm={5} >
                    <Grid item  container
  direction="row"
  justify="space-between"
  alignItems="flex-end">

                    
                    <Typography style ={{paddingBottom:"0px",}}  className={classes.name} color="textSecondary" >
                Meriem Retiel
                    </Typography>
                <Rating style ={{paddingBottom:"6px"}}name="read-only" value={3} readOnly />
                    <Button variant="contained" color="primary" style={{height:"27px", textTransform:"capitalize",marginBottom:"5px"}}>Modifier</Button>
                    </Grid>
                    <Grid style={{paddingTop:"15px"}}item container direction ="column">
                    <Grid item>
                    <Typography display="block"  className={classes.info} color="textSecondary" gutterBottom>
                <span style={{color:"#3F3F3F", fontWeight:"500"}}> 10 </span >annonces                  <span style={{marginLeft:"15px",color:"#3F3F3F", fontWeight:"500"}}> 5 </span> abonnés     <span style={{marginLeft:"15px",color:"#3F3F3F", fontWeight:"500"}}> 20 </span> abonnements
                    
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography display="block" className={classes.info}  color="textSecondary" gutterBottom>
                Habite a <span style={{color:"#3F3F3F", fontWeight:"500"}}>mostaganem</span>
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography display="inline"  className={classes.info} color="secondary" gutterBottom>
                07 02 58 49 32
                    </Typography>
                    </Grid>
                    </Grid>
                    

</Grid>
       
  </Grid>  
</CardContent>
</Grid>

  );
}