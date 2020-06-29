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
import catpic from './catpic.jpg';

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
    fontWeight: 600,
    fontSize: '1rem',
    color: '#122740',
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
 <Card className={classes.root}>
  <CardContent>
    <Grid container sm={12} >
     <Grid item sm={3} >
      <Avatar alt="Elmahmid Yara" src={catpic} className={classes.avatar} />
     </Grid> 
     <Grid item container md={9} >
       <Grid item sm={4} >
        <Typography  className={classes.name} color="textSecondary" gutterBottom>
       Elmahmid Yara
        </Typography>
       </Grid>
       <Grid item sm={4} >
        <StarIcon fontSize='small' className={classes.startIcone}/>
        <StarIcon fontSize='small' className={classes.startIcone}/>
        <StarIcon fontSize='small' className={classes.startIcone}/>
        <StarBorderIcon fontSize='small' className={classes.startIcone}/>
       </Grid>
       <Grid item sm={4} >
         <CardActions>
           <Button variant="contained" className={classes.btn}>Modifier</Button>
         </CardActions>
       </Grid>  
       <Grid item xs={12}   className={classes.pos}>
         10 annonces   5 abonnés   20 abonnement
       </Grid>
       <Grid item xs={12}  className={classes.pos}>
          Habit à Blida
       </Grid>
       <Grid item xs={12}  >
         0768543209
       </Grid>
    </Grid> 
  </Grid>  
</CardContent>
</Card>

  );
}