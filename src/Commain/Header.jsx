import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {ReactComponent as Logo } from '../svg/logo.svg';
import { Avatar,Button } from '@material-ui/core';
import theme from '../MyTheme';
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  icon:{
    '&:hover': {
      color: "#E0E0E0",
      },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    
    fontWeight:'500',
    textTransform: 'capitalize',
    margin: "auto",
    color:'#6F6F6F',
    marginRight: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
    color: "#E0E0E0",
    },
    
    
  
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  buttonBlue:{
    textTransform:'lowercase',
    borderRadius:'50px',
    color:'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  avatar:{
    height:'29px',
    width:'29px',
    src:'https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-104.jpg',
  },
  sectionDesktop: {
    color:'#6F6F6F',
    display: 'none',
   
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link style={{ textDecoration: 'none' }} to="/Profile">  <p>Profile</p></Link> 
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
            <Logo/>

          <div  style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
    }}>
         <Link style={{ textDecoration: 'none' }} to="/Actualite"> <Button  className={classes.search} disableRipple='true'>Actualité</Button></Link> 
         <Link style={{ textDecoration: 'none' }} to="/Decouvrir">   <Button className={classes.search} disableRipple='true'>Découvrir</Button></Link> 
         <Link style={{ textDecoration: 'none' }} to="/Profile">   <Button className={classes.search} disableRipple='true'>Profile</Button></Link> 

         <Link style={{ textDecoration: 'none' }} to="/Annonce-Recherche">   <Button  className={classes.search} disableRipple='true' >Livres recherchés</Button></Link> 
         <Link style={{ textDecoration: 'none' }} to="/Publication" >  <Button  className={classes.buttonBlue} variant="contained" color='secondary' >
  Publier une annonce
</Button>
</Link> 
          

          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
                <SearchIcon  className={classes.icon} />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit" className={classes.icon}> 
              <Badge badgeContent={4} color="secondary">
                <MailIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <Avatar className={classes.avatar} variant='circle' src={"https://images.squarespace-cdn.com/content/v1/5d0e806114ec310001712792/1586877668176-8J2SUA1VJ1R1M7M8HDHV/ke17ZwdGBToddI8pDm48kCaFaGTlWr69A-R6KsbIUupZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PInVCfNir1GcnrBLo2mllEZVdnLbim-Cd1llQSp5GmzHsKMshLAGzx4R3EDFOm1kBS/article.jpg"}  />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
