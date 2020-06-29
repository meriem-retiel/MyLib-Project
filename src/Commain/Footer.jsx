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
import Grid from "@material-ui/core/Grid"
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
  
  sectionDesktop: {
    color:'#6F6F6F',
    display: 'none',
   
    [theme.breakpoints.up('md')]: {
      display: 'flex',
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
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



  return (
    <footer className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
            <Logo/>

          <Grid container direction="center">
          <Button  className={classes.search} disableRipple='true'>Conditions d'utilisation</Button>
          <Button className={classes.search} disableRipple='true'>À propos de MaLib</Button>
          <Button  className={classes.search} disableRipple='true' >Notre règlement</Button>
          <Button  className={classes.search} disableRipple='true' >Nous contacter</Button>
        
          

          </Grid>
          <div className={classes.grow} />
          
         
        </Toolbar>
      </AppBar>
     
    </footer>
  );
}
