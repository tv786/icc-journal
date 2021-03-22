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
        Archives
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
                    <b>Refrences: </b>
                    <ol>
                        <li>K. Zakir Hussain, M. Durairaj and G. Rabia Jahani Farzana,
“Application of Data Mining Techniques for Analyzing Violent
Criminal Behaviour by Simulation Model”, International Journal of
Computer Science and
Information Technology & Society, Vol. 02, No. 01, ISSN:
2249-9555, 2012</li>
                        <li>Manish Gupta, B. Chandra and M. P. Gupta, “Crime Data
Mining for Indian Police Information System”,
Computer Society of India, Vol. 40, No. 1, pp. 388- 397, 2008</li>
                        <li>Kadhim B. Swadi Al-Janabi, “A Proposed Framework for
Analyzing Crime Data Set Using Decision Tree and
Simple K-Means Mining Algorithms”, Journal of Kufa for
Mathematics and Computer, Vol. 01, No. 03, pp. 08-24, 2011</li>
                        <li>Shyam Varan Nath, “Crime Pattern Detection Using Data
Mining”, IEEE Transactions on Knowledge and Data
Engineering, Vol. 18, No. 09, pp. 41-44, 2010</li>
                        <li>Sasha Kapoor, Abhineet Kalra, “Data Mining for Crime
Detection”, International Journal of Computer
Engineering and Applications, Volume VII, Issue III, September 14</li>
                        <li>J.S. de Bruin, T.K. Cocx, W.A. Kosters, J.F.J. Laros, and J.N.
Kok.Onto clustering criminal careers. In Proceedings of the
ECML/PKDD2006 Workshop on Practical Data Mining:
Applications, Experiencesand Challenges, pages 92–95, 2006</li>
                        <li>Jyoti Aggarwal, Renuka Nagpal, Rajni Sehgal, “Crime
Analysis using K-Means Clustering”,
International Journal of Computer Applications (0975 – 8887)
Volume 83 – No4, December 2013.</li>
                        <li>Nazlena Mohamad Ali1, Masnizah Mohd2, Hyowon Lee3,
Alan F. Smeaton3, Fabio Crestani4 and Shahrul Azman Mohd
Noah2 ,2010 Visual Interactive Malaysia Crime News Retrieval
System.</li>
                        <li>Sutapat Thirprungsri Rutgers University.USA ,2011 Cluster
Analysis of Anomaly Detection in Accounting Data: An Audit
Approach 1.</li>
                        <li>Tony H. Grubesic, “On The Application of Fuzzy Clustering
for Crime Hot Spot Detection”, Journal of Quantitative
Criminology,Vol. 22, No. 1 (March 2006), pp. 77-105</li>
                        <li>Tayal, D. K., Jain, A., Arora, S., Agarwal, S., Gupta, T., &
Tyagi, N. Crime detection and criminal identification in India using
data mining techniques. AI & SOCIETY, 30(1), 117-127.</li>
                        <li>T. Wang, C. Rudin, D. Wagner, and R. Sevieri, Detecting
Patterns of Crime with Series Finder, 2013.</li>
                        <li>Qusay Bsoul, Juhana Salim, Lailatul Qadri Zakaria, “An
Intelligent Document Clustering Approach to Detect Crime
Patterns”, The 4th International Conference on Electrical
Engineering and Informatics (ICEEI 2013)</li>
                        <li>Aubaidan, Bashar, et al. "Comparative study of kmeans and
k-means++ clustering algorithms on crime domain." Journal of
Computer Science 10.7 (2014): 1197-1206.</li>
                        <li>Mohammad Reza Keyvanpour, Mostafa Javideh, Mahammad
Reza Ebrahimi, “Detecting and investigating crime by means of data
mining: a general crime matching framework” Procedia Computer
Science, vol. 03, pp872-880, 2011.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li> (2016, September 28). Limited transport options at night leave
working women feeling unsafe, vulnerable. The Hindu. Retrieved
from http://www.thehindu.com</li>
                        <li> Bhattacharyya, A. (2015). Indian Women in the Workplace.
Mediterranean Journal of Social Sciences. Vol 6.No 4. . 118- 125.</li>
                        <li>http://smallbusiness.chorn.com/effects-gender-dicriminatio-wor
kplace-2860.html.</li>
                        <li>http://www. equalrihts.org/publication/kier /sexdiscrim.asp</li>
                        <li>http://www.worlplacefairness.org/sexual-gender-discimination</li>
                        <li>http://en.wikipedia.org/wiki/sexual harassment.</li>
                        <li>Sharma, Usha, Sharma, B.M., ed. (1995). Women Education in
Modem India, Commonwealth Publication, Delhi.</li>
                        <li>Saksena, Anu (2004). Gender and Human Rights, Status of
Women Workers in India, Shipra Publication, Delhi.</li>
                        <li>Banegee, Shruti (2005). Role of Women in Development
Sector,
 Adhyayan Publication, Delhi.</li>
                        <li>Wharton, Amy S. (2005). The Sociology of Gender: An
Introduction to Theory and Research, Blackwell Publication, USA.</li>
                        <li>Srivastavst, Gouri (2005). Education in India, Academic
Excellence,Delhi.</li>
                        <li>Yadav, Neelam (2003). Education for Women, Reference
Press, New Delhi.</li>
                        <li>pandey, A. K.(2002). Emerging Issues in Empowerment of
Women,Anmol Publication, New Delhi.</li>
                        <li>Rae, M. Koteswara, ed. (2005). Empowerment of Women in
India, Discovery, New Delhi.</li>
                        <li>Chatterjee, Mohini (2005), Feminism find Gender Equality,
Avishkar,Jaipur.</li>
                        <li>Bhagwat, Vidya (2004). Feminist Social Thought: An
Introduction to Six Key Thinkers, Rawat, New Delhi.170</li>
                        <li>Pant, S.K. (2002). Gender Bias in Girl Child Education,
