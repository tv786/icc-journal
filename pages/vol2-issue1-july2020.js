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
            <b>Vol. 2, Issue 1, July/August 2020 </b>{" "}
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
                        window.open("2020jul-aug-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Design of smart Home monitoring healthcare system using
                      Internet of things
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> P. Nishanthi, E. Udayakumar, M. Vaishnavi,
                  K. Srihari
                </h5>
                <h5>
                  <b>Abstract: </b> The issue looked by most old individuals
                  living alone at home is their unexpected frailty conditions.
                  Many of the individuals around us have numerous medical
                  problems such diabetes, blood pressure, thyroid and
                  significantly more wellbeing issues. So, in such a bustling
                  life they neglect to take medication on time. In this venture
                  home wellbeing checking utilizing IoT is proposed. The
                  Internet of Things (IoT) has been exhaustively used to
                  interconnect the accessible clinical assets and offer smart,
                  trustworthy and viable remedial organizations association to
                  the older people. Prosperity looking for dynamic and helped
                  living is one of the rules that can utilize the IoT central
                  focuses to improve the more settled lifestyle. The proposed
                  structure gathers the information it to the cloud where it is
                  managed and dismembered. The advancement of a home wellbeing
                  observing framework which targets improving the wellbeing and
                  social insurance.
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
                        window.open("2020jul-aug-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Computer Aided Diagnosis Model for Lung Cancer Prediction
                      using Gabor Filtering with Artificial Neural Networks
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> K. Shankar
                </h5>
                <h5>
                  <b>Abstract: </b> Lung cancer becomes a critical disease in
                  human nowadays, and it leads to mortality in many cases.
                  However, the early diagnosis can save the life and increases
                  the patient’s life significantly. Thus, the CT scan is one of
                  the techniques which are used in vital field of imaging in
                  medical areas. This paper provides the novel computer aided
                  diagnosis (CAD) method for finding the lung cancer in the
                  early stages both in male and female. The presented model
                  undergoes Gabor filtering (GF) technique to preprocess the
                  input images to remove the noise exist in it. In addition,
                  watershed based segmentation technique is employed to
                  determine the harmful areas of the lungs from the CT images.
                  At last, gray level co-occurrence matrix (GLCM) is used for
                  feature extraction and artificial neural networks (ANN) is
                  utilized as a classification. The proposed method is tested
                  and implemented by the use of CT scans image of lungs and it
                  shows the Gabor filter shows the better results and the
                  GLCM-ANN model has led to enhanced diagnostic outcome with
                  higher accuracy of 92.89%.
                </h5>
                <h5>
                  <b>Pages: 7-10</b>
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
                        window.open("2020jul-aug-3.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      One QR code for Ticketing System
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Ashima Arya, Sapna Juneja, Abhinav Juneja
                </h5>
                <h5>
                  <b>Abstract: </b> In our day to day routine life,we realize
                  each work is effortlessly done by our cell phones utilizing
                  their applications like shopping, study, online bill
                  installments, business, and so on. Thus, everybody needs rapid
                  and simple to utilize versatile applications that don't hang
                  their telephones or not utilize a lot of extra room or need to
                  take their business on the web. In this paper, the authors
                  have developed two Android Apps as My Event Ticket and My
                  Event Maker by using QR code. These two Apps check all
                  necessities of things everybody needs in their applications
                  like these Apps utilize less RAM, Storage, and Power of the
                  telephone. The three main features of using QR CODE venture is
                  First is utilization of One QR method right now just need
                  their lasting QR code (that is made when the client makes the
                  record right now) this QR Code clients can get the passage in
                  each occasion the main need is the client purchases the ticket
                  for those occasions. The second element of this venture is the
                  utilization of constant database by this kind of database each
                  adjustment in the application is done continuously or the
                  application is quick and work on everybody telephone without
                  giving overwhelming burden to the telephones and the third
                  element of this application utilizes less calculation power on
                  both the server and the customer side.
                </h5>
                <h5>
                  <b>Pages: 11-16</b>
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
                        window.open("2020jul-aug-4.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Motion Transfer in Videos using DCGAN
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Moolchand Sharma, Prerna Sharma, Manish
                  Kumar Jha, Rohan Singh
                </h5>
                <h5>
                  <b>Abstract: </b> Motion Transfer has a wide variety of
                  applications, such as creating motion synchronized videos in
                  film industries and video making apps. The research paper
                  presents a novel approach for motion transfer from a source
                  video to the target person. This approach focuses on the video
                  to video translation using various poses generated in the
                  frames of video for translation. The approach makes use of
                  Pose Generation Convolutional Neural Network to synthesize
                  arbitrary poses from source videos and train the pix2pix –
                  DCGAN(Deep Convolutional Generative Adversarial Networks),
                  which is a conditional generative adversarial network
                  consisting of multi-scale discriminator and generator for
                  target video frames generation. It uses PatchGAN loss, VGG
                  loss, and Feature Matching Loss function for improving and
                  optimizing models. The presented approach provides compelling
                  results of the generated DCGAN model with the discriminator
                  loss of 0.0003 and a generator loss of 5.8206.
                </h5>
                <h5>
                  <b>Pages: 17-24</b>
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
                        window.open("2020jul-aug-5.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      An improved K-Means Clustering with Machine Learning based
                      Sentiment Analysis and Classification Model
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> M. Iiayaraja
                </h5>
                <h5>
                  <b>Abstract: </b> Sentiment analysis (SA) involves the task of
                  automatically extracting the sentiments from user reviews via
                  Natural Language Processing (NLP), data mining, and machine
                  learning (ML) models. A major intention of SA is to identify
                  the opinion and sentiments. It becomes helpful in the decision
                  making of the customers whether to purchase an item or not.
                  This paper develops an improved K-means clustering with random
                  forest (RF) classification model called IKC-RF for effective
                  SA. In order to handle the huge amount of online product
                  reviews, K-means clustering technique is utilized to cluster
                  the sentiments into appropriate class labels. Initially, the
                  online product reviews are preprocessed and feature extraction
                  process takes place. Next, clustering process is carried out
                  by K-means clustering and finally, classification is done by
                  RF technique. The application of clustering technique helps to
                  handle the massive increase in dataset. The performance of the
                  IKC-RF model is evaluated and the results are examined under
                  distinct aspects.
                </h5>
                <h5>
                  <b>Pages: 25-30</b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
