import React, { useState } from "react";
import Link from "next/link";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AdvisoryBoard() {
  const [open1, setOpen1] = useState(false);
  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{ textAlign: "center" }}>
        {" "}
        Archives
      </h2>
      <Link href="/vol1-issue1-june2019">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 1, Issue 1, June 2019 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      <Link href="/vol1-issue2-sept2019">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 1, Issue 2, September 2019 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      <Link href="/vol1-issue3-jan2020">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 1, Issue 3, January 2020 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      <Link href="/vol1-issue4-apr2020">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 1, Issue 4, April 2020 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      <Link href="/vol2-issue1-july2020">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 2, Issue 1, July/August 2020 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      /*new container*/
      <Link href="/vol2-issue2-oct2020">
        <ExpansionPanel style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <h3>
                {" "}
                <b>Vol. 2, Issue 2, October/November 2020 </b>{" "}
              </h3>
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Link>
      />
    </div>
  );
}
