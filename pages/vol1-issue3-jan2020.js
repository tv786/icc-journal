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
                    <b>Refrences: </b>
                    <ol>
                        <li>A.krizhevsky, I.sutskever and G.E.Minton
“Imagenetclssifiction with deep convolutional
neural network”, in
Proc.Adv.NeuralInf.Processing Syst., pp.1097-
1105,2012.</li>
                        <li>C.Liu,Y.Cao,Y.Luo,G.Chen,V.Vokkarane,Y.ma,
“Deep food: Deep learning-based food image
recognition for computer aided dietary assesment
”,,Dig Healt 3:37-48,2016.[Google Scholar].</li>
                        <li>E.S Marquez,J.S.Hare, M.Niranjan, “Deep
Cascade Learning”, IEEE trans on Neural
network and learning system,pp.5475-
5485,2018.</li>
                        <li>G.D.Praveenkumar, M.Dharmalingam, “
Analysis of vanishing gradient problem in deep
learning on CIFAR dataset”, Con .Proc., NCAC
2019, ISBN-9789387862463,pp.1-3.</li>
                        <li>G.D.Praveenkumar, M.Dharmalingam, “Pruned
Cascade Neural Network
ImageClassification”,IJRTE, Volume No 8
,Issue No 3, pp.6454-6457, 2019.</li>
                        <li>G.D.Praveenkumar, M.Dharmalingam,
“Recurrent Cascade Neural Network for Image
Classification”,IJSTR, Volume No 8 ,Issue No
10, 2019</li>
                        <li>G.E.Hinton,S.Osindero,Y.W.Teh, “A fast
learning algorithm for deep belief nets”, Neural
computing, vol.18 ,no.7,pp.1527-1554,2006.</li>
                        <li>K.He and J.Sun,”convoluational neural network
at constrained time cost”,inProc,IEEE
conf.CVPR,pp.5353-5360,2015.</li>
                        <li>K.Simonyan ,A.Zisserman, “Very deep
convolutional network for large scale image
recognition”, arvix:1409,1556,2014.</li>
                        <li>L.Zumdzinski, “Deep learning guinea pig image
classification on using Nvidia DIGITS and
GoogleNet”, CEUR-ws.org/vol-
2240\paper16.pdf.</li>
                        <li>M.s.Junayed,A.A.Jeny,N.Neebal, “Incept-N: A
convolutional neural network based
classification approach for predicting nationality
from facial features”, 3rd IEEE , ICIVC-2018.</li>
                        <li>N.Sharma,V.Jain,A.Mirsha, “An analysis of
CNN for image classification”, ICCIDS-2018,
pp.377-384</li>
                        <li>P.Ballester,R.M.Araujo, “On the performance of
GoogleNet and Alexnet applied to
slatchs”,Con.Proc.,AAAI-16.,pp.1224-1128.</li>
                        <li>S.Squartini, S.Paolinelli, F.Piazza, “ comparing
different recurrent neural architecture on a
specific task from vanishing gradient effect
perspective”, IEEE, ICNSC, pp.380-
385,2006.</li>
                        <li>R.Amalraj, M.Dharmalingam, “A Work Point
System Coupled with Back-Propagation for
Solving Double Dummy Bridge Problem”,
Neurocomputing (Elsevier) Vol. No 168, pp 160-
178, June 2015.</li>
                        <li>G.D.Praveenkumar, M.Dharmalingam,
“Detection of skin cancer using artificial neural
network Classifier”,IJRASET,Vol.No-6,IssuesIII,pp-1884-1889,March-201).</li>
                        <li>K.Shridhar, F.laumann,M.Liwicki, “Bayesian
convolutional neural network with variational
inference”,arxiv:1806.05978v5[cs.lg],14 Nov
2018</li>
                        <li>K.Shridhar, F.laumann,M.Liwicki, “Uncertainity
estimations by softplus normalization Bayesian
convolutional neural network with variational
inference”,arxiv:1806.05978v6[cs.lg], May
2019.</li>
                        <li>K.Shridhar, F.laumann,M.Liwicki, “A
comprehensive guide to Bayesian convolutional
neural network with variational
inference”,arxiv:1901.02731v1[cs.lg],(Jan 2019).</li>
                        <li>ChenWang, Yang Xi, “convolutional neural
