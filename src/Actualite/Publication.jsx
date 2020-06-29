import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,InputBase,Button} from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';

import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import {ReactComponent as FavoriteIcon} from '../svg/aime.svg';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {

    maxWidth: '661px',
    padding:'0px',
    marginTop:'30px',
  },
  header: {
    margin:'0px',
    paddingBottom:'8px',
    paddingTop:'15px',
    paddingRight:'0px',
    paddingLeft:'15px',
    
  },
  content: {
    padding:'0px',
    margin:'0px',

    
  },

  media: {
    width:"185px",
    height:"150px",
    borderRadius:'4px',
    paddingTop: '56.25%', // 16:9
    marginLeft:'15px',
    marginRight:'0px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const AnnonceSmall= (props)=> {
  const classes = useStyles();
  const {avatarSrc,user,date,title,author,cost,imgSrc,jaime,commentaire,etat,lien,lieux}=props
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <TurnedInNotIcon style={{float:'right',marginTop:"0px",marginRight:"15px",width:"50px"}}/>
      <CardHeader
        className={classes.header}
        avatar={
          <Link style={{ textDecoration: 'none' }} to="/Safaa"><Avatar src={avatarSrc}/></Link>
        }
        title={user}
        subheader={date}
      />
      
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Voici un très beau livre que j’ai acheté ca fait environ 1ans à 1200DA ,  et que j’ai décidé de mon  en séparer pour en faire profiter d’autres personnes . Il est encore neuf et très bon état et je le vend a moins de la moitier de son prix d’achat.
   
        </Typography>
      </CardContent>
      <Grid container>
      <Grid item  >
      <CardMedia 
      className={classes.media}
       image={imgSrc}
       />
        </Grid >
        <Grid item style={{marginLeft:"15px",marginLeft:"15px"}}>
        <CardContent  classeName={classes.content} style={{
       padding:'0px',
    }}>
      <Typography gutterBottom style={{
        padding:'0px',
        margin:'0px',
       fontSize:'20px',
       fontFamily: 'Roboto Slab',
fontStyle: 'normal',
fontWeight: 'bold',
color:'#3F3F3F'
    }} component="h2">
      {title}
          </Typography>
        <Typography  style={{
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '18px',
  
      color: '#757575',
    }}  color="textSecondary" component="h3">
        <span>par</span> <span>{author}</span>
        </Typography>
        <div style={{marginTop:"15px"}}>
        <Typography><span style={{fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Adresse</span> <span style={{fontWeight: "500",
fontSize: "16px",color:"#757575"}}>{lieux}</span></Typography>
        <Typography><span style={{fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Etat</span> <span style={{fontWeight: "500",
fontSize: "16px",color:"#757575"}}>{etat}</span></Typography>
        <Typography><div style={{fontWeight: "normal",
fontSize: "16px",color:"secondary"}}><a  href={lien}>Lien goodreads</a></div></Typography>



        </div>
        
        <Typography style={{color:"#009ACB",fontWeight: "500",
fontSize: "24px"}}>
        <span>Prix</span> <span>{cost}</span><span>Da</span>
        </Typography>
      </CardContent>
        </Grid>
        
      
      </Grid>
      <Grid container >
        <Grid style={{marginTop:"15px", marginLeft:'15px'}} item><Button variant="contained" color="primary" disableElevation style={{textTransform:'lowercase'}}>
  Envoyer une demande
</Button></Grid>
        <Grid style={{marginTop:"15px", marginLeft:'15px'}}item>
          <Button variant="outlined" color="primary" style={{textTransform:'lowercase',border: '1px solid #1C1C1C',color:''}}>
  Contacter le vendeur
</Button></Grid>

      </Grid>
      <CardActions disableSpacing >
        <IconButton disableRipple="true"  aria-label="add to favorites">

  <Typography style={{paddingRight:'8px'}}>{jaime}</Typography>
          <FavoriteIcon />
        </IconButton>
        <Button disableRipple="true"  aria-label="comment" style={{color: "#7A7A7A"}}>
  <Typography style={{paddingRight:"8px"}}>{commentaire}</Typography><Typography style={{textTransform:'lowercase'}}>commentaire</Typography>  
          </Button>
      </CardActions>
   
     
      <div style={{borderTop:'1px solid #E0E0E0', marginTop:'15px',marginLeft:'0px',marginRight:'0px',paddingLeft:'15px',paddingRight:'15px'}} > 
         <InputBase
        style={{paddingTop:'15px',paddingBottom:'15px'}}
        inputProps={{ 'aria-label': 'commentaire' }}
        placeholder="Ajouter un commentaire..."
      />

         </div>
     
      
    </Card>
    
  );
}
export default AnnonceSmall;