Kanishka, New Delhi.</li>
                        <li>Pandey, A.K. (2003). Gender Equality, Development and
Women Empowerment, Anmol, New Delhi.</li>
                        <li>Wazir, Rekha (2000). The Gender Gap in Basic Education:
NGOs as Change Agents, sage, New Delhi.</li>
                        <li>Narasaiah, M. Lakshmi (2004). Gender Inequality and
Poverty,
 Discovery, New Delhi.</li>
                        <li>Yardages, Sushma (2003). Gender Issues in India: Some
Reflections, Radha Publication, New Delhi.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                    <li> Martn-Smith, Pedro, et al. ”A Label-Aided Filter Method for
[2] Multi-objective Feature Selection in EEG Classification for
BCI.” International Work-Conference on Artificial Neural
Networks. Springer International Publishing, 2015. DOI:
10.1007/978-3-319-19258-1 12 Das, Ayan, and Swagatam
Das. ”Feature Weighting and Selection with a Pareto-optimal
Tradeoff between Relevancy and Redundancy.” Pattern
Recognition Letters (2017).
http://dx.doi.org/10.1016/j.patrec.2017.01.004</li>
                    <li>De la Hoz, Emiro, et al. ”Feature selection by multi-objective
optimisation: Application to network anomaly detection by
hierarchical self-organising maps.” Knowledge-Based Systems
71 (2014): 322-338.
http://dx.doi.org/10.1016/j.knosys.2014.08.013</li>
                    <li>M. Wu, J. A. Bloom, I. J. Cox, and M. Miller, “Rotation, scale,
and translation resilient public watermarking for images,”
IEEE Trans. Image Process., vol. 10, no. 5, pp. 767-782, May
2001.</li>
                    <li>B. Xue, M. Zhang, W. N. Browne and X. Yao, ”A Survey on
Evolutionary Computation Approaches to Feature Selection,”
in IEEE Transactions on Evolutionary Computation, vol. 20,
no. 4, pp. 606-626, Aug.2016. Doi:
10.1109/TEVC.2015.2504420</li>
                    <li> A. Jain, D. Zongker, Feature selection: Evaluation,
application, and small sample performance, IEEE Trans.
Pattern Anal. Mach. Intell., 19(1997), 153158. doi:
10.1109/34.574797</li>
                    <li>I. Guyon, A. Elisseeff, An introduction to variable and feature
selection, J. Mach. Learn. Res. 3(2003), 11571182.</li>
                    <li> H. Liu, L. Yu, Toward integrating feature selection algorithms
for classification and clustering, IEEE Trans. On Knowl. and
Data Eng. 17, 4 (April 2005), 491-502. Doi:
10.1109/TKDE.2005.66
http://dx.doi.org/10.1109/TKDE.2005.66.</li>
                    <li> C. Blum, A. Roli. Metaheuristics in combinatorial
optimization: Overview and conceptual comparison. ACM
Computing Surveys. 35(2003). pp. 268308.</li>
                    <li> S. Mirjalili, S. M. Mirjalili, A. Lewis, Grey Wolf Optimizer,
Adv. Eng. Softw. 69 (March 2014), 46-61. Doi:
10.1016/j.advengsoft.2013.12.007
http://dx.doi.org/10.1016/j.advengsoft.2013.12.007</li>
                    <li> S. Mirjalili, S.Z. Mohd Hashim, G. Taherzadeh, S.Z. Mirjalili,
S. Salehi. A Study of Different Transfer Functions for Binary
Version of Particle Swarm Optimization. Int’l Conf. Genetic
and Evolutionary Methods (2011), 169-174. 12.</li>
                    <li> K. Chandrasekaran, S. P. Simon. Multi-objective unit
commitment problem using Cuckoo search Lagrangian
method. International Journal of Engineering, Science and
Technology 4, 2 (2012), 89-105.</li>
                    <li> K. Chandrasekaran, S. Hemamalini, S. P. Simona, N. P.
Padhy. Thermal unit commitment using binary/real coded
artificial bee colony algorithm. Electric Power Systems
Research 84(2012), 109119.</li>
                    <li> B. Crawford, R. Soto, M. O. Suarez, F. Paredes, F. Johnson.
Binary Firefly algorithm for the set covering problem. 2014 9th
Iberian Conference on Information Systems and Technologies
(CISTI June 2014), 1- 5. Doi: 10.1109/CISTI.2014.6877090</li>
                    <li>S. Mirjalili, S. Saremi, S. M. Mirjalili, L. Coelho,
Multi-objective grey wolf optimizer: A novel algorithm for
multi-criterion optimization, Expert Systems with
Applications, in press, DOI:
http://dx.doi.org/10.1016/j.eswa.2015.10.039</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                    <li>M. A. Vouk, "Cloud Computing –
Issues, Research and
Implementations", Department of
Computer Science, North Carolina
State University, Raleigh, North
Carolina, USA, Journal of Computing and Information Technology - CIT 16,
vol. 4, (2008), pp. 235–246.</li>
                    <li>B. S. Taheri, M. G. Arani and M.
Maeen, "ACCFLA: Access Control in
Cloud Federation using Learning
Automata", International Journal of
Computer Applications, vol. 107, no. 6,
(2014), pp. 30-40.</li>
                    <li>Sun Microsystems, Inc., "Introduction
to Cloud Computing Architecture",
White Paper 1st Edition, (2009).</li>
                    <li>M. Fallah, M. G. Arani and M. Maeen,
"NASLA: Novel Auto Scaling
Approach based on Learning
Automata for Web Application in
Cloud Computing Environment",
International Journal of Computer
Applications, vol. 113, no. 2, (2015),
pp. 18-23.</li>
                    <li>Seyyed Mansur Hosseini and Mostafa
Ghobaei Arani, “Fault Tolerance
Techniques in Cloud Storage: A
Survey”, International Journal of
Database Theory and Application, Vol
8, No. 4 (2015), pp. 183-190.</li>
                    <li>A bala and I chana, “Fault toleranceChallenges, Techniques and
