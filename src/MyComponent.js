import React from 'react'
import { withTaskContext } from '@twilio/flex-ui';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import TimelineIcon from '@material-ui/icons/Timeline';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import BedIcon from '@material-ui/icons/KingBed';
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
    // color: theme.palette.text.secondary,
    color: theme.palette.text.primary,
    fontSize: "1.2em",
  },
  custName:{
    textAlign: "center",
  }
}));


const MyComponent = (props) => {

  const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  const rootClass = expanded ? classes.rootExpanded : classes.root;
  if(props.task){
    console.log("Task object is:", props.task, props.task.phone)
  }
  let custID = 'THLGODHQ-1'
  let zdURL = props.task ? `https://twilio2629.zendesk.com/agent/users/${props.task.attributes.zd_userid}/requested_tickets` : "https://twilio2629.zendesk.com/"
  let fromNumber = ""
  if(props.task){
    fromNumber = props.task.attributes.channelType === 'whatsapp' ? props.task.attributes.name.replace("whatsapp:", "") : props.task.attributes.from
    custID = props.task.attributes.channelType === 'whatsapp' ? 'THLGODHQ-1' : 'NVSBZKAE-1'
    console.log("is the fron number", fromNumber)
  }
  let apaleoURL = `https://app.apaleo.com/MUC/reservations/${custID}/actions`

  if(!props.task){
    return null
  }

 return (
 <div className={classes.container}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <SubheadingComponent title="Customer Details" />
        <Paper className={classes.smallPaper}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12} >
              <Paper className={classes.paper}> 
                <Typography className="custName" variant="h5">{props.task ? props.task.attributes.custName: ""}</Typography>
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12} >
              <Paper className={classes.paper}> 
                <BedIcon />
                {props.task ? custID : ""}
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                <PhoneIcon />
                {fromNumber}
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                <SentimentSatisfiedAltIcon />
                {props.task? "Lime Customer" : ""}
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                <TimelineIcon />
                {props.task ? "Loyalty points: 125" : ""}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <SubheadingComponent title="Internal details" />
        <Paper className={classes.smallPaper}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                {props.task ? "Maintenance: Frau Mustermann": ""}
              </Paper>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Paper className={classes.paper}> 
                {props.task ? "Last housekeeping: 16-Mar-22": ""}
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
                <iframe src={apaleoURL} height="900px" width="100%" frameborder="0" />
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
                <iframe src={zdURL} height="900px" width="100%" frameborder="0" />
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
                <Typography className={classes.heading}>Limehome OS</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <img src="https://zendesk-3275.twil.io/image9.png" width="100%" height="900px" /> 
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
 )
}

export default withTaskContext(MyComponent)
