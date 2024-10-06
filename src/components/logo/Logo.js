import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logoImage from '../../assets/logo1.webp'; 


const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
  imgHover: {
    width: '100%', 
    height: '100%', 
    borderRadius: '50%', 
    transition: "all 0.5s ease",
    "&:hover": {
      filter: `brightness(0.8)`, 
    },
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <img 
      src={logoImage} 
      alt="Logo" 
      className={classes.imgHover} 
    />
    );
};