Implementation in Cloud Computing”.
IJCSI International Journal of
computer Science Issues, Vol 9, No. 1
(2012), pp. 1694-0814.</li>
                    <li>Benjamin Lussier, A Lampe, R Chatila,
J. Guiochet, F. Ingrand,M. O. Killijian
and D Powell, “Fault Tolerance in
Autonomus Systems: How and How
much?”, LAAS-CNRS 7 Avenue du
Colonel Roche, F-31077, Toulouse
Cedex 04, France.</li>
                    <li>P Latchoumy and S A Khader,
“Survey on Fault tolerance in Grid
Computing”, IJCSI International
Journal of Computer Science, Vol 2,
No. 4, (2011).</li>
                    <li>Nazir, B. and Khan, T.,(2006), “Fault
Tolerant Job Scheduling in
Computational Grid Emerging
Technologies in IEEE International
Conference on Engineering
Technologies, Volume, Issue, 13-14.</li>
                    <li>M C Chan, J R Jiang and S T Huang,
“Fault Tolerance and Secure Network
storage”, 7th International
Conference on Digital Information
Management, ICDIM, (2012).</li>
                    <li>Gang chen, Hai Jin, Deqing Zou,
Bing Bing Zhou, Weizhong Qiang,
Gang Hu, SHelp:Automatic Self
Healing for Multiple Application
Instances in a Virtual Machine
Environment”, IEEE International
Conference on Cluster Computing
2010.</li>
                    <li>Imad M Abbadi, “Self Managed
conceptual Model in Trustworthy
Clouds Infrastructure”, 2010.</li>
                    <li>Yang Zhang1, Anirban Mandal2,
Charles Koelbel1 and Keith Cooper,
“Combined Fault Tolerance and
Scheduling Techniques for Workflow
Applications on Computational Grids”,
9th IEEE/ACM International
Symposium On Clustering and Grid,
2010.</li>
                    <li>Michael Armbrust, Armando Fox,
Rean Griffith, “Above The Clouds:A
Berkeley View of Cloud Computing”,
Electrical Engineering and Computer
Science University of California at
Berkeley, 2009.</li>
                    <li>Wenbing Zaho, P. M. Melliar-Smith
and L. E. Moser” , Fault Tolerance
Middleware for Cloud Computing”,
2010, IEEE 3rd International
Conference on Cloud Computing.</li>
                    <li>Talwana Jonathana Charity And G C
Hua, Resource Reliability Using Fault
Tolerance In Cloud Computing, 2nd
International Conference On Next
Generation Computing Technologies
(Ngct) 2016.</li>
                    <li>Bashir Mohammed, Mariam Kiran,
Iffan Ullah Awan, K. M. Maiyama, An
Integrated Virtualized Strategy for
Fault Tolerance In Cloud Computing
Environment, International. IEEE
Conferences on Ubiquitous
Intelligence and computing, Advanced
and Trusted Computing, Scalable
computing and Communications,
Cloud and Big Data Computing,
Internet of People and Smart word
Congress
(UIC/ATC/SCalCom/CbdCom/IoP/Sm
artWorld) 2016.</li>
                    <li>Emam AbdElfattah, Mohamed
Elkawkagy, and Ashraf, El-Sisi, A
Reactive Fault Tolerance Approach
for cloud computing 13th International
Computer Engineering Conference
(ICENCO) 2017.</li>
                    <li>Samir Setaouti, Dijamel Amar
Bansaber, Reda Adjoudj, and
Mohamed Rebbah, Fault Tolerance
Model Based On Service Delivery
Quality Levels In Cloud Computing,
International Conference On
Mathematics Information Technology
(ICMIT) 2017.</li>
                    <li>Umesh Dwivedi, Harsh Dev, A Review
On Fault Tolerance Techniques and
Algorithms in Green Cloud
Computing, journal Of Computational
and Theoretical Nenoscience, Vol 15,
1-12, 2018.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                    <li>Martn-Smith, Pedro, et al. ”A Label-Aided Filter Method for 2.
Multi-objective Feature Selection in EEG Classification for
BCI.” International Work-Conference on Artificial Neural
Networks. Springer International Publishing, 2015. DOI:
10.1007/978-3-319-19258-112</li>
                    <li>Das, Ayan, and Swagatam Das. ”Feature Weighting and
Selection with a Pareto-optimal Trade- off between Relevancy
and Redundancy.” Pattern Recognition Letters (2017).
http://dx.doi.org/10.1016/j.patrec.2017.01.004</li>
                    <li>De la Hoz, Emiro, et al. ”Feature selection by multi-objective
optimisation: Application to network anomaly detection by
hierarchical self-organising maps.” Knowledge-Based Systems
71 (2014): 322-338.
http://dx.doi.org/10.1016/j.knosys.2014.08.013</li>
                    <li>Mukhopadhyay, Anirban, et al. ”A survey of multiobjective
evolutionary algorithms for data mining: Part I.” IEEE
Transactions on Evolutionary Computation 18.1 (2014): 4-19.</li>
                    <li>B. Xue, M. Zhang, W. N. Browne and X. Yao, ”A Survey on
Evolutionary Computation Approaches to Feature Selection,”
in IEEE Transactions on Evolutionary Computation, vol. 20,
no. 4, pp. 606-626, Aug.2016. Doi:
10.1109/TEVC.2015.2504420</li>
                    <li>A. Jain, D. Zongker, Feature selection: Evaluation, application,
and small sample performance, IEEE Trans. Pattern Anal.
Mach. Intell., 19(1997), 153158. doi: 10.1109/34.574797</li>
                    <li> I. Guyon, A. Elisseeff, An introduction to variable and feature
selection, J. Mach. Learn. Res. 3(2003), 11571182.</li>
                    <li>H. Liu, L. Yu, Toward integrating feature selection algorithms
