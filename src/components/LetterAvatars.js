import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import yellow from '@material-ui/core/colors/yellow';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  yellowAvatar: {
    margin: 20,
    color: '#fff',
    backgroundColor: yellow[500],
  },
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.yellowAvatar}>DM</Avatar>
    </Grid>
  );
} 
