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
                    <b>Refrences: </b>
                    <ol>
                        <li>Instructables. “Arduino Bluetooth Car Controlled
by Labview.” Instructables.com,pages3-4</li>
                        <li>Ayyakkannu, Veeramani. “COURSE ON
ARDUINO.” DC Motor Control by LabVIEW, 1
Jan. 1970,
courseonarduino.blogspot.com/2016/04/dc-motorcontrol-by-labview.html.</li>
                        <li>“Temperature Sensor LM35.” Bluetooth Module
HC-05 - EPro Labs WiKi,
wiki.eprolabs.com/index.php?title=Temperature_S
ensor_LM35.</li>
                        <li> “HC-SR04 Ultrasonic Sensor.” Components101,
components101.com/ultrasonic-sensor-workingpinout-datasheet. pages1,2</li>
                        <li> Magesh. “Temperature Controller Using LINX and
Arduino.” LabeVIEW MakerHub,
www.labviewmakerhub.com/doku.php?id=projects
:magesh:linx-temp-control-arduino:start.</li>
                        <li>“Capacitor.” Wikipedia, Wikimedia Foundation, 11
Oct. 2018, en.wikipedia.org/wiki/Capacitor.</li>
                        <li>“Light-Emitting Diode.” Wikipedia, Wikimedia
Foundation, 6 Nov. 2018,
en.wikipedia.org/wiki/Light-emitting_diode.</li>
                        <li> “Resistor.” Wikipedia, Wikimedia Foundation, 4
Nov. 2018, en.wikipedia.org/wiki/Resistor</li>
                        <li>13 | DC Motor.” LabeVIEW MakerHub,
www.labviewmakerhub.com/doku.php?id=learn:tut
orials:libraries:linx:sparkfun_inventors_kit:dc_mot
or.</li>
                        <li>What Is LabVIEW? - National Instruments,
www.ni.com/en-in/shop/labview.html.</li>
                        <li>Notes, Electronics. “What Is LabVIEW?”
Electronics Notes, www.electronicsnotes.com/articles/test-methods/labview/whatislabview.php.</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>S. J. Watts-Williams et al. Using High-Throughput
Phenotyping to Explore Growth Responses to
Mycorrhizal Fungi and Zinc in Three Plant
Species, Plant Phenomics, 2019</li>
                        <li>Wang, Jin et al. Effect of Climate Change on the
Yield of Cereal Crops: A Review, Climate, 2018</li>
                        <li>Manandhar, Ashish et al. An Overview of the PostHarvest Grain Storage Practices of Smallholder
Farmers in Developing Countries, Agriculture,
2018</li>
                        <li>Schmidt, Marcus et al. Recent Advances in
Physical Post-Harvest Treatments for Shelf-Life
Extension of Cereal Crops, Foods, 2018</li>
                        <li>Valenzuela, Juan Luis et al. Oxidative Stress
Associated with Chilling Injury in Immature Fruit:
Postharvest Technological and Biotechnological
Solutions, Int J Mol Sci, 2017</li>
                        <li>Cor N. Verdouw, Sjaak Wolfert and Bedir
Tekinerdogan Internet Of Things in Agriculture.
CAB Reviews, 2017</li>
                        <li>Prem Prakash Jayaraman, Ali Yavari, Dimitrios
Georgakopoulos, Ahsan Morshed and Arkady
Zaslavsky Internet of Things Platform for Smart
Farming: Experiences and Lessons Learnt.
November, 2016</li>
                        <li>Brady Carter Complete Moisture Analysis of
Wheat. February 15, 2016</li>
                        <li>Francisco Javier Ferrández-Pastor, Juan Manuel
García-Chamizo, Mario Nieto-Hidalgo, Jerónimo
Mora-Pascual and José Mora-Martínez Developing
Ubiquitous Sensor Network Platform Using
Internet of Things: Application in Precision
Agriculture. July, 2016</li>
                        <li>Rosetta's Q1 Revenues Jump on Urologic Testing
Services Sales, GenomeWeb, 2016</li>
                        <li>Amy Kaler et al. Food, Donors, and Dependency
Syndrome(s) in South Sudan, Sociology of
Development, 2015</li>
                        <li>Mills et al. Combining solar power with coal-fired
power plants, or co firing natural gas, Clean
Energy, 2015</li>
                        <li>Dennis Cardoen, Piyush Joshi, Ludo Diels,
Priyangshu M. Sarma and Deepak Pant
Agriculture biomass in India: Part 2. Post-harvest
losses, cost and environmental impacts. Elsevier
B.V., 2015</li>
                        <li>Extracts from Grain crop drying, handling and