for classification and clustering, IEEE Trans. On Knowl. and
Data Eng. 17, 4 (April 2005), 491-502. Doi:
10.1109/TKDE.2005.66
http://dx.doi.org/10.1109/TKDE.2005.66.</li>
                    <li>C. Blum, A. Roli. Metaheuristics in combinatorial
optimization: Overview and conceptual comparison. ACM
Computing Surveys. 35(2003). pp. 268308.</li>
                    <li>Deepak Gupta, Jatin Arora, Utkarsh Agrawal, Ashish Khanna,
Victor Hugo C. de Albuquerque, Optimized Binary Bat
Algorithm for classification of White Blood Cells, Measurement (Elsevier), doi:
10.1016/j.measurement.2019.01.002, SCIE (IF 2.2)</li>
                    <li>Deepak Gupta, Anil Ahlawat, Usability Feature Selection via
MBBAT: A Novel Approach, Journal of Computational
Sciences (Elsevier), Volume 23, 195-203, Nov 2017, SCIE
(IF1.9)</li>
                    <li>Deepak Gupta, Arnav Julka, S. Jain, Tushar Aggarwal, Ashish
Khanna, Victor Hugo C. de Albuquerque, Optimized
Cuttlefish Algorithm for diagnosis of Parkin- sons disease,
Cognitive Systems Research (Elsevier), Volume 52, 36-48,
June 2018, SCIE (IF 1.4)</li>
                    <li>Deepak Gupta, Joel J. P. C. Rodrigues, Shirsh Sundaram,
Ashish Khanna, Valery Korotaev, Victor Hugo C.
Albuquerque, Usability Feature Extraction Using Modified
Crow Search Algorithm: A Novel Approach, Neural
Computing and Applications (Springer), 2018,
https://doi.org/10.1007/s00521-018-3688-6, SCIE (IF 4.2)</li>
                    <li>Deepak Gupta, Shrish Sundaram, Ashish Khanna, Aboul Ella
Hassanien, Victor Hugo C de Albuquerque, Improved
diagnosis of Parkinson’s disease based on Optimized Crow
Search Algorithm, Computers and Electrical Engineering
(Elsevier), Volume 68, 412-424, May 2018, SCIE (IF 1.7)</li>
                    <li>S. Mirjalili, S. M. Mirjalili, A. Lewis, Grey Wolf Optimizer,
Adv. Eng. Softw. 69 (March 2014), 46-61. Doi:
10.1016/j.advengsoft.2013.12.007
http://dx.doi.org/10.1016/j.advengsoft.2013.12.007</li>
                    <li>S. Mirjalili, S.Z. Mohd Hashim, G. Taherzadeh, S.Z. Mirjalili,
S. Salehi. A Study of Different Transfer Functions for Binary
Version of Particle Swarm Optimization. Int’l Conf. Genetic
and Evolutionary Methods (2011), 169-174.</li>
                    <li>K. Chandrasekaran, S. P. Simon. Multi-objective unit
commitment problem using Cuckoo search Lagrangian
method. International Journal of Engineering, Science and
Technology 4, 2 (2012), 89-105.</li>
                    <li>K. Chandrasekaran, S. Hemamalini, S. P. Simona, N. P. Padhy.
Thermal unit commitment using binary/real coded artificial bee
colony algorithm. Electric Power Systems Research 84(2012),
109119.</li>
                    <li>B. Crawford, R. Soto, M. O. Suarez, F. Paredes, F. Johnson.
Binary Firefly algorithm for the set covering problem. 2014 9th
Iberian Conference on Information Systems and Technologies
(CISTI June 2014), 1- 5. Doi: 10.1109/CISTI.2014.6877090</li>
                    <li>S. Mirjalili, S. Saremi, S. M. Mirjalili, L. Coelho,
Multi-objective grey wolf optimizer: A novel algorithm for
multi-criterion optimization, Expert Systems with
Applications, in press, DOI:
http://dx.doi.org/10.1016/j.eswa.2015.10.039</li>
                    <li>Crepinsek M, Liu S-H, Mernik M (2013) Exploration and
exploitation in evolutionary algorithms: a survey. ACM
Comput Surv 45. Article 35.
https://doi.org/10.1145/2480741.2480752</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                    <li>Abdullah A. Al-khatib and Waleed A. Hammood, “Mobile
Malware and Defending Systems: Comparison Study”, International
Journal of Electronics and Information Engineering, vol. 6, pp.
116-123, 2016.</li>
                    <li> J. M. Ceron, C. B. Margi and L. Z. Granville, “MARS: An
SDN-based malware analysis solution”, 2016 IEEE Symposium on
Computers and Communication (ISCC), pp. 525-530, June 2016.</li>
                    <li> Q. Chen and R. A. Bridges, “Automated Behavioral Analysis of
Malware: A Case Study of WannaCry Ransomware”, 2017 16th
IEEE International Conference on Machine Learning and
Applications (ICMLA), pp. 454-460, December 2017.</li>
                    <li>Myroslav Komar, Vitaliy Dorosh, Grygoriy Hladiy and Anatoliy
Sachenko, “Deep Neural Network for Detection of Cyber Attacks”,
2018 IEEE First International Conference on System Analysis &
Intelligent Computing (SAIC), October 2018.</li>
                    <li>D. Kao and S. Hsiao, “The dynamic analysis of WannaCry
ransomware”, 2018 20th International Conference on Advanced
Communication Technology (ICACT), pp. 159-166, February 2018.</li>
                    <li>D. Kao and S. Hsiao, “The static analysis of WannaCry
ransomware”, 2018 20th International Conference on Advanced
Communication Technology (ICACT), pp. 1-1, February 2018.</li>
                    <li>Sanggeun Song, Bongjoon Kim and Sangjun Lee, “The
Effective Ransomware Prevention Technique Using Process
Monitoring on Android Platform”, Mobile Information Systems,
vol. 2016, 9 pages, 2016.</li>
                    <li>Amin Kharaz, Sajjad Arshad, Collin Mulliner, William
