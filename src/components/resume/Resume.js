import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <a className={classes.footerText} href="https://drive.google.com/file/d/1sgHKMRup1xkPoa_lLBSoAw3oHe3dRbQq/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
    <AttachFileIcon fontSize="large" />

    <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
  </a>
  );
};
