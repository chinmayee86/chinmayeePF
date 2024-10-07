import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Contact.css';
import emailGif from '../../assets/email-unscreen.gif';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
    textAlign: 'left', 
  },
  contactTitle: {
    fontSize: '5rem',
    marginBottom: '0.5rem',
    marginLeft: '5rem', 
    marginTop: '4rem',
  },
  contactInfo: {
    fontSize: '2rem', 
    marginBottom: '0.5rem',
    marginLeft: '5rem', 
  },
  emailLink: {
    fontSize: '2rem', 
    color: 'inherit', 
    textDecoration: 'none', 
    '&:hover': {
      cursor: 'pointer', 
      padding: '0'
    },
    marginLeft: '5rem',
  },
  mailImageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mailImage: {
    width: '100%',
    height: 'auto',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const email = "chinmayeep141@gmail.com"; 

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <Grid container spacing={2} style={{ marginLeft: '4rem' }}>
          <Grid item xs={12} sm={6}> 
            <Typography className={classes.contactTitle}>
              Contact Me!
            </Typography>
            <Typography className={classes.contactInfo}>
              You can reach me at:
            </Typography>
            <a href={`mailto:${email}`} className={classes.emailLink}>
              {email}
            </a>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.mailImageContainer}> {/* Right side for mail image */}
            <img src={emailGif} alt="Mail Animation" className={classes.mailImage} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
