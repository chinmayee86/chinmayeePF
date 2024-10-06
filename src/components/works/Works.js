/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';

import './Works.css';

import vehicle from '../../assets/recentprojects/vehicle.webp';
import arvr from '../../assets/recentprojects/arvr.webp';
import gesture from '../../assets/recentprojects/gesture.webp';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    marginLeft:'3em'
  },
  socialIcons: {
    position: 'fixed',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '1.25rem',
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'SafePark System', 
      description: `Utilized an Automated Number Plate Recognition (ANPR) system for vehicle log management in a Residential Complex, employing CCTV footage and machine learning to extract vehicle numbers. Engineered a streamlined process for image acquisition, plate recognition, segmentation, and character identification, while developing a dynamic front-end interface with JavaServer Pages (JSP), CSS, and Bootstrap for an enhanced user experience. Implemented JDBC for robust data connectivity, seamlessly integrating MySQL for efficient data handling and analysis.`,
      alter: 'SafePark System',
      image: `${vehicle}`,
      url: "https://github.com/chinmayee86/VSAGS",
    },
    { 
      id: 2,
      title: 'AR Classroom Experience', 
      description: `Developed a sophisticated digital classroom application that enables instructors to seamlessly project videos onto a live screen using tailored picture cards. Integrated ORB-based image recognition to identify key elements within the cards, allowing for precise comparison with a database for frame-by-frame video integration in the real environment utilizing OpenCV. Additionally, created an engaging application for showcasing cartoon images extracted from designated episode scenes, projecting them onto the screen for recreational enjoyment.`,
      alter: 'AR Classroom and VR Entertainment Experience',
      image: `${arvr}`,
      url: "https://github.com/chinmayee86/ARFYP"
    },
    { 
      id: 3,
      title: 'Gesture Calc', 
      description: `Crafted an advanced hand gesture recognition system utilizing extensive feature repositories and gesture labels for real-time detection of a virtual calculator. Implemented the Mediapipe framework to collect data for nineteen hand gestures, enabling basic mathematical operations. Leveraged palm detection and hand landchinmayee models within Mediapipe to identify hands and estimate 21 hand knuckle coordinates, crucial for the recognition system. Integrated OpenCV to realize the virtual calculator effectively.`,
      alter: 'Gesture controlled Calculator',
      image: `${gesture}`,
      url: "https://github.com/chinmayee86/HGCVC"
    },
  ]);

  return (
    <section id="projects">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project,index) => (
          <div className={`project ${index % 2 === 0 ? 'left' : 'right'}`} key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>

              <Link
      href={project.url}
      key="github"
      target={project.url}
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title="Check out the Github code"
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label="GitHub"
          className={classes.iconButton}
        >
          <i className={`${classes.icon} fab fa-github`}></i>
          </IconButton>
      </Tooltip>
    </Link>

            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