network for image classification”,[Google
Scholar].</li>
                        <li>Y.Guo,Y.Liu,E.M.Bakker,Y.Guo,M.S.Lew,
“CNN-RNN: a large-scale hierarchical image
classification framework”, Multimedia tools
App, doi:org/10.1007/s11042-017-54443-x, pp-
10251- 10263,2017.</li>
                        <li>R.Fu,B.Li,Y.Gao,P.Wang, “CNN with coarse-tofine layer for hierarchical classification”,
doi:10.1049/iet-cvi.2017.0636, pp-1-8,2017.</li>
                        <li>Srivastava.N,Salakhutdinov, R.R, “Discriminate
transfer learning with tree based priors” ,
Advances in Neural Information Processing
System, Lake Tahoe, NV,USA,PP-2094-
2102,2012.</li>
                        <li>Xiaoyu Liu, “ Deep convolutional and LSTM
neural network for acoustic modeling in
automatic speech recognition”, pp. 1-9</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 1-6</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Dharmalingam, M, &Praveenkumar, G.D. (2020). Hierarchical Image Classification on Bayesian Cascade Neural Learning. Innovative computing and communication: an international journal, 1(3), 1–6.<br/> http://doi.org/10.5281/zenodo.4743651</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Seehusen DA, Edwards J. Patient practices and beliefs concerning
disposal of medications. J Am Board Fam Med. 2006; 19 (6): 542–547.
doi: 10.3122/jabfm.19.6.542</li>
                        <li>Tong AY, Peake BM, Braund R. Disposal practices for unused
mediction around the world. Environ Int. 2011;37(1):292–298.
doi: 10.1016/j.envint.2010.10.002</li>
                        <li>Paul Cerrato, Iltifat Husain, MD, “GIVEMED APP” allows users to
register their excess medicines by scanning the barcode on the
package and choosing where they want to donate their medication.
https://www.imedicalapps.com/2016/08/givmed-medication-sharing- pr event-waste/</li>
                        <li>Adam Kircher, George Wang, Kiah Williams, sirum drives the
future of healthcare by connecting people with surplus medications. https://www.sirum.org/</li>
                        <li> Omkar Nath Sharma, “Medicine Baba”, who voluntarily collects
unused medicines from people and distribute them to the poors free
of charge. https://medicinebaba.org/</li>
                        <li>Rahul Verma, founder of “Uday Foundation”, who serve needy
people by donating various items. https://www.udayfoundation.org/donations-help-us/</li>
                        <li>Mohammadk Bashaar, Vijay Thawani, Mohamed Azmi Hassali and
Fahad Saleem, “Disposal practices of unused and expired
pharmaceuticals among general public in Kabul", 2017, BMC Public
Health · December 2017 DOI: 10.1186/s12889-016-3975-</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 7-12</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Kumar, Aditya, Rajput, Rani Rupali, Srivastava, Ashi, Singh, Prabhat, &Khatter, Harsh. (2020). SAVE A LIFE-DONATE UNUSED MEDICINES. Innovative computing and communication: an international journal, 1(3), 7–12.<br/> http://doi.org/10.5281/zenodo.4743656</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Sorna Shanthi.D, Keerthana.S, Nandha
Kumar.PK, Nithya.D “Hexabot: A Text-Based Assistive
Chatbot To Explore Library Resources” (IJEAT) ISSN:
2249 – 8958, Volume-8, Issue-3S,February 2019</li>
                        <li>Ayah Atiyah, Shaidah Jusoh, Sufyan Almajali
“An Efficient Search for Context-Based Chatbots” 2018
8th International Conference on Computer Science and
Information Technology</li>
                        <li>Guruswami Hiremath, Aishwarya Hajare,
Priyanka Bhosale, Rasika Nanaware, Dr. K. S. Wagh
“Chatbot for Education System”| International Journal of
Advance Research, Ideas and Innovations in Technology,
2018</li>
                        <li>Prof.K.Bala, Mukesh Kumar, Sayali Hulawale,
Sahil Pandita “Chat-Bot For College Management System
Using A.I “ IRJET -Volume: 04 Issue: 11 | Nov -2017</li>
                        <li>Sumit Wailthare, Tushar Gaikwad, Ketkee
