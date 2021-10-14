import logo from './logo.svg';
import github from "./Logos/Github.png";
import linkedin from "./Logos/Linkedin.png";
import devpost from "./Logos/Devpost.png"
import './links.css';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ian Tobin</h1>
        <h3>Tech Enthusiast and Software Developer</h3>
      </header>
      <body>
        <div className="section">
          <h2>My Upcoming Events</h2>
          
          <h2>My Past Events</h2>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h2>PennApps XXII</h2>
                    <h3>Role: Mentor</h3>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h2>PennApps XX</h2>
                    <h3>Role: Mentor</h3>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <h2>Certifications</h2>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h3>AWS Cloud Practitioner</h3>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h3>Comptia ITF+</h3>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h3>OSHA 10 General Industry</h3>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h3>OSHA 10 Contruction</h3>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <h2>My Profiles</h2>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <a href="https://www.linkedin.com/in/iantobin/"><p>Linkedin Profile</p><img src={linkedin} className="logo"/></a>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <a href="https://github.com/imt1195"><p>Github Profile</p><img src={github} className="logo"/></a>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <a href="https://devpost.com/imt1195"><p>Devpost Profile</p><img src={devpost} className="logo"/></a>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <h3>Contact Me</h3>
          <h4>Tobin.Ian.M@gmail.com</h4>
        </div>
        <p>
          more to come
        </p>
      </body>
    </div>
  );
}

export default App;