storage in Rural structures in the tropics: design
and development., 2014</li>
                        <li>Jayavardhana Gubbi, Rajkumar Buyya, Slaven
Marusic and Marimuthu Palaniswami Internet of
Things (IoT): A vision, architectural elements, and
future directions. Elsevier B.V., 2013</li>
                        <li>Meonghun Lee, Jeonghwan Hwang and Hyun Yoe
Agricultural Production System based on IoT.
IEEE, 2013</li>
                        <li>HODGES, R., BUZBY, J., & BENNETT, B.
Postharvest losses and waste in developed and less
developed countries: Opportunities to improve
resource use. The Journal of Agricultural Science,
149(S1), 37-45, 2011</li>
                        <li>Decagon Devices Fundamentals of Water Activity.
Decagon, 2006</li>
                        <li>Octavian Postolache, P. M. B. Silva Girão, J. M.
Dias Pereira and Helena Geirinhas Ramos
DewPoint and Relative-Humidity Smart
Measuring System. IEEE Transactions on
Instrumentation and Measurement, vol. 55, no. 6,
December 2006</li>
                        <li>E. T. Champagne, J. F. Thompson, K. L. BettGarber, R. Mutters, J. A. Miller, and E. Tan
Impact of Storage of Freshly Harvested Paddy
Rice on Milled White Rice Flavor. American
Association of Cereal Chemists, Inc., 2004</li>
                        <li>Naresh Magan, Russell Hope, Victoria Cairns and
David Aldred Post-harvest fungal ecology: Impact
of fungal growth and mycotoxin accumulation in
stored grain. European Journal of Plant Pathology,
2003</li>
                        <li>Foster Provost and Ron Kohavi Guest Editors’
Introduction: On Applied Research in Machine
Learning. Kluwer Academic Publishers, Boston,
1998</li>
                        <li>D. R. Wilkin and B. C. Stenning Moisture Content
of Cereal Grains. September, 1989</li>
                        <li>EUU Ituen, JP Mittal Water Absorption in Cereal
Grains and its Effects on their Rupture Stress.
Food & Nutrition Press, 1986</li>
                        <li>A. O. Den Love and A. 0. Ade-John Moisture
Sorption Isotherms of Some Nigerian Food
Grains. December, 1983</li>
                        <li>R. J. Bothast Fungal Deterioration and Related
Phenomena in Cereals, Legumes and Oilseeds,
1978</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>C. Keskin, A. Erkan, L. Akarun .Real time hand tracking
 and 3D gesture recognition for interactive interfaces
 using HMM‖ .IEEE Transaction J. U. Duncombe,</li>
                        <li>Hong Li, Michael Greenspan. ―Model based
 Segmentation and recognition of dynamic gestures in
 continuos video streams. Springer publications in
 Patternrecognition,44(2011)1614-1628</li>
                        <li>Fabio Dominio, Mauro Donadeo, Pietro Zanuttigh
 Combining multiple depth-based descriptors for hand
 gesture recognition, Elsevier, Pattern recognition Letters
 2013.</li>
                        <li>Sheng-Yu Peng, Kanoksak Wattanachote, Hwei-Jen Lin,
Kuan-Ching Li, ―A Real-Time Hand Gesture
Recognition System for Daily Information Retrieval
from Internet, IEEE Fourth International Conference on
 Ubi-Media Computing, 978-0-7695-4493-9/11 © 2011.</li>
                        <li>M.M.Gharasuie, H.Seyedarabi, Real-time Dynamic
Hand Gesture Recognition using Hidden Markov
Models‖ , 8th Iranian Conference on Machine Vision and
Image Processing (MVIP), 2013 8th Iranian Conference
on Machine Vision and Image Processing (MVIP),
978-1-4673-6184-2/13</li>
                        <li>Zhou Ren, Junsong Yuan, JingjingMeng, Zhengyou
Zhang. ―Robust Part-Based Hand Gesture Recognition
 Using Kinect Sensor. IEEE Transactions on Multimedia,
 Vol.15, No.5, Augus</li>
                        <li>Nick C. Tang, Chiou-Ting Hsu, Chih-Wen Su, Timothy