Robertson and Engin Kirda, “UNVEIL: A Large-Scale, Automated
Approach to Detecting Ransomware”, 25th USENIX Security
Symposium, pp. 757-772, August 2016.</li>
                    <li>Steven R. Snapp, James Brentano, Gihan V. Dias, Terrance L.
Goan, L. Todd Heberlein, Che-Lin Ho, Karl N. Levitt, Biswanath
Mukherjee, Stephen E. Smaha, Tim Grance, Daniel M. Teal, and
Doug Mansur, “DIDS (Distributed Intrusion Detection System) -
Motivation, Architecture, and An Early Prototype”, 14th National
Computer Security Conference, October 1991.</li>
                    <li>J. Gómez, C. Gil, N. Padilla, R. Baños, C. Jiménez, “Design of
a Snort-Based Hybrid Intrusion Detection System”, Distributed
Computing, Artificial Intelligence, Bioinformatics, Soft Computing,
and Ambient Assisted Living (IWANN 2009), Lecture notes in
Computer Science, vol. 5518, pp. 515-522, June 2009.</li>
                    <li>Ahmad Javaid, Quamar Niyaz, Weiqing Sun and Mansoor
Alam, “A Deep Learning Approach for Network Intrusion Detection
System”, 9th EAI International Conference on Bio-inspired
Information and Communications Technologies (formerly
BIONETICS), pp. 21-26, December 2015.</li>
                    <li>Yakuta Tayyebi and D.S. Bhilare, “A Comparative Study of
Open Source Network Based Intrusion Detection Systems”,
International Journal of Computer Science and Information
Technologies, vol. 9 (2), pp. 23-26, 2018.</li>
                    <li> C.J. Coit, S. Staniford and J. McAlerney, “Towards faster string
matching for intrusion detection or exceeding the speed of Snort”,
DARPA Information Survivability Conference and Exposition II.
DISCEX'01, vol. 1, pp. 367-373, Anaheim, CA, USA, USA, 12-14
June 2001.</li>
                    <li>Martin Roesch, “Snort - Lightweight Intrusion Detection for
Networks”, Proceedings of LISA 1999: 13th System’s
Administration Conference, pp. 229-238, November 1999.</li>
                    <li>Samuel Patton, David Doss, William Yurcik, “An Achilles’
Heel in Signature-Based IDS: Squealing False Positives in
SNORT”, 4th International Symposium on Recent Advances in
Intrusion Detection (RAID), October 2001.</li>
                    <li>Zhimin Zhou, Chen Zhongwen, Zhou Tiecheng and Guan
Xiaohui, “The study on network intrusion detection system of
Snort”, 2010 International Conference on Networking and Digital
Society, pp. 194-196, May 2010.</li>
                    <li>K. Wong, C. Dillabaugh, N. Seddigh and B. Nandy,
“Enhancing Suricata intrusion detection system for cyber security in
SCADA networks”, 2017 IEEE 30th Canadian Conference on
Electrical and Computer Engineering (CCECE), pp. 1-5, April-May
2017.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Chapter 4, Inflation and Deflation,
Historical Statistics of the United States.</li>
                        <li>See Hellerstein, Rebecca, "The Impact of
Inflation," Federal Reserve Bank of Boston,
Winter 1997.</li>
                        <li>Satyajit Das, Extreme Money - Masters of
the Universe and the Cult of the Rich,
Pearson Education, 2011.</li>
                        <li>Annual Report, 2017-18, Government of
India, Ministry of Micro, Small and Medium
Enterprises, Udyog Bhavan, New Delhi –
110011</li>
                        <li>MSME Exceeds its Target in 11th FYP both
in Number and Employment, Marh 16, The
Associated Chambers of Commerce and
Industry of India, New Delhi-10</li>
                        <li>Rising Uttar Pradesh, One District One
Product, Summit, August 2018, PHD
Chamber of Commerce and Industry, New
Delhi.</li>
                        <li>https://www.rbi.org.in/.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Zantalis, F., Koulouras, G., Karabetsos, S., &
Kandris, D. (2019). A Review of Machine Learning
and IoT in Smart Transportation. Future
Internet, 11(4), 94.</li>
                        <li>Ahamed, F., & Farid, F. (2018, December).
Applying Internet of Things and Machine-Learning
for Personalized Healthcare: Issues and Challenges.
In 2018 International Conference on Machine
Learning and Data Engineering (iCMLDE) (pp. 19-
21). IEEE.</li>
                        <li> Vijai, Praveen, and P. Bagavathi Sivakumar.
"Design of iot systems and analytics in the context of
smart city initiatives in india." Procedia Computer
Science 92 (2016): 583-588.</li>
                        <li>Reddy, R. R., Mamatha, C., & Reddy, R. G.
(2018, September). A Review on Machine Learning
Trends, Application and Challenges in Internet of
Things. In 2018 International Conference on
Advances in Computing, Communications and
Informatics (ICACCI) (pp. 2389-2397). IEEE.</li>
                        <li> Samie, F., Bauer, L., & Henkel, J. (2019). From
Cloud Down to Things: An Overview of Machine
Learning in Internet of Things. IEEE Internet of
Things Journal.</li>
                        <li>Desai, A. M., & Jhaveri, R. H. The Role of
Machine Learning in Internet-of-Things (IoT)
Research: A Review. International Journal of
Computer Applications, 975, 8887.</li>
                        <li>Y. Meidan et al., “ProfilIoT: A Machine Learning
Approach for IoT Device Identification Based on
Network Traffic Analysis,” SAC 2017 32nd ACM
Symp. Appl. Comput., pp. 506–509, 2017.</li>
                        <li>J. Joshi et al., “Machine Learning Based Cloud
Integrated Farming,” Proc. 2017 Int. Conf. Mach.
Learn. Soft Comput. - ICMLSC ’17, pp. 1–6, 2017.</li>
                        <li>P. M. Kumar, U. Gandhi, R. Varatharajan, G.
