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
            <b>Vol. 1, Issue 1, June 2019 </b>{" "}
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
                        window.open(
                          "2019june-Editorial-Inaugural Volume-ICC.pdf"
                        );
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Editorial – Inaugural Issue of Innovative Computing and
                      Communication: An International Journal{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Deepak Gupta, Ashish Khanna
                </h5>
                <h5>
                  <b>Pages: 1-4 </b>
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
                        window.open("2019june-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      GEO PROFILING MAPS BASED ON CRIME{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Siddhant Magow, Harshit Kapoor, Chiranjeev
                  Singh Bindra, Deepak Gupta
                </h5>
                <h5>
                  <b>Abstract: </b> Security has become an essential aspect of
                  everyday life in India. Crimes are occurring rampantly even in
                  broad daylight and its becoming difficult to predict the place
                  and time of their occurrence due to their sudden nature. One
                  of the ways to provide security is by enabling people with
                  vital information on the security aspects for the route they
                  would take during a travel from one place to another. This
                  creates vigilance in traveler and precautionary measures could
                  be taken to prevent any mishap. This project tries to envision
                  an application that will suspect any possible security lapse
                  in a location enroute a destination. A user would use a map
                  which would display all possible areas of red alert for
                  security from source to destination. Given a map (like Google
                  Maps), the security-based profiling of various geographical
                  routes traversed could be highlighted as red/yellow/green
                  indicating high, medium and low risk zones respectively. This
                  would enable the user to be vigilant while travelling through
                  high risk zones in the map. The profiling of routes can be
                  done on crime data obtained from police (Delhi Police in this
                  case) website for arrested persons, their crime of conviction,
                  place of crime committed, place of arrest etc. Machine
                  learning algorithms could be used to learn the security
                  features that contribute to the security of the location.
                  Clustering algorithms can be used for this purpose. K means
                  clustering is one of the simplest clustering algorithms which
                  categorize the items into k groups of similarity. To calculate
                  that similarity, it uses some distance metric (Euclidean,
                  Manhattan, etc.) for distance measurement.
                </h5>
                <h5>
                  <b>Pages: 1-8 </b>
                </h5>
                <br />
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
                        window.open("2019june-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Analysis of Gender Inequality Indian Women’s faced on
                      Workplace{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Deepa Sharma, S.Ramachandran, Mandeep Kaur
                </h5>
                <h5>
                  <b>Abstract: </b> Gender based discriminations is a universal
                  fact especially in case of poor or lower class women’s. We
                  speak only men and women both are equals to each other but in
                  reality it’s not fact. Gender discrimination mostly based on
                  stereotypes concept makes by society. In today era peoples are
                  educated but their thinking is backward based, they consider
                  men are physically and mentally strong rather than the
                  women’s. They thought women are physically weak and
                  emotionally sensitive. Gender discrimination term comes from
                  the conflicting with the term sex. In my opinion both terms
                  are used to be as equality or synonyms to each other but
                  technically too much difference between the both terms. In
                  simple words we can say that gender discrimination means that
                  the men and women are not equal to each other. Mostly these
                  difference is comes from the distinctions in biology,
                  psychology, and cultural norms etc. Studies show the gender
                  equality between them of many domains like education, life
                  experience, personality, interests, family life, careers and
                  physical structures extra too much factors influences on the
                  term of Sex. In India, a number of industries are stratified
                  across the genders .These difference is main reason behind
                  this according to me family, location and society their we
                  lives. Because some time lower-class families are uneducated,
                  so they are not encourage own their children’s for study
                  specially girl child ,they think what’s benefit to teach the
                  girl child ,after marriage girl child only done the household
                  work .They were not favor of educated the girl child’s. But
                  some time middle class or little educated family provides
                  equal chance to their child’s for studies but girls are not
                  give more preference to their careers as compared to their
                  families Because they choose any jobs to considers some points
                  like timing of job, working hours, location, on the work place
                  which type of works assigns them? And atmosphere of Workplace
                  etc. The reason behind this a single women’s play a very vital
                  role in her life like as a mother, as a wife and in a company
                  as a employees. She will always manage her personal life or
                  professional life whether she is educated or illiterate. In
                  this paper we study about what’s Gender equality or
                  Discriminations facing by the women’s in workplace
                </h5>
                <h5>
                  <b>Pages: 9-14 </b>
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
                        window.open("2019june-3.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Feature Selection using MultiObjective Grey Wolf
                      Optimization Algorithm{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Deepak Gupta, Nimish Verma, Mayank Sehgal,
                  Nitesh
                </h5>
                <h5>
                  <b>Abstract: </b> Multi Objective Grey wolf Optimization is
                  one a meta-heuristic technique. The MOGWO has recently gained
                  a huge research interest from numerous domains due to its
                  impressive characteristics over other meta-heuristics
                  optimization techniques: it has less parameters, derivation
                  information is not required in the initial stage, scalable,
                  flexible, easy to use. In this paper MOGWO, which is based on
                  the leadership hunting technique of grey wolves is used for
                  feature selection. The traditional GWO is useful for single
                  objective optimization problems. Since, feature extraction is
                  a multi-objective problem; this paper utilizes multiobjective
                  GWO algorithm. In this paper, MOGWO is applied to 6 different
                  datasets to understand its application in diverse set of
                  problems. At first, MOGWO is used to obtain feature subsets
                  from different datasets. Then machine learning models like
                  KNN, random forest and logistic regression are used to obtain
                  the accuracy results and comparison of the results is
                  performed. The outputs from the 6 different datasets using
                  MOGWO along with the machine learning models have been
                  reviewed and summarized. The paper is concluded by mentioning
                  the summary conclusion of MOGWO.
                </h5>
                <h5>
                  <b>Pages: 15-18</b>
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
                        window.open("2019june-4.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      EQUIVALENCE DATA GENERATION TECHNIQUE IN CASE OF DATA LOSS
                      DUE TO FAULT OCCURRENCE IN VIRTUAL MACHINES USED IN CLOUD
                      COMPUTING{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Umesh Dwivedi, Harsh Dev
                </h5>
                <h5>
                  <b>Abstract: </b> Cloud computing is a computing like a
                  blessed child in the field of computer. It is able to provide
                  the solution of any problem in computers. As the data and user
                  requirement increased two new problem came into existence, one
                  is to store this huge amount of data and another is how to
                  fulfil all the requirements of an individual user. As we know,
                  computers have limitations in both the aspects, in storage as
                  well as in the individual requirements . Ahead of this, user
                  wants to fulfil their requirements round the clock and upto
                  endless time. Both of these problems are solved by the cloud
                  computing. Cloud gives unlimited space and side by side no
                  requirement of new software or application installation on
                  their own machine. Thats why cloud is said to be the solution
                  of every problem in the field of computer. But if any fault
                  occurs,the whole architecture of cloud gets crippled.. To
                  solve this problem many fault tolerant techniques are being
                  proposed by the researchers in the field of cloud computing.
                  Many of them are very useful. In the same sequence, we have
                  proposed a new fault tolerant technique named as equivalence
                  data generation technique to regenerate the lost or crashed
                  data of any virtual machine which is being used by cloud
                  architecture. We analysed this technique on four virtual
                  machine architecture and successfully recovered the data of
                  the lost virtual machine.
                </h5>
                <h5>
                  <b>Pages: 19-28</b>
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
                        window.open("2019june-5.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Optimizing Machine Learning Models using Multiobjective
                      Grasshopper Optimization Algorithm{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Ashish Sharma, Deepak Gupta, Nimish Verma,
                  Mayank Sehgal, Nitesh
                </h5>
                <h5>
                  <b>Abstract: </b> Multi Objective Grasshopper Optimization
                  Algorithm is a re- cent meta-heuristic swarm intelligence
                  algorithm developed by Mirjalili at. El. It is inspired from
                  the movement of grasshopper swarms in nature. It can be
                  applied in numerous domains due to its impressive
                  characteristics like easy to use, scalable, flexible and
                  better performance than classic methods in real problems. In
                  the paper, MOGOA, which is a population based method has been
                  used for feature selection. First, MOGOA has been used for
                  feature extraction from six different datasets to form feature
                  subsets from each dataset. Then three machine learning models
                  - KNN, Logistic Regression and Random Forest have been
                  implemented to predict the results before and after feature
                  selection. Finally accuracy of results is obtained and
                  comparison of results is performed. In the first section of
                  this paper, theoretical foundation of multi-objective
                  problems, feature selection and evolutionary algorithms is
                  introduced. In second section, MOGOA ,its implementation and
                  the three machine learning models are explained. Finally the
                  accuracy results of the 6 different datasets implementing
                  MOGOA along with the machine learning models has been reviewed
                  and summarized. The paper is ended by mentioning the
                  conclusion of the MOGOA application in the feature selection
                  domain.
                </h5>
                <h5>
                  <b>Pages: 29-34</b>
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
                        window.open("2019june-6.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Early Detection of Ransomware Exploits Using Snort{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Raaghav Mathur, Ashish Khanna, Abhijeet
                  Singh
                </h5>
                <h5>
                  <b>Abstract: </b> We live in a fast-evolving internet age
                  where opportunities are limitless, but so are the risks and
                  chances of security breaches. In 2017, ‘The Shadow Brokers’, a
                  self-proclaimed group of hackers, released several hacking
                  tools and zero day exploits from the intelligence arsenal of
                  USA’s National Security Agency (NSA). Chief amongst these
                  exploits were - Eternal Blue, Eternal Romance, Eternal Synergy
                  and Eternal Champion. These, along with Eternal Red, were
                  collectively titled the ‘Eternal Series Exploits’. These
                  exploits were subsequently used to make potential cyber
                  weapons like ‘WannaCry’, ‘Petya’ and ‘NotPetya’ ransomware,
                  which affected lakhs of computers worldwide and exposed major
                  vulnerabilities in Microsoft Windows. In this age, where
                  hackers constantly devise new methods to infiltrate systems,
                  it is imperative to safeguard and strengthen network security
                  by anticipating data breaches and providing protection from
                  potential hazards. Deploying simple firewalls can no longer
                  ensure adequate security. The need of the hour is an intrusion
                  detection system like Snort, which analyses network traffic to
                  detect potentially malicious activity and issues alerts. Such
                  a system provides an additional defence mechanism and is an
                  indispensable part of any security framework. Through this
                  project, we aim to configure new Snort rules to successfully
                  detect the Eternal exploits (and other similar exploits) in
                  real time, so that no user data is compromised.
                </h5>
                <h5>
                  <b>Pages: 35-46</b>
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
                        window.open("2019june-7.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      An Inflation Insinuation in Industries (MSME of Uttar
                      Pradesh) Growth{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Manisha Shukla
                </h5>
                <h5>
                  <b>Abstract: </b> An inflation is the tormentor of the
                  economy, it destroyed an entire predicts. In this endeavor the
                  role of inflation on MSME of UP is critically examined since
                  the year 1990-1991 to 2018- 2019. The growth was studied
                  taking parameters inflation Rate, Numbers of MSME, Investment,
                  Employments and derived data at base rate 1990-1991. The
                  critical examination of the inflation behavior of growth by
                  the X-Y graph taking year value in X-axis and other variables
                  at Y axis. The number of counts, Average value, Maximum Value
                  and Minimum Values were also calculated. The inflation was in
                  range the minimum 2.07 to 13.75%, however, the hundred rupees
                  are inflated to rupees 793.51. The range of Total Investments
                  (Crores Rs) was 104.54 to 53334.31, MSME units established was
                  6033 to 52231 and employment 28229 to 490820. At the base year
                  1990-1991 Rupees value the range of Total Investments(Crores
                  Rs) was 993.20 to 69.30, MSME units established was 428 to 34
                  and employment 1423 to 181. The trend lines of Total
                  Investments, MSME units, Employment, rupee value and
                  Investments at base year 1990-1991 were increasing, however,
                  inflation, at base year 1990-1991 MSME units and Employments
                  were decreasing. The linear trend lines were not Consistent,
                  Systematic, Repetitive, somewhere bloodshot and albeit of an
                  unusual kind.
                </h5>
                <h5>
                  <b>Pages: 47-54</b>
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
                        window.open("2019june-8.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      Machine Learning with Internet of Things: A Comprehensive
                      Survey{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Akanksha Kochhar, Prerna Sharma
                </h5>
                <h5>
                  <b>Abstract: </b> Rapid evolutions in the hardware and
                  software that uses devices which are used in technologies in
                  communications have introduced the concept of IOT that is
                  Internet of Things. IOT involves the connection of devices
                  with one another in such a way, so that they can share
                  information with each other and gather large number of facts
                  on daily basis. But the disadvantage involved in the analysis
                  of the data collected, extraction of the information and
                  creation of the applications is that all these require human
                  interference. IOT devices must be intelligent which can create
                  automated smart applications introducing the concepts of
                  Machine Learning with IOT can led to huge improvements in the
                  application. In this paper a review is conducted on the
                  existing work done by the researchers in using Machine
                  learning with IOT which includes the application areas. Also
                  the major challenges which are faced in using Machine Learning
                  with IOT are briefly discussed. The aim of this paper is to
                  gain knowledge about how both the technologies are used
                  together and applied in the smart environment.
                </h5>
                <h5>
                  <b>Pages: 55-64</b>
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
                        window.open("2019june-9.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      BLACK HOLE DETECTION AND PREVENTION IN AODV PROTOCOL USING
                      MODIFIED CUCKOO SEARCH ALGORITHM{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Moolchand sharma, Shubbham Gupta, Suman
                  Deswal
                </h5>
                <h5>
                  <b>Abstract: </b> Mobile ad hoc network (MANET) is a network
                  without centralized administration for sending data through
                  multi-hop mobile nodes. Routing is the biggest challenge that
                  happens due to the absence of rigid infrastructure in a MANET.
                  The efficiency of routing protocol depends on the accuracy
                  with which it sends data from source to destination. Routing
                  protocol has a crucial role because of rapidly varying
                  topology. In this paper, we've aimed to increase the
                  efficiency of routing protocols using cuckoo search
                  optimization. The technique is to be tested on NS2 simulator.
                  Quality of Service (QoS) parameters like Delay, Throughput,
                  Packet loss, and Packet delivery ratio is used for evaluating
                  the performance of routing protocol and its optimization in
                  this paper. It is seen that as nodes increase the mentioned
                  method shows better results of 95.45% Packet Delivery Ratio.
                </h5>
                <h5>
                  <b>Pages: 65-74 </b>
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
                        window.open("2019june-10.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Comparative Analysis of Big Data Analytics and IoT
                      Technologies{" "}
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Theres Bemila Jenet, Sonali Bapte
                </h5>
                <h5>
                  <b>Abstract: </b> Currently various devices are able to
                  connect with internet, so the vast amount of data is created.
                  The BDA (Big Data Analytics) and IoT (Internet of Things)
                  Technologies are two diverse concepts that handles data from
                  different perceptive. As for Big data Analytics the data are
                  obtained based on human generated while IoT the data is from
                  machine generated. Numerous researches are carried on both
                  these areas. This present clear gives idea about these two
                  areas in basic and later in detail. Big data Analytics are
                  used for making long term decision while IoT are for short
                  term decision for real time purpose. Also, the paper focuses
                  in comparative analysis of both areas based on wide varied
                  parameter where each one proof to be have some advantage and
                  disadvantages. After detail comparison final, it concludes
                  that each domain can be selected as per the scope of
                  application.
                </h5>
                <h5>
                  <b>Pages: 75-78 </b>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