K. Shih, and Hong-Yuan Mark Liao.Video Inpainting
on Digitized Vintage Films via Maintaining
Spatiotemporal Continuity‖ published at IEEE
TRANSACTIONS ON MULTIMEDIA, VOL. 13, NO.
4, AUGUST 2011.</li>
                        <li>N.Neelima , M.Arulvan, B. S Abdur, ―Object Removal
 by Region Based Filling Inpainting‖ . IEEE transaction
 978-1-4673-5301/2OI3 IEEE.</li>
                        <li>Jan Herling, and Wolfgang Broll, High - Quality
 Real -Time Video In painting with Pix Mix, IEEE
 TRANSACTIONS ON VISUALIZATION AND
 COMPUTER GRAPHICS,VOL.20, NO. 6, JUNE 2014.</li>
                        <li>Qing-Ge Ji ,Zhi-DangFang ,Zhen-HuaXie , Zhe-Ming Lu
 Video abstraction based on the visual attention model
 and online clustering . Published at Elsevier, Signal
 Processing: Image Communication 28 (2013)241–253
 in 2013.</li>
                        <li>Massimo Camplani , Carlos R. del Blanco , Luis Salgado
 , Fernando Jaureguizar , Narciso García, ―Multisensor
 background subtraction by fusing multiple region-based
 probabilistic classifiers‖, published at Elsevier Pattern
 Recognition Letters 2013.</li>
                        <li>Massimo Camplani , Luis Salgado, ―Background
 foreground segmentation with RGB-D Kinect data: An
 efficient combination of classifiers‖. published at
 Elsevier J. Vis. Commun. Image R. 25 (2014) 122–136.</li>
                        <li>Blanca Miriam Lee-Cosioa, Carlos Delgado-Mataa, Jesus
 Ibanezb. ―ANN for Gesture Recognition using
 Accelerometer Data. Elsevier Publications, Procedia
 Technology 3 (2012 ) 109 – 120.</li>
                        <li>Jino Lee, Dong-Kyu Lee, and Rae-Hong Park, A Robust
 Exemplar-Based Inpainting Algorithm Using
 Region Segmentation‖. IEEE Transactions on Consumer
 Electronics, Vol. 58, No. 2, May 2011</li>
                    </ol>
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
                    <b>Refrences: </b>
                    <ol>
                    <li>LIU JunHua, SHEN ZhongRu, GUO FuTian. The modern test
technology and system integration[M]. Bei Jing: Electronic Industry
Press, 2004.</li>
                    <li>LIU JunHua The virtual instrument design based on LabView. Bei Jing
Electronic Industry press, 2003.</li>
                    <li>SUN YiWen. Design of a Data Acquisition and Processing System
Based onLabVIEW[J]. Electrical Engineering.2010.1: 16-18</li>
                    <li>MENG Kai, CHEN XiaoHu. The design of the data acquisition system
based on LabVIEW[J].Technology of Computer Application. 2009,11
(36):35-37</li>
                    <li>WANG WenBin,WU WenYing,etc. Development of drive-programme
of DAQ of Non-NI Company in LanVIEW[J]. Electronic
Instrumentation Customer. 2005,12(1):76-77.</li>
                    <li>P. Alonso, J.A. Huidobro, I. Montes, M.L. Serrano, J Suárez,
"Desarrollo de una Plataforma de aprendizaje online de las materias
Matemáticas y Estadística 20", Congreso de Innovación Educativa en
las Ensefianzas Técnicas Las Palmas de Gran Canaria, 2012.</li>
                    <li>R. Fernández-García, I. Gil, "Una propuesta de utilización de la
plataforma educativa Moodle para la enseñanza de circuitos y
dispositivos electrónicos 20", Congreso de Innovación Educativa en las
Enseñanzas Técnicas Las Palmas de Gran Canaria, 2012</li>
                    <li>Renganathan, Gopalakrishnan. (2015). Design and Control of 3-DOF
Articulated Robotic Arm using LabVIEW and NI-myRIO.
INTERNATIONAL JOURNAL OF INNOVATIVE RESEARCH IN
ELECTRICAL, ELECTRONICS, INSTRUMENTATION AND
CONTROL ENGINEERING. 3. 5. 10.17148/IJIREEICE.2015.3342.</li>
                    <li>H. J. Böhme, T. Wilhelm, J. Key, C. Schauer, C. Schröter, H. M. Groß,
T. Hempel, "An approach to multi-modal human-machine interaction
for intelligent service robots", Robotics and Autonomous Systems,
Volume 44, Issue 1, Pages 83-96, ISSN 0921-8890, 31 July 2003</li>
                    <li>A. Treptow, G. Cielniak, T. Duckett, "Real-time people tracking for
mobile robots using thermal vision", Robotics and Autonomous Systems, 54, pp. 729-739, 2006.</li>
                    </ol>
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