Khadse, Pooja Dubey “Artificial Intelligence Based ChatBot “ IRJET-Volume: 05 Issue: 03 | Mar-2018</li>
                        <li>Mr. Aniket Dole, Mr. Hrushikesh Sansare, Mr.
Ritesh Harekar, Mrs. Sprooha Athalye “ Intelligent Chat
Bot for Banking System “ (IJETTCS) Volume 4, Issue
5(2), September - October 2015</li>
                        <li>Amit Patil , K Marimuthu, Nagaraja Rao A and R
Niranchana “Comparative study of cloud platforms to
develop a Chatbot “ International Journal of Engineering
& Technology – 2017</li>
                        <li>Ameya Vichare, Ankur Gyani, Yashika
Shrikhande, Nilesh Rathod “A chatbot system
demonstrating Intelligent Behaviour using NLP “
(IJARCET) Volume 4 Issue 10, October 2015</li>
                        <li>Harsh Pawar, Pranav Prabhu, Ajay Yadav,
Vincent Mendonca, Joyce Lemos “College Enquiry
Chatbot Using Knowledge in Database” (IJRASET),
Volume 6, Issue IV, April 2018</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 13-18</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Singhal, Sanchit, Garg, Vatsal, Garg, Osho, Singh, Prabhat, &Khatter, Harsh. (2020). AI based Chatbot for Human Assistance. Innovative computing and communication: an international journal, 1(3), 13–18.<br/> http://doi.org/10.5281/zenodo.4743741</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>International Organization of Migration. Section 3.1 Passport
and VISA system. [Online]
Available:http://www.rcmvs.org/documentos/IOM_EMM/v3/
V3S01_CM.pdf</li>
                        <li>Satoshi Nakamoto, “Bitcoin: A Peer-to-Peer Electronic Cash
System”.</li>
                        <li>G. Wood, “Ethereum: A secure decentralised generalised
transaction ledger,” Ethereum project yellow paper, vol. 151,
pp. 1–32, 2014.</li>
                        <li>Blockchain Revolution – 2016, By Don Tapscott and Alex
Tapscott.</li>
                        <li>Transfer e-Borders data: general aviation and maritime.
https://www.gov.uk/government/publications/transfer-e-borde
rs-data-general-aviation-and-maritime. Accessed 20 Feb 2018</li>
                        <li>Wurster, S., et al.: Specification on blockchain technology.
ISO/TC 307, Tokyo (2017).</li>
                        <li>How blockchain can create a more humane process for
refugees (article) July 13, 2018
https://bigthink.com/reuben-jackson/how-blockchain-will-hel
p-refugees-and-migrants</li>
                        <li>How Blockchain can benefit migration programmes and
migrants (article) February 22, 2018
https://migrationdataportal.org/blog/how-blockchain-can-bene
fit-migration-programmesand-migrants</li>
                        <li>Smart Contracts Explained [Online] Available:
http://www.blockchaintechnologies.com/blockchain-smartcon
tracts</li>
                        <li>Sunil Gulabani, Hands-on Simple Storage Service (S3),
Practical Amazon EC2, SQS, Kinesis, and S3 pp 223-307,
2017 – Springer.</li>
                        <li>AWS S3 versioning documentation explaining the overview
[Online] Available:
https://docs.aws.amazon.com/AmazonS3/latest/dev/Versionin
g.html</li>
                        <li>AWS Patch Manager documentation explaining the overview
[Online]
Available:https://docs.aws.amazon.com/systems-manager/late
st/userguide/systems-manager-patch.html</li>
                        <li>Hyperledger Fabric White paper. [Online] Available:
http://www.theblockchain.com/docs/Hyperledger%20Whitepa
per.pdf</li>
                        <li>Ruggero Donida Labati, Angelo Genovese, Enrique Muñoz,
Vincenzo Piuri, Fabio Scotti, Gianluca Sforza, "Biometric
Recognition in Automated Border Control", ACM Computing
Surveys, vol. 49, pp. 1, 2016, ISSN 03600300, Available:
http://piurilabs.di.unimi.it/Papers/csur_2016.pdf</li>
                        <li>Zibin Zheng, Shaoan Xie, Hongning Dai, Xiangping Chen,
