import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,InputBase,Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {ReactComponent as FavoriteIcon} from '../svg/aime.svg';



const useStyles = makeStyles((theme) => ({
  root: {
    
    Width: '661px',
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
  const {avatar,profileName,date,text,title,author,lieux,etat,jaime,commentaire}=props
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar src={avatar} />
        }
        title={<Typography style={{fontSize:"14px",color:"#3F3F3F",fontWeight: 'normal'}}>{profileName}</Typography>}
        subheader={<Typography style={{fontSize:"11px",color:" #9E9E9E",fontWeight: 'normal'}}>{date}</Typography>}
      />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {text}
        </Typography>
      </CardContent>
      <Grid container>
      <Grid item  >
     
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
fontWeight: '500px',
color:'#3F3F3F'
    }} >
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
        <Typography><div style={{width:"180px",display:"-webkit-inline-box",fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Lieux de recherche</div> <span style={{fontWeight: "normal",
  fontSize: "16px",color:"#757575"}}>{lieux}</span></Typography>
        <Typography><div style={{width:"180px",display:"-webkit-inline-box",fontWeight: "normal",
fontSize: "16px",color:"#9E9E9E"}}>Etat</div> <span style={{fontWeight: "normal",
  fontSize: "16px",color:"#757575"}}>{etat}</span></Typography>
      


        </div>
        
      </CardContent>
        </Grid>
        
      
      </Grid>
      <Grid container >
        <Grid style={{marginTop:"15px", marginLeft:'15px'}}item>
          <Button variant="outlined" color="primary" style={{textTransform:'lowercase',border: '1px solid #1C1C1C',color:''}}>
  Contacter
</Button></Grid>

      </Grid>
      <CardActions disableSpacing >
        <IconButton disableRipple="true"  aria-label="add to favorites">

  <Typography style={{paddingRight:'8px'}}>{jaime}</Typography>
          <FavoriteIcon />
        </IconButton>
        <Button disableRipple="true"  aria-label="comment" style={{color: "#7A7A7A"}}>
        <Typography style={{paddingRight:"8px"}}>{commentaire}</Typography><Typography style={{textTransform:'lowercase'}}>Commentaires</Typography>  
          </Button>
      </CardActions>
   
     
      <div style={{borderTop:'1px solid #E0E0E0', marginTop:'15px',marginLeft:'0px',marginRight:'0px',paddingLeft:'15px',paddingRight:'15px'}} > 
         <InputBase
        style={{paddingTop:'15px',paddingBottom:'15px',width:'500px'}}
        inputProps={{ 'aria-label': 'commentaire' }}
        placeholder="Ajouter un commentaire..."
      />

         </div>
     
      
    </Card>
    
  );
}
export default AnnonceSmall;