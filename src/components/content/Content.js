import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
}));

export const Content = () => {

  const greetings = "Namaste!";
  const aboutme = `I’m a Full Stack Developer by day, tech sorcerer by night! From conjuring up intuitive Angular interfaces to taming backend beasts with Java and Spring Boot, I turn code into creations that blend creativity with functionality. With a toolkit that includes everything from database alchemy to a pinch of Golang, I’m all about crafting seamless experiences and weaving a little magic into every line of code.`;
  const classes = useStyles();

  return (
    <Container id="home" component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            <TextDecrypt text={`${Resume.basics.job1}  `} />
            <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
        <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme" style={{marginRight:'7em'}}>
              {aboutme}
            </p>
          </div>
      </div>
    </Container>
  );
};