and Huaimin Wang, An Overview of Blockchain Technology:
Architecture, Consensus, and Future Trends, 2017 IEEE 6th
International Congress on Big Data.</li>
                        <li>Deepak Vohra, Load Balancing, Docker Management Design
Patterns, 2017 – Springer, pp 219-239.</li>
                        <li>Hasan, Raed A; Mohammed, Muamer N; Ameedeen, Mohammed
Ariff Bin; Khalaf, Emad Taha, Dynamic Load Balancing Model
Based on Server Status (DLBS) for Green Computing, Advanced
Science Letters, Volume 24, Number 10, October 2018, pp.
7777-7782</li>
                        <li>Taha Arian, Amir Kusedghi, Bijan Raahemi, Ahmad Akbari, A
Collaborative Load Balancer for Network Intrusion Detection in
Cloud Environments, Journal of Computers Volume 12, Number 1,
January 2017.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 19-24</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Goel, Abhay, Sharma, Abhishek, & Gupta, Deepak. (2020). Immigration Control and Management System using Blockchain. Innovative computing and communication: an international journal, 1(3), 19–24.<br/> http://doi.org/10.5281/zenodo.4743748</p>
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
                    <b>Refrences: </b>
                    <ol>
                    <li>Jagtap Nilesh, Pawan Alai, Chavhan Swapnil
and Bendre M.R.. “Voice Based System in
Desktop and Mobile Devices for Blind
People”. In International Journal of Emerging
Technology and Advanced Engineering
(IJETAE), 2014 on Pages 404-407</li>
                    <li>Ummuhanysifa U.,Nizar Banu P K , “Voice
Based Search Engine and Web page Reader”</li>
                    <li>C. Kang, H. Jo and B. Kim, “A Machine-toMachine based Intelligent Walking Assistance
System for Visually Impaired Person”, The
Journal of KICS, vol. 36, no. 3, (2011), pp.
195-304.</li>
                    <li>S. Kumar, M. A. Qadeer and A. Aupta,
“Location Based Service using Android”,
Internet Multimedia Service Architecture and
Applications, IEEE International Conference,
(2009).</li>
                    <li>H. -W. Jung, “Smartphones and future
changes”, The Korea Contents Association,
vol. 8, no. 2, (2010).</li>
                    <li>I -H. O, J. S. Bae, D. -W. Park and Y. -H.
Sohn, “Implementation of Location Based
Service(LBS) using GPS for Various Sizes of
Maps”, Korean Institute of Information
Technology, vol. 8, no. 4, (2010).</li>
                    <li>G. E. Lee and J. W. Lee, “Google Android
phone Personal open market”, Korean
Multimedia Society, Fall Conference, (2009),
pp. 346-349.</li>
                    <li>G. Broll, S. Keck, P. Holleis and A. Butz,
“Improving the Accessibility of NFC/RFIDbased Mobile Interaction through Learnability
and Guidance”, International Conference on
Human-Computer Interaction with Mobile
devices and services, vol. 11, (2009).</li>
                    <li>Jagtap Nilesh, Pawan Alai, Chavhan Swapnil
and Bendre M.R.. “Voice BasedSystem in
Desktop and Mobile Devices for Blind
People”. In International Journal of
Emerging Technology and Advanced
Engineering (IJETAE), 2014 on Pages 404-
407
(Volume 4, issue 2).</li>
                    <li>Ummuhanysifa U.,Nizar Banu P K , “Voice
Based Search Engine and Webpage Reader”.
In Internationa Journal of Computational
Engineering Research (IJCER).
Pages 1-5.</li>
                    <li>G. Shoba, G. Anusha, V. Jeevitha, R.
Shanmathi. “AN Interactive Email for Visually
Impaired”. In International Journal of
Advanced Research in Computer and
Communication Engineering (IJARCCE),
2014 on Pages 5089-5092.</li>
                    <li>The Radicati website. [Online].
Available:http://www.radicati.com/wp/wpcont
ent/uploads/2014/01/EmailStatistics-Report-
2014-2018-Executive-Summary.pdf.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 25-29</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Singhal, Yash, Singh, Yash Kumar, Agarwal, Utkarsh, Singh, Prabhat, &Khatter, Harsh. (2020). Voice Based Email for Visually Impaired. Innovative computing and communication: an international journal, 1(3), 25–29.<br/> http://doi.org/10.5281/zenodo.4743760</p>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