Manogaran, J. R., and T. Vadivel, “Intelligent face recognition and navigation system using neural
learning for smart security in Internet of Things,”
Cluster Comput., 2017.</li>
                        <li>T. Truong, A. Dinh, and K. Wahid, “An IoT
environmental data collection system for fungal
detection in crop fields,” Can. Conf. Electr. Comput.
Eng., pp. 0–3, 2017.</li>
                        <li>A. R. Elias, N. Golubovic, C. Krintz, and R.
Wolski, “Where’s The Bear?,” Proc. Second Int.
Conf. Internetof-Things Des. Implement. - IoTDI
’17, pp. 247–258, 2017.</li>
                        <li>M. S. Norouzzadeh et al., “Automatically
identifying, counting, and describing wild animals in
camera-trap images with deep learning,” pp. 1–17,
2017.</li>
                        <li>V. Soundarya, U. Kanimozhi, and D. Manjula,
“Recommendation System for Criminal Behavioral
Analysis on Social Network using Genetic Weighted
KMeans Clustering,” J. Comput., vol. 12, no. 3, pp.
212– 220, 2017.</li>
                        <li> S. Devi and T. Neetha, “Machine Learning
based traffic congestion prediction in a IoT based
Smart City,” pp. 3442–3445, 2017</li>
                        <li> P. M. Kumar and U. Devi Gandhi, “A novel
three-tier Internet of Things architecture with
machine learning algorithm for early detection of
heart diseases,” Comput. Electr. Eng., vol. 0, pp. 1–
14, 2017.</li>
                        <li>Shanthamallu, U. S., Spanias, A.,
Tepedelenlioglu, C., & Stanley, M. (2017, August).
A brief survey of machine learning methods and their
sensor and IoT applications. In 2017 8th
International Conference on Information,
Intelligence, Systems & Applications (IISA) (pp. 1-8).
IEEE.</li>
                        <li>Moh, M., & Raju, R. (2018, July). Machine
Learning Techniques for Security of Internet of
Things (IoT) and Fog Computing Systems. In 2018
International Conference on High Performance
Computing & Simulation (HPCS) (pp. 709-715).
IEEE.</li>
                        <li>Farhan, L., Kharel, R., Kaiwartya, O., QuirozCastellanos, M., Alissa, A., & Abdulsalam, M. (2018,
July). A Concise Review on Internet of Things (IoT)-
Problems, Challenges and Opportunities. In 2018
11th International Symposium on Communication
Systems, Networks & Digital Signal Processing
(CSNDSP) (pp. 1-6). IEEE.</li>
                        <li>Kumar, J. Dr S. Mohan, and Darpan Majumder.
"Healthcare Solution based on Machine Learning
Applications in IOT and Edge
Computing." International Journal of Pure and
Applied Mathematics 119, no. 16 (2018): 1473-1484.</li>
                        <li>Sharma, Kritika, and Deepali D. Londhe.
"Human Safety Devices Using IoT and Machine
Learning: A Review." In 2018 3rd International
Conference for Convergence in Technology (I2CT),
pp. 1-7. IEEE, 2018.</li>
                        <li>Wu, Q.; Ding, G.; Xu, Y.; Feng, S.; Du, Z.;
Wang, J.; Long, K. Cognitive internet of things: A
new paradigm beyond connection. IEEE Internet
Things J. 2014, 1, 129–143.</li>
                        <li>Al-Dweik, A.; Muresan, R.; Mayhew, M.;
Lieberman, M. IoT-based multifunctional scalable
real-time enhanced roadside unit for intelligent
transportationsystems.InProceedingsofthe2017IEEE3
0thCanadian Conference on Electrical and Computer
Engineering (CCECE), Windsor, ON, Canada, 30
April–3 May 2017; pp. 1–6</li>
                        <li>Saarika, P.; Sandhya, K.; Sudha, T. Smart
transportation system using IoT. In Proceedings of
the 2017 IEEE International Conference on Smart
Technologies for Smart Nation (SmartTechCon),
Bangalore, KA, India, 17–19 August 2017; pp. 1104–
1107.</li>
                        <li>Wu, Q.; Huang, C.; Wang, S.Y.; Chiu, W.C.;
Chen, T. Robust Parking Space Detection
Considering Inter-Space Correlation. In Proceedings
of the 2007 IEEE International Conference on
Multimedia and Expo, Beijing, China, 2–5 July
2007.</li>
                        <li>Araujo, A.; Kalebe, R.; Girao, G.; Filho, I.;
Goncalves, K.; Neto, B. Reliability analysis of an
IoT-based smart parking application for smart cities.
In Proceedings of the 2017 IEEE International Conference on Big Data (Big Data), Boston, MA,
USA, 11–14 December 2017.</li>
                        <li> Tripathy, A.K.; Mishra, A.K.; Das, T.K. Smart
lighting: Intelligent and weather adaptive lighting in
street lights
 using IOT. In Proceedings of the 2017 International
Conference on Intelligent Computing,
Instrumentation and
Control Technologies (ICICICT), Kannur, India, 6–7
July</li>
                        <li> Celesti, A.; Galletta, A.; Carnevale, L.; Fazio,
M.´Lay-Ekuakille, A.; Villari, M. An IoT Cloud
System for Traffic Monitoring and Vehicular
Accidents Prevention Based on Mobile Sensor
DataProcessing. IEEE Sens. J. 2018, 18, 4795–4802.</li>
                        <li> Ozbayoglu, M.; Kucukayan, G.; Dogdu, E. A
real-time autonomous highway accident detection
model based on
 big data processing and computational intelligence.
In Proceedings of the 2016 IEEE International
Conference on
 Big Data (Big Data), Washington, DC, USA, 5–8
December 2016; pp. 1807–1813.</li>
                        <li>M. T. Brown and J. K. Bussell, "Medication
