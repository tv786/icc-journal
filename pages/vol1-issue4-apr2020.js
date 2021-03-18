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
            <b>Vol. 1, Issue 4, April 2020 </b>{" "}
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
                        window.open("2020apr-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      COVID-19 outbreak analysis and predictions for future
                      cases
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Karan Gupta, Luv Dhamija, Ritin Behl
                </h5>
                <h5>
                  <b>Abstract: </b> The Coronavirus pandemic (COVID-19) is an
                  infectious disease which has its origin from Wuhan, China in
                  December 2019 and is now considered as a threat for people in
                  this world , and due to this The Centre for Disease Control
                  and Prevention in China has issued an notification on epidemic
                  and assessment of risk on COVID-19 in January[1]. According to
                  studies it is believed that disease was first spread through
                  bats to humans leading to severe respiratory problems [2][3].
                  As of 22, April, COVID-19 has affected over 2.5 million
                  people, causing about 170,000 deaths. Many studies suggest
                  that the main reason for wide spread of this virus is due to
                  air or water droplets being exposed from an already infected
                  person. At current, there is no vaccine or treatment available
                  for this disease, however continuous medical researches and
                  clinical experiments have been conducted to find out the cure.
                  This paper is an attempt to study and analyze how this virus
                  is being spread across the globe with short span of time. This
                  paper suggests the determine the patterns and trends using
                  deep learning.
                </h5>
                <h5>
                  <b>Pages: 1-5</b>
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
                        window.open("2020apr-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      FLY BULLETIN: AN INTELLIGENT NEWS APP
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Srishty Chaudhary, Tanya Mehra, Prabhat
                  Singh, Harsh Khatter
                </h5>
                <h5>
                  <b>Abstract: </b> As of late, we have seen the far reaching
                  utilization of online news. Online news stages assist us with
                  conquering the worldly and spatial restrictions of customary
                  print papers. Online news purchasers like to get to the news
                  through news aggregators, for example, web crawlers and web
                  based life stages. Our lives revolve around smartphones and
                  mobile applications today. Whether it’s about waking up in the
                  morning, navigate through new routes or book a movie date,
                  there's no task that we don’t need mobile applications for.
                  Mobile apps have really made everything just a click away!
                  Mobile applications are handy and keep user notified about all
                  breaking news happening around the globe. While making this
                  paper we examined different models and approach that have been
                  embraced by famous applications and dissected them. We have
                  proposed a thought that will be executed in our application
                  and would be a stage towards better client experience. User
                  can get full access to the news anytime from anywhere. Our
                  app, delivers crisp and short breaking news and trusted
                  in-depth reporting, amazing user experience. It enables the
                  user to check feed, read breaking news, check weather anywhere
                  without being redirected to another website, view live news
                  and read news. It refreshes you with warnings of breaking
                  news, rapidly and precisely, day in and day out. The main idea
                  is to provide one spot destination for reading or watching any
                  kind of news and checking weather condition of anyplace from
                  anywhere. We have followed incremental approach in building
                  this application. Our app interacts with the user and lets
                  them choose from a wide category of news. The application
                  communicates with open weather and news API for feeding the
                  news stories. Our weather fragment provides graphical
                  comparison for a week’s weather.
                </h5>
                <h5>
                  <b>Pages: 7-15</b>
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
                        window.open("2020apr-3.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Autonomous Car Using Tensorflow
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Navender Vats, Md Abid Iqbal, Suraj
                  Aggarwal
                </h5>
                <h5>
                  <b>Abstract: </b> Autonomous car, as the name suggests, a car
                  that can drive on its own is the very concept that is being
                  discussed in the major machine learning concepts. The basic
                  approach for these types of projects is based upon the machine
                  learning methods. Now is the time for the big advancement in
                  this sector and is being in the process too in many of the
                  developed and the developing countries. The goal of our
                  project was to basically train a deep network to understand
                  the steering behavior while driving, to make a fully
                  autonomous car on the stimulator but being on a very realistic
                  approach. For the purpose of the project, the deep network we
                  are using is basically taking data from the front camera being
                  mounted on the top of the car which basically predicts the
                  steering direction at every moment. our system automatically
                  learns about the traffic features and the traffic signals
                  while driving for the almost perfect recognition of the
                  markings and full autonomous driving.
                </h5>
                <h5>
                  <b>Pages: 17-19</b>
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
                        window.open("2020apr-4.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Voice Prescription using Name Entity Recognition
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Nobel Dang, Saksham Thukral, Ashish Khanna
                </h5>
                <h5>
                  <b>Abstract: </b> Doctor’s around the world write
                  prescriptions and hand it to the patients and maintain the
                  record with paper file based systems. This results in very
                  inefficient methods as well as whipping of time. In this
                  paper, software which will automate this process is
                  introduced. The software is deployed on the doctor’s computer
                  or mobile in the form of a web application. Whilst the
                  conversation between the doctor and patient is going-on, the
                  software is listening and capturing the entire context. Then
                  the web application will invoke the micro service deployed on
                  the server which runs in the python environment or flask. With
                  the deep learning model deployed on the server three tasks are
                  done: Classification, Summarization and Named Entity
                  Recognition (NER). With the virtue of Recurrent Neural Network
                  (RNN) and Long-Short Term Memory (LSTM), the classification
                  between four classes: Name, Diagnosis, Prescription, and
                  Advice is done on the preprocessed text having the
                  dimensionality of k*20, where k=> number of sentences. The
                  embedding layer is custom trained with the vocabulary size of
                  5463. After extracting the features, summarization and Name
                  Entity Recognition (NER) tasks are done using spacy and the
                  final PDF containing the required summaries and tagged
                  keywords is generated.
                </h5>
                <h5>
                  <b>Pages: 21-25</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
