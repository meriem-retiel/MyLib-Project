import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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



const useStyles = makeStyles((theme) => ({
  root: {

    paddingBottom:'15px',
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
    height:150,
    borderRadius:'4px',
    paddingTop: '56.25%', // 16:9
    paddingBottom:'0px',
    marginLeft:'15px',
    marginRight:'15px',
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
const image='https://cdn-3d.niceshops.com/upload/image/product/large/default/vallejo-game-color-dead-white-17-ml-279423-fr.jpg'

const AnnonceSmall= (props)=> {
  const classes = useStyles();
  const {title,author,price,image}=props
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

    
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
      
        title={<Typography style={{fontSize:"14px",color:"#3F3F3F",fontWeight: '500'}}>Apercus de la couverture</Typography>}
      
      />
      
      <CardMedia 
      className={classes.media}
       image={image}
       
      />
     
    
      <CardContent  classeName={classes.content} style={{
       padding:'15px',
    }}>
      <Typography gutterBottom variant="h4" component="h2">
      {title}
          </Typography>
        <Typography  variant="h3" color="textSecondary" component="h3">
          {author}
        </Typography>
        <Typography style={{
       float:"right",
    }} variant="h5" color="secondary" component="h3">
          {price} Da
        </Typography> 
      </CardContent>
     
  
      
    </Card>
    <div>
<Typography style={{paddingTop:"15px", fontSize:"12px",color: "#757575",letterSpacing:" 0.05em"}}>SPECIFICATION DE L'IMAGE</Typography>
    <Typography style={{fontWeight: "300",fontSize:" 13px",lineHeight: "15px",color: "#757575"}}>Taille minimale de 808 x 632 px</Typography>
    </div>
    </div>
  );
}
export default AnnonceSmall;