adherence:WHO cares?," Mayo Clinic proceedings,
vol. 86, no. 4, pp. 304-314, 2011.</li>
                        <li>R. Michalski, J. Carbonell and T. Mitchell,
Machine Learning. Berlin: Springer Berlin, 2013.</li>
                        <li>F. Ganz, D. Puschmann, P. Barnaghi, and F.
Carrez, “A Practical Evaluation of Information
Processing and Abstraction Techniques for the
Internetof Things,” IEEE Internet Things J., vol. 2,
no. 4, pp. 340–354, 2015.</li>
                        <li>W. Li, T. Logenthiran, V.-T. Phan, and W. L.
Woo, “Implemented IoT based Self-learning Home
Management System (SHMS) for Singapore,” IEEE
IoT-J, 2018.</li>
                        <li>U. Bakar, H. Ghayvat, S. Hasanm, and S.
Mukhopadhyay, “Activity and anomaly detection in
smart home: A survey,” in Next Generation Sensors
and Systems, 2016, pp. 191–220.</li>
                        <li> X. Fafoutis, L. Marchegiani, A. Elsts, J. Pope, R.
Piechocki, and I. Craddock, “Extending the battery
lifetime of wearable sensors with embedded machine
learning,” in IEEE 4th World Forum on
Internet of Things (WF-IoT), 2018, pp. 269–274.</li>
                        <li>S. Idowu, S. Saguna, C. ˚Ahlund, and O.
Schel´en, “Forecasting heat load for smart district
heating systems: A machine learning approach,” in
Int. Conf. on Smart Grid Communications
(SmartGridComm), 2014.</li>
                        <li>Y. Yue, X. Cheng, D. Zhang, Y. Wu, Y. Zhao,
Y. Chen, G. Fan, and Y. Zhang, “Deep recursive
super resolution network with laplacian pyramid for
better agricultural pest surveillance and detection,”
Computers and Electronics in Agriculture, 2018.</li>
                        <li>E. Mwebaze and G. Owomugisha, “Machine
learning for plant disease incidence and severity
measurements from leaf images,” in International
Conference on Machine Learning and Applications
(ICMLA), 2016.</li>
                        <li>S. S. Patil and S. A. Thorat, “Early detection of
grapes diseases using machine learning and IoT,” in
International Conference on Cognitive Computing
and Information Processing (CCIP), 2016.</li>
                        <li>S. Yahata, T. Onishi, K. Yamaguchi, S. Ozawa,
J. Kitazono, T. Ohkawa, T. Yoshida, N. Murakami,
and H. Tsuji, “A hybrid machine learning approach
to automatic plant phenotyping for smart
agriculture,” in International Joint Conference on
Neural Networks (IJCNN), 2017.</li>
                        <li>E. A. Castillo and A. Ahmadinia, “Distributed
Deep Convolutional Neural Network For Smart
Camera
Image Recognition,” in International Conference on
Distributed Smart Cameras, 2017.</li>
                        <li>H. Li, K. Ota, and M. Dong, “Learning IoT in
Edge: Deep Learning for the Internet of Things with
Edge Computing,” IEEE Network, 2018.</li>
                        <li>Q. H. Cao, I. Khan, R. Farahbakhsh, G.
Madhusudan, G. M. Lee, and N. Crespi, “A trust
model for data sharing in smart cities,” in
Communications (ICC), 2016 IEEE International
Conference on. IEEE, 2016, pp. 1–7.</li>
                        <li>A. Meddeb, “Internet of things standards: who
stands out from the crowd?” IEEE Communications
Magazine, vol. 54,no. 7, pp. 40–47, 2016.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Gomathi K, Parvathavarthini B. An
enhanced distributed weighted
clustering routing protocol for key
management. Indian Journal of
Science and Technology. Feb 2015;
8(4):342–8.</li>
                        <li>Raju B, Gulfishan A. Different
approaches on cooperation in wireless
ad hoc networks. International Journal
of Computer Applications. 2011 Aug;
28(3):36–41.</li>
                        <li>Martin H, Deniele P. Routing in ad
hoc networks: A case for long Hops.
IEEE Communications Magazine;
2005. p. 93–101.</li>
                        <li>Vera K. Security in ad hoc networks.
Seminar on Network Security; 2000.
p. 1–16.</li>
                        <li>Abdel-Monien AM, Hedar A. An Ant
Colony Optimization algorithm for the
Mobile Ad hoc network Routing
problem based on AODV protocol.
10th International Conference on
Intelligent Systems Design and
Application; 2010. p. 1332– 7.</li>
                        <li>Al-Shurman, Mohammad, Seong-Moo
YooandSeungjin Park, “Black hole
attack in mobile ad hoc networks,”
Proceedings of the 42nd annual
Southeast regional conference. ACM,
2004</li>
                        <li>Pallavi Sharma and Aditya Trivedi,
"An Approach to Defend against Wormhole Attack in Ad Hoc Network
Using Digital Signature," IEEE 3rd
International Conference on
Communication Software and
Networks (ICCSN), Pp.307-311, 2011.</li>
                        <li>Raj, N.Payal and Prashant B. Swadas,
"Dpraodv: A dynamic learning system
against blackhole attack in aodv
based manet," arXiv preprint
arXiv:0909.2371, 2009.</li>
                        <li>C.V. Anchugam and K. Thangadurai,
“Detection of Black Hole Attack in
Mobile Ad-hoc Networks using Ant
Colony Optimization simulation
Analysis”, Indian Journal of Science
and Technology, Vol 8(13), DOI:
10.17485/ijst/2015/v8i13/58200, July
2015</li>
                        <li>. Sen, Jaydip,
SripadKoilakondaandArijitUkil, "A
mechanism for detection of
cooperative black hole attack in
mobile ad-hoc networks," IEEE.
Second International Conference on
Intelligent Systems, Modelling, and
Simulation (ISMS),2011.</li>
                        <li>Sharma Shivani, " Bio-Inspired
