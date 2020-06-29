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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';


const useStyles = makeStyles((theme) => ({
  root: {

    maxWidth: '661px',
    padding:'0px',
    marginTop:'30px',
    boxShadow: "none",
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
  const {avatarSrc,user,date,title,author,cost,imgSrc}=props
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
     
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar src="https://pxcom.media/wp-content/uploads/Touristes-chinois-2019-blog-FR.jpg" />
        }
        title="Amel Retiel"
        subheader="23 nov 2020"
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
       image="https://d3525k1ryd2155.cloudfront.net/h/096/049/881049096.0.x.jpg"
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
      To kill a mockingbird
          </Typography>
        <Typography  style={{
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '18px',
  
      color: '#757575',
    }}  color="textSecondary" component="h3">
        <span>par</span> <span>Harper Lee</span>
        </Typography>
        <div style={{marginTop:"15px"}}>
        <Typography><span style={{fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Adresse</span> <span style={{fontWeight: "500",
fontSize: "16px",color:"#757575"}}>Alger , Bebzouar</span></Typography>
        <Typography><span style={{fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Etat</span> <span style={{fontWeight: "500",
fontSize: "16px",color:"#757575"}}>Ancien ou d’occasion</span></Typography>
        <Typography><div style={{fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Lien goodreads</div></Typography>
 <div style={{maxWidth:'50px'}}><a  href="https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird?from_search=true&from_srp=true&qid=1sr9Jn7FSs&rank=2">https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird?from_search=true&from_srp=true&qid=1sr9Jn7FSs&rank=2</a>
 
 </div>


        </div>
        
        <Typography style={{fontWeight: "bold",
fontSize: "24px"}}>
        <span>Prix</span> <span>950</span><span>Da</span>
        </Typography>
      </CardContent>
        </Grid>
        
      
      </Grid>
      
     
   
     
     
      
    </Card>
    
  );
}
export default AnnonceSmall;