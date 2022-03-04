import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AppBar, Avatar, Grid, withStyles, Paper } from "@material-ui/core";

import SubheadingComponent from './SubHeadingComponent'

const useStyles = makeStyles((theme) => ({
  container:{
    display: "flex",
    borderLeft: '1px solid #d0d0d0',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://www.limehome.com/wp-content/uploads/2021/02/limehome_texture-palette_feature-fleck-peach.jpg)',
    backgroundColor: '#eee',
    height: '100%',
  },
  root: {
    width: '100%',
  },
  rootExpanded:{
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  longPaper: {
    height: '80vh',
    // flex: 1,
    // display: "flex",
    justifyContent: "left",
    elevation: 25,
    padding: theme.spacing(1),
    background: '#f7f1e9',
  },
  smallPaper: {
    height: '30vh',
    elevation: 25,
    padding: theme.spacing(1),
    background: '#f7f1e9',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));


const MyComponent = () => {

  const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
 const rootClass = expanded ? classes.rootExpanded : classes.root;

 return (
 <div className={classes.container}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <SubheadingComponent title="Customer Details" />
        <Paper className={classes.smallPaper}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12} >
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <SubheadingComponent title="Customer issues" />
        <Paper className={classes.smallPaper}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                1 
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.longPaper}>
          <div>
            <Accordion
              className={rootClass}
              onChange={handleChange(name)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={`${name}-header`}
              >
                <Typography className={classes.heading}>Apaleo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <iframe src="https://app.apaleo.com/BER/reservations/QFVHBVTP-1/actions?source=account" height="900px" width="100%" frameborder="0" />
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={rootClass}
              onChange={handleChange(name)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={`${name}-header`}
              >
                <Typography className={classes.heading}>Zendesk</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <iframe src="https://trialaccountsupport.zendesk.com/agent/tickets/new/1" height="900px" width="100%" frameborder="0" />
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
 )
}

export default MyComponent