Technique to Improve the
Performance of VANETS",
International Journal of Advanced
Research, Ideas and Innovations in
Technology.</li>
                        <li>S.Gayathri, S.Nithya, G.Shanthini,
R.Janani, R.Ramachandiran, M.
Shanmugam ,T. Kalaipriyan, RS.
Raghav, G. Siva Nageswara Rao,
“ ACO- ECDSA BASED SECURE
ROUTING IN VANET: A BIOINSPIRED APPROACH”,
International Journal of Pure and
Applied Mathematics Volume 119 No.
14 2018, 395-406</li>
                        <li>. Thangadurai K, Anchugam CV.
Simulation based performance
comparison of various Routing
Protocols in MANET using Network Simulation Tool. International Journal
of Advanced Networking Applications.
2013 Apr; 4(5):1744–51</li>
                        <li>Devid C, Alessandro G. Securing
AODV: The A-SAODV Secure Routing
Prototype. IEEE Communication
Magazine. 2008. p. 120–5.</li>
                        <li>Chanchal A. Black hole attack in
AODV Routing Protocol: A review.
International Journal of Advance
Research in Computer Science and
Software Engineering. 2013 Apr;
3(4):820–3.</li>
                        <li>Anuj KG, Harsh S, Anil KV.
Performance Analysis of AODV, DSR
and TORA routing protocols. IACSIT
International Journal of Engineering
and Technology. 2010 Apr; 2(2):226–
31.</li>
                        <li>Govind S, Manish GA. Black hole
detection in MANET using AODV
routing protocol. International
Journal of Soft Computing and
Engineering. 2012 Jan; 1(6):297–303.</li>
                        <li>Anuj KG, Harsh S, Anil KV.
Performance Analysis of AODV, DSR
and TORA routing protocols. IACSIT
International Journal of Engineering
and Technology. 2010 Apr; 2(2):226–
31.</li>
                        <li>Sun B, Guan Y, Chen J, Pooch UW.
Detecting Black hole Attack in Mobile
ad hoc Networks. 5th European
Personal Mobile Communications
Conference; 2003 Apr; Glasgow,
United Kingdom.</li>
                        <li>N. Schweitzer, A. Stulman, A. Shabtai
and R. D. Margalit, “Mitigating
Denial of Service Attacks in OLSR
Protocol Using Fictitious Nodes,” in
IEEE Transactions on Mobile
Computing, vol. 15, no. 1, pp. 163-
172, Jan. 1 2016.</li>
                        <li>J. M. Chang, P. C. Tsou, I. Woungang,
H. C. Chao and C. F. Lai, “Defending
Against Collaborative Attacks by
Malicious Nodes in MANETs: A
Cooperative Bait Detection
Approach,” in IEEE Systems Journal,
vol. 9, no. 1, pp. 65-75, March 2015.</li>
                        <li>J. M. Chang, P. C. Tsou, I. Woungang,
H. C. Chao and C. F. Lai, “Defending
Against Collaborative Attacks by
Malicious Nodes in MANETs: A
Cooperative Bait Detection
Approach,” in IEEE Systems Journal,
vol. 9, no. 1, pp. 65-75, March 2015.</li>
                        <li> Bhattacharyya, Aniruddha, Arnab
Banerjee, Dipayan Bose,
HimadriNathSaha and Debika
Bhattacharyya. “Different types of
attacks in Mobile ADHOC Network.”
CoRR abs/1111.4090 (2011): n. Pag.</li>
                        <li>L. Tamilselvan and V.
Sankaranarayanan, “Prevention of
Blackhole Attack in MANET,” The 2nd
International Conference on Wireless
Broadband and Ultra Wideband
Communications (AusWireless 2007),
Sydney, NSW, 2007, pp. 21-21.</li>
                        <li>Satoshi K, Hidehisa N Nei K, Abbas J,
Yoshiaki N. Detecting black hole
attack on AODV based Mobile ad hoc
networks by Dynamic Learning
Method. International Journal of
Network Security. 2007; 5(3):338–46</li>
                        <li>. Thangadurai K, Anchugam V. Fuzzy
cost based multipath Routing protocol
in MANETs. IEEE World Congress on
Computing and Communication
Technologies; 2014. p. 286–90. DOI:
10.1109/WCCCT.2014.11.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>O. Kwon and N. B. L. Shin, ‘‘Data quality
management, data usage experience and acquisition
intention of big data analytics,’’ Int. J. Inf.
Manage., vol. 34, no. 3, pp. 387–394, 2014.</li>
                        <li> R. Mital, J. Coughlin, and M. Canaday, ‘‘Using
big data technologies and analytics to predict
sensor anomalies,’’ in Proc. Adv. Maui Opt. Space
Surveill. Technol. Conf., Sep. 2014, p. 84</li>
                        <li>N. Golchha, ‘‘Big data-the information
revolution,’’ Int. J. Adv. Res., vol. 1, no. 12, pp.
791–794, 2015.</li>
                        <li>P. Russom, “Big Data Analytics”. TDWI, 4th
Quart, 2011</li>
                        <li>E. Al Nuaimi et al., ‘‘Applications of big data
to smart cities,’’ J. Internet Services Appl., vol. 6,
p. 25, Dec. 2015.</li>
                        <li>J. Gubbi, R. Buyya, S. Marusic, and M.
Palaniswami, ‘‘Internet of Things (IoT): A vision,
architectural elements, and future directions,’’
Future Generat. Comput. Syst., vol. 29, no. 7, pp.
1645–1660, 2013.</li>
                        <li>H.-C. Hsieh and C.-H. Lai, ‘‘Internet of Things
architecture based on integrated PLC and 3G
communication networks,’’ in Proc. IEEE 17th Int.
Conf. Parallel Distrib. Syst. (ICPADS), Dec. 2011,
pp. 853–856.</li>
                        <li>https://infocus.dellemc.com/william_schmarzo/d
ifference-big-data-iot/</li>
                    </ol>
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
