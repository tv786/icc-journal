import React from "react";
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
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AdvisoryBoard() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{ textAlign: "center" }}>
        {" "}
        Archive
      </h2>
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
      <ExpansionPanelDetails>
        <GridContainer justify="center" style={{ textAlign: "justify" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <h4>
                  <b>
                    Title :{" "}
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open("2019sep-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      RC Car Using LabVIEW And Arduino{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Nimit Nayak, Sahib Singh, Rajatdeep Singh,
                  Ramandeep Singh, Parul Dawar
                </h5>
                <h5>
                  <b>Abstract: </b> Radio controlled cars have been commonly
                  being sold as toys for a long time and they are popular at
                  that too. R.C Car is one of the major attractions for the toys
                  markets. However, these toys are not limited to just the toy
                  market. R.C Car in itself can provide a huge opportunity for a
                  new generation of students to learn the basic building blocks
                  of robotics and robotics design. RC car can usually be found
                  in two types of configurations. This configuration is namely
                  known as the wired configuration as well as the wireless
                  configuration, not only that but depending upon the
                  configuration we are employing, the complexity of the circuit
                  will increase or decrease. [1] The history of the RC car began
                  in the 1960’s when the first company originated from Britain
                  produced the first commercial RC Car. They did so with the
                  help with the nitrogen gas. Years down the line the Japanese
                  were the first one to make a working RC car which was able to
                  run on electricity” [1] RC cars are fun DIY projects that can
                  include as much as or little the user want to implement in
                  their design. The basic design of the RC Car contain the
                  chassis, the wheels and the Dc motor foot their operation.
                  However for more challenging students Rc cars can also Include
                  IR sensors, Proximity Sensors etc. [1]
                </h5>
                <h5>
                  <b>Pages: 1-6</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <h4>
                  <b>
                    Title :{" "}
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open("2019sep-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Implementation of IoT to Minimize Post-harvest Losses{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Srishti Sahni, Farzil Kidwai, Prerna
                  Sharma, Harshit Singhal
                </h5>
                <h5>
                  <b>Abstract: </b> This paper analyzes the abiotic factors
                  responsible for the post harvest losses of cereal grains.
                  Factors like relative humidity, temperature, moisture and
                  oxygen content of the warehouses are taken into account and
                  their relationship with the rate of decay of cereal grains is
                  examined. A ubiquitous sensing environment is set up using an
                  IoT (Internet of Things) device which collects real time data
                  and establishes a network between different sensors and
                  actuators, reducing human interference to zero. The collected
                  data is used to predict the approximate time within which the
                  grains should be treated in order to avoid degradation and
                  minimize losses. A machine learning algorithm is applied and a
                  suitable model is constructed to achieve the same. This model
                  evaluates the analytical and experimental data from previous
                  researches and draws conclusions which are then implemented in
                  association with the IoT device to generate precise results.
                  The results are contemplated and alerts are generated
                  accordingly.
                </h5>
                <h5>
                  <b>Pages: 7-16</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <h4>
                  <b>
                    Title :{" "}
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open("2019sep-3.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Hand Gesture Recognition using Kinect Sensor{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Sai Rakshit S Harathas
                </h5>
                <h5>
                  <b>Abstract: </b> Previously hand gesture recognition was done
                  using glove based techniques. But with the increase in the use
                  of automation, humans preferred recognition methods which did
                  not use any hardware even if it meant that the accuracy was
                  compromised. The Human computer interaction with user is not
                  limited to keyboard, mouse and pen due to evolution of
                  ubiquitous computing. Applications of hand gesture recognition
                  include Phobia therapy, military simulation and medical
                  training. In this project, a two-stage HGR system is proposed
                  to recognize hand using Kinetic sensor which includes
                  segmentation and recognition using both colour and depth
                  information. As most of the mobile cameras used have both
                  depth and normal camera, thus this technique can also be
                  implemented using an app. Here for the recognition part of the
                  project I have used deep learning using autoencoders and
                  verified the algorithm for different training sets
                </h5>
                <h5>
                  <b>Pages: 17-20</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <h4>
                  <b>
                    Title :{" "}
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open("2019sep-4.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Robotic Arm Control using LabView{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Piyush Malhotra, Parul Dawar
                </h5>
                <h5>
                  <b>Abstract: </b> The Idea of the paper is to control a
                  robotic arm which could move in multiple directions and
                  probably 360 degree in direction. Such type of robot can be a
                  useful deployment in various industries and manufacturing
                  sector such as auto-mobile industries, textile industries etc.
                  where transfer of a goods are required in confined space.
                  Other advantages of such a robot is to ease the movement over
                  the production line and enhance mobility of goods over
                  different phases of production .The platform that has been
                  chosen for the purpose is LabVIEW, which is a visual
                  programming language and is easy to learn and implement.
                </h5>
                <h5>
                  <b>Pages: 21-24</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
