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
            <b>Vol. 1, Issue 3, January 2020 </b>{" "}
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
                        window.open("2020jan-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Hierarchical Image Classification on Bayesian Cascade
                      Neural Learning
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> M. Dharmalingam, G.D. Praveenkumar
                </h5>
                <h5>
                  <b>Abstract: </b> cascade neural learning techniques using in
                  coarse and fine layer in LSTM. Recurrent Neural Network (RNN)
                  system experience from Vanishing Gradient (VG) issues. The
                  Gradients needs to proliferate down through numerous layers of
                  the Recurrent Neural Network (RNN).So we integrate the LSTM do
                  not go through from vanishing gradient problem that forward
                  layer. It support different number of layers in Convolutional
                  Neural Network (CNN) is designed for image classification. The
                  Long Short Term Memory (LSTM) processed with Bayesian Cascade
                  Neural Learning (BCNL) with CNN of GoogleNet framework to
                  designed the hierarchical image classification. The elasticity
                  of LSTM model to computed hierarchical label on standard
                  dataset of CIFAR-100.
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
                        window.open("2020jan-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      SAVE A LIFE-DONATE UNUSED MEDICINES
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Aditya Kumar, Rani Rupali Rajput, Ashi
                  Srivastava, Prabhat Singh, and Harsh Khatter
                </h5>
                <h5>
                  <b>Abstract: </b> Across the globe, people struggle to afford
                  money for medical treatment while lots of money go waste in
                  drugs used for the treatment .For one third of all persons
                  worldwide, access to essential medicines is problematic.
                  Especially in leastdeveloped countries, the majority of the
                  population cannot afford money for drugs, vaccines and
                  diagnosis of the disease and this is now increasingly in
                  middle- income countries too. No detailed data is known on
                  what happens to these unused drugs, but evidence collected in
                  a casual or informal manner suggests some are thrown in the
                  trash or incinerated. The unused medications are flushed down
                  the toilet as has been reported by some of the medical
                  facilities. It is costly and harmful for the environment to
                  destroy the unused medicine.The destruction of unused medicine
                  is wasteful too. The unused medications are donated to help
                  our community and benefit our organizations. We believe that
                  leftover medicines should be donated and not dumped in a
                  dustbin.
                </h5>
                <h5>
                  <b>Pages: 7-12</b>
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
                        window.open("2020jan-3.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      AI based Chatbot for Human Assistance
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Sanchit Singhal, Vatsal Garg, Osho Garg,
                  Prabhat Singh, Harsh Khatter
                </h5>
                <h5>
                  <b>Abstract: </b> Chatbot is an implementation of Artificial
                  Intelligence technology which is used to interact with the
                  human beings and make them feel like they are taking to the
                  real person and the chatbot helps them to solve their
                  queries.. A chatbot can provide 24*7 customer support so that
                  the customer may have the good service experience by any
                  organization. Chatbot helps to resolve the queries and respond
                  to the questions of users. The user is providing the input to
                  the chatbot first and then the same input will process further
                  and this input can be in the form of text or voice. Therefore,
                  on the basis of the given input and after processing it, the
                  chatbot application will generate the response to the user and
                  the same response will be the best answer found by the chat
                  application. This response can be in any format like text
                  format or a voice output. This chatbot is built using Dialog
                  Flow (Google-owned) and it can be accessible through mobile
                  phones, laptops and portable devices. Chatbots such as
                  Facebook bot, WeChat bot, Hike bot called Natasha, etc are
                  available in the marker and will respond on the basis of their
                  local databases. In case of this chatbot system we will focus
                  on the scalability, user interactivity and flexibility of the
                  system which can be provided by adding both local as well as
                  Web database due to which our system will be more fast and
                  accurate.. This chatbot uses unification of emerging
                  technologies like Machine learning and Artificial
                  Intelligence. The motive of this Chatbot system is to support
                  and scale businesses and maintain relations with customers.
                  The main aim of this chatbot is to enhance the customer
                  support experience so that the customer can get support at any
                  time, at any place and on any device in a very less time .
                  This chatbot will also use Google cloud services so that it
                  can provide faster response to the human user and also become
                  more scalable.
                </h5>
                <h5>
                  <b>Pages: 13-18</b>
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
                        window.open("2020jan-4.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Immigration Control and Management System using Blockchain
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Abhay Goel, Abhishek Sharma, Deepak Gupta
                </h5>
                <h5>
                  <b>Abstract: </b> In this paper, we propose a system using
                  Blockchain technology to create a decentralized, secure, and
                  scalable migration records of individuals. We try to utilize
                  Ethereum Blockchain and Proof of Work as the consensus
                  algorithm. We attempt to mitigate the process of illegal
                  immigration by keeping immutable and unique record of state of
                  migration as well as personal information of an individual to
                  check their authenticity. The AWS S3 service has been used to
                  store the official documents of each individual securely,
                  while still maintaining transparency. The proposed system will
                  not only help to check for unlawful immigration but will also
                  allow to check if an individual has successfully reached the
                  intended destination. Also, the storage system will help keep
                  the original documents of every individual in a cloud based
                  storage solution.
                </h5>
                <h5>
                  <b>Pages: 19-24</b>
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
                        window.open("2020jan-5.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Voice Based Email for Visually Impaired
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Yash Singhal, Yash Kumar Singh, Utkarsh
                  Agarwal, Prabhat Singh, Harsh Khatter
                </h5>
                <h5>
                  <b>Abstract: </b> The evolution of internet has completely
                  changed many fields as it made the human life so easy because
                  in the today world, they can access anything from anywhere at
                  any time. It becomes a major part of today’s human life
                  because without this, human being even can’t imagine their
                  life in modern era. There are dramatic changes which came in
                  the field of communication as people can send any information
                  to anyone within few seconds. But, still there are few
                  visually abled people which can’t use this modern technology
                  because they have not gifted the eyes and all activities
                  related to communication are based on the visual perception.
                  By considering it as an idea for a project, this project helps
                  the visually impaired persons in the communication process.
                  So, this application would not require keyboard facility
                  further as direct speech to text conversion and vice versa
                  facility would be available for such special peoples. The
                  process of identifying the speech is called speech
                  recognition.
                </h5>
                <h5>
                  <b>Pages: 25-29</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
