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
                    <b>Refrences: </b>
                    <ol>
                        <li>Ali Mubarakov and et.al. "Assistive healthcare home monitoring
system for elderly people" IEEE Int. Conf. on Appl of Informtin &
Comm Tech, 2016.</li>
                        <li>Rainer Lutze and et.al., “Personal Health Assistne for Elderly people
via Smartwatch based motin Analysis", IEEE Int. Conf on Healthcare
informatics, 2017.</li>
                        <li>Dr.K.Srihari and et.al, “Automatic Battry Replacemnt of Robot”,
Advncs in Naturl & Applid Scincs, vol 9, pp.33-38, 2015.</li>
                        <li>Yu-Fan and et.al. ”Home monitoring system based internet of things”,
IEEE Int. conf. on Applied System Innvacatn, 2018.</li>
                        <li>Dr.P.Vetrivelan and et.al, “A Neurl Netwrk based Autmatc crop
monitoring Robot for Agriultre”, The IoT and the Next Revolions
Autating the World, pp.203-212, 2019.</li>
                        <li>Dr.S.Santhi and et.al, “SoS Emgency Ad-Hoc Wireles Net”,
Computatonl Intellience & Sustainable Systems (CISS), EAI/Springer
Innvtn. in Comm. & Comptng, pp.227-234, 2019.</li>
                        <li>Ahmed Abatal and et.al., “A Semantic Smart Intercnneed Healthcre
using Ontology & Could Computing”, IEEE Int. Conf, 2017.</li>
                        <li>T.Kanagaraj and et.al, “Foot Pressure Measremnt by using ATMEGA
164 Microcontrlr”, Advances in Natural & Applied Sciencs, vol 10,
pp.224-228, 2016,</li>
                        <li>Duraisamy Sathya and et.al., “Secured Remte Health Monitorig Sys”,
IEEE Int conf, 2017.</li>
                        <li>Bharat Bhusan Singh and et.al, “GSM Based Automatic Pill
Dispenser”, Int. Jurnl of Engg Science & Comptng, 2017.</li>
                        <li>A. Selvanayakam and et.al.. "Health Monitoring Sys. using IoT",
Springer Science and Business Media LLC, 2020.</li>
                        <li>P.Vetrivelan, and et.al “Design of Smart Surveillance Security Sys
based on Wireles Sensor Network”, Int. Jornl of Resarch Studies in
Science, Engg & Tech, vol 4, Issue 5, 2017, pp.23-26.</li>
                        <li>N.Prakash and et.al, “Arduino based traffic congestion control with
automatic signal clearance for emergency vehicles & stolen vehicle
detection”, Proc. of IEEE Int. Conf on Comptng, Comm & Informatics,
Coimbatore, 2020.</li>
                        <li>K.Srihari and et.al. “Implementan of Alexa based Intellignt Voice
Response Sys for Smart Campus”, Innotns in Electricl & Electroncs
Engg, Lecture Notes in Electrical Engineering (LNEE) series, vol 626,
Issue 1, 2020, pp.849-855.</li>
                        <li>Prakash N., Udayakumar E., Kumareshan N., Gowrishankar R. (2021)
GSM-Based Design and Implementation of Women Safety Device
Using Internet of Things. In: Peter J., Fernandes S., Alavi A. (eds)
Intelligence in Big Data Technologies- Beyond the Hype. Advances in
Intelligent Systems and Computing, vol 1167. Springer, Singapore.</li>
                        <li>Ankit Tejbahadur Yadav and et.al, “Smart Medical Box”, International
Research Journal of Engineering and Technology, 2018.</li>
                        <li>T.Kanagaraj and et.al, “Control of Home appliances by smart
application using SEAP Protocol”, Intellignce in Big Data Technologes-Beyond the Hype, Advances in Intellignt Sys &
Computng, vol 1119, Issue 1, 2020, pp.603-610.</li>
                        <li>Yogeshwaran.K and et.al, (2020). “An Enhanced Face & Iris
Recognition based New Generatin Security Sys.”, Computng, Comm
& Cyber-Security, Lecture Notes in Networks & Sys, vol 121, issue 1,
pp.845-855</li>
                        <li>Tamilselvan and et.al, (2020) “A Smart Indtril Pollution Detectin &
Monitoring using Internt of Things (IoT)”, Futuristic Trends in Net &
Comm. Techges, Comm. in Computer & Informatin Sci, vol 1206,
Issue 1, pp.233-242.</li>
                        <li>Linkous, Lauren and et.al. (2019). Health Monitoring in Smart Homes
Utilizing IoT.</li>
                        <li>P.H.Tsai and et.al. “Smart Medication Dispenser: Design, Architecture
and Implementation”, IEEE Int. Conf, 2016.</li>
                        <li>Deepti Ameta and et.al, “Medication Reminder & Healthcare-An
Android App.”, Int. Jurnl of Managing Public Sector Information &
Comm Techges. 2015.</li>
                        <li>Talal, M and et al. Smart Home-based IoT for Real-time & Secure
Remote Health Monitoring of Triage & Priority Sys. using Body
Sensors: Multi-driven Systematic Review. J Med Syst 43, 42 (2019).</li>
                        <li>Kadhim, K.T and. et al. An Overview of Patient’s Health Status
Monitoring System Based on Internet of Things (IoT). Wireless Pers
Commun (2020).</li>
                        <li>N. Prakash and et.al. Design and development of Android based Plant
disease detection using Arduino. 7th International Conference on
Smart Structures and Systems (ICSSS), India, 2020, pp. 1-6, (2020).</li>
                        <li>H. N. Saha, and et.al., "Internet of Thing based healthcare monitorig
sys" IEEE Annual Information Tech, Electronics & Mobile Comm
Conf, Vancouver, 2017, pp. 531-535</li>
                        <li>M.Ramesh and et.al.: An Innovative Approach for Face Recognition
Using Raspberry Pi, Artificial Intelligence Evolution, Universal Wiser
publisher, vol 1, issue 2, pp.103-108, (2020).</li>
                        <li>S. Tamilselvan and et.al. Development of Artificial Intelligence based
assessment writing Robot for disable people. 7th International
Conference on Smart Structures and Systems (ICSSS), India, pp. 1-6,
(2020).</li>
                        <li>D. A. M. Budida and R. S. Mangrulkar, "Design and implementation of
smart HealthCare system using IoT," 2017 International Conference on
Innovations in Information, Embedded and Communication Systems
(ICIIECS), Coimbatore, 2017, pp. 1-7.</li>
                        <li>V. Vippalapalli and S. Ananthula, "Internet of things (IoT) based smart
health care system," 2016 International Conference on Signal
Processing, Communication, Power and Embedded System
(SCOPES), Paralakhemundi, 2016, pp. 1229-1233</li>
                        <li>Islam, M.M., Rahaman, A. & Islam, M.R. Development of Smart
Healthcare Monitoring System in IoT Environment. SN COMPUT.
SCI. 1, 185 (2020).</li>
                        <li>L. Linkous, N. Zohrabi and S. Abdelwahed, "Health Monitoring in
Smart Homes Utilizing Internet of Things," 2019 IEEE/ACM
International Conference on Connected Health: Applications, Systems
and Engineering Technologies (CHASE), Arlington, VA, USA, 2019,
pp. 29-34,</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 1-6</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br>
                <p>Nishanthi, P, Udayakumar, E, Vaishnavi, M, & Srihari, K. (2020). Design of smart Home monitoring healthcare system using Internet of things. Innovative computing and communication: an international journal, 2(1), 1–5.<br> http://doi.org/10.5281/zenodo.4743804</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Shaukat, F., Raja, G. and Frangi, A.F., 2019. Computer-aided detection
of lung nodules: a review. Journal of Medical Imaging, 6(2), p.020901.</li>
                        <li>Narayanan, B.N., Hardie, R.C., Kebede, T.M. and Sprague, M.J., 2019.
Optimized feature selection-based clustering approach for
computer-aided detection of lung nodules in different
modalities. Pattern Analysis and Applications, 22(2), pp.559-571.</li>
                        <li>B.V. Ginneken, B. M. Romeny and M. A. Viergever, “Computer-aided
diagnosis in chest radiography: a survey”, IEEE, transactions on
medical imaging, vol. 20, no. 12, (2001).</li>
                        <li>D. Lin and C. Yan, “Lung nodules identification rules extraction with
neural fuzzy network”, IEEE, Neural Information Processing, vol.
4,(2002).</li>
                        <li>Linda G. Shapiro and G.C. Stockman., Computer Vision: Theory and
Applications. 2001: Prentice Hall.</li>
                        <li>B. Magesh, P. Vijaylakshmi, M. Abhiram, “Computer aided Diagnosis
System for identification and classification of Lessions in Lungs”,
International Journal of Computer Trends and TechnologyMay to June
Issue 2011.</li>
                        <li>Shariaty, F. and Mousavi, M., 2019. Application of CAD systems for
the automatic detection of lung nodules. Informatics in Medicine
Unlocked, 15, p.100173.</li>
                        <li>Capuano, R., Catini, A., Paolesse, R. and Di Natale, C., 2019. Sensors
for lung cancer diagnosis. Journal of Clinical Medicine, 8(2), p.235.</li>
                        <li>Nasser, I.M. and Abu-Naser, S.S., 2019. Lung Cancer Detection Using
Artificial Neural Network. International Journal of Engineering and
Information Systems (IJEAIS), 3(3), pp.17-23.</li>
                        <li>Wang, S., Yang, D.M., Rong, R., Zhan, X., Fujimoto, J., Liu, H.,
Minna, J., Wistuba, I.I., Xie, Y. and Xiao, G., 2019. Artificial
intelligence in lung cancer pathology image analysis. Cancers, 11(11),
p.1673.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 7-10</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br>
                <p>Shankar, K. (2020). Computer Aided Diagnosis Model for Lung Cancer Prediction using Gabor Filtering with Artificial Neural Networks. Innovative computing and communication: an international journal, 2(1), 7–9.<br> http://doi.org/10.5281/zenodo.4743812</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>L. Finžgar and M. Trebar, "Use of NFC and QR code identification in
an electronic ticket system for public transport," SoftCOM 2011, 19th
InternationalConference on Software, Telecommunications and
Computer Networks, Split, 2011, pp. 1-6.</li>
                        <li>R. Couto, J. Leal, P. M. Costa and, T. Galvão, "Exploring Ticketing
Approaches Using Mobile Technologies: QR Codes, NFC and BLE,"
2015 IEEE 18th International Conference on Intelligent
Transportation Systems, Las Palmas, 2015, pp. 7-12.DOI:
10.1109/ITSC.2015.9</li>
                        <li>Jagodic, Dijana & Vujicic, Dejan & Ranđić, Siniša. (2015). Android
system for identification of objects based on QR code. 922-925.
10.1109/TELFOR.2015.7377616.</li>
                        <li>Abdulhakeem, Wara & Dugga, Sunday. (2014). Enhancing User
Experience using Mobile QR-Code Application. International Journal
of Computer and Information Technology. 03. 1310-1315.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 11-16</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br>
                <p>Arya, Ashima, Juneja, Sapna, &Juneja, Abhinav. (2020). One QR code for Ticketing System. Innovative computing and communication: an international journal, 2(1), 11–15.<br> http://doi.org/10.5281/zenodo.4743817</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>G.K.M Cheung, S. Baker, J. Hodgins, and T. Kanade
(2004). “Markerless human motion transfer.” In 3D Data
Processing, Visualization, and Transmission, 2004.
3DPVT, 2004; Proceedings. 2nd International Symposium
.pp. 373–378. IEEE, 2004.</li>
                        <li>D. Casas, M. Volino, J. Collomosse (2014). 4D Video
Textures for Interactive Character Appearance. Computer
Graphics Forum (Proceedings of EUROGRAPHICS),
Vol. 33, Issue 2, pp. 371–380.</li>
                        <li>S. Tulyakov, M. Liu, X. Yang, and J. Kautz (2018).
MoCoGAN: Decomposing motion and content for video
generation. IEEE Conference on Computer Vision and
Pattern Recognition (CVPR)</li>
                        <li>R. Villegas, J. Yang, D Ceylan, and H. Lee(2018).
“Neural kinematic networks for unsupervised motion
retargeting.” The IEEE Conference on Computer Vision
and Pattern Recognition (CVPR).</li>
                        <li>K. Aberman, M. Shi, J. Liao, D. Liscbinski, and B.
Chen (2019). “Deep video-based performance cloning. In
Computer Graphics” Forum, Vol. 38, pp. 219–233. Wiley
Online Library.</li>
                        <li>A. Bansal, S. Ma, D. Ramanan, and Y. Sheikh(2018).
Recycle-gan: Unsupervised video retargeting. In ECCV.</li>
                        <li>A. Efros, A. Berg, G. Mori, and J. Malik (2003).
Recognizing action at a distance. In IEEE International
Conference on Computer Vision, pp. 726–733, Nice,
France.</li>
                        <li>A. Toshev, and C. Szegedy (2014) . Deeppose:
Human pose estimation via deep neural networks. In
CVPR.</li>
                        <li>C. Chou, J. Chien and H. Chen(2018).
"Self-Adversarial Training for Human Pose Estimation,"
2018 Asia-Pacific Signal and Information Processing
Association Annual Summit and Conference (APSIPA
ASC), Honolulu, HI, USA, pp. 17-30</li>
                        <li>W. Yang, W. Ouyang, X. Wang, J. Ren, H. Li and X.
Wang(2018) "3D Human Pose Estimation in the Wild by
Adversarial Learning," 2018 IEEE/CVF Conference on
Computer Vision and Pattern Recognition, Salt Lake City,
UT, pp. 5255-5264.</li>
                        <li>Hidalgo, Gines, Yaser Sheikh, Kris M. Kitani,
Aayush Bansal, Ramon Sanabria, Donglai Xiang, Xiu Li,
and Haroon Idrees(2019) “OpenPose: Whole-Body Pose
Estimation.”</li>
                        <li>Chen, Xu, Jie Song, and Otmar Hilliges (2019)
“Unpaired Pose Guided Human Image Generation.” ArXiv
abs/1901.02284 (2019).</li>
                        <li>Cao, Zhe, Gines Hidalgo Martinez, Tomas Simon,
Shih-En Wei, and Yaser Sheikh(2018). “OpenPose:
Realtime Multi-Person 2D Pose Estimation using Part
Affinity Fields.” IEEE transactions on pattern analysis
and machine intelligence.</li>
                        <li>Y. Zhou, Z. Wang, C. Fang, T. Bui, and T. Berg
(2019). “Dance generation: Motion transfer for internet
videos.” arXiv preprint arXiv:1904.00129 .</li>
                        <li>L. Liu, W. Xu, M. Zollhofer, H. Kim, F. Bernard, M.
Habermann, W. Wang, and C. Theobalt (2019) “Neural
rendering and reenactment of human actor videos.” ACM
Trans. Graph., Vol. 38, Issue 5,pp. 139:1–139:14 .</li>
                        <li>Ting-Chun Wang, Ming-Yu Liu, Jun-Yan Zhu,
Andrew Tao, Jan Kautz, and Bryan Catanzaro.
"High-Resolution Image Synthesis and Semantic
Manipulation with Conditional GANs," in CVPR, 2018.</li>
                        <li>Jun-Yan Zhu, Taesung Par*, Phillip Isola, and
                        Alexei A. Efros(2017) "Unpaired Image-to-Image
                        Translation using Cycle-Consistent Adversarial
                        Networks" in IEEE International Conference on Computer
                        Vision (ICCV), .</li>
                        <li>Taeksoo Kim, Moonsu Cha, Hyunsoo Kim, Jung
Kwon Lee, and Jiwon Kim. (2017). Learning to discover
cross-domain relations with generative adversarial
networks. In Proceedings of the 34th International
Conference on Machine Learning – Vol. 70 (ICML'17),
Doina Precup and Yee Whye Teh (Eds.), Vol. 70.
JMLR.org ,pp. 1857-1865.</li>
                        <li>Ma, Liqian & Jia, Xu & Sun, Qianru & Schiele,
Bernt & Tuytelaars, Tinne & Van Gool, Luc. (2017). Pose
Guided Person Image Generation.</li>
                        <li>Feng Xu, Liu, Carsten Stoll, Gaurav Bhara, James
Tompkin, Qionghai Dai, Hans-Peter Seidel, Jan Kautz,
and Theobalt (2011). Video-based characters: creating
new human performances from a multi-view video
database. In ACM Transactions with Graphics (TOG),
volume 30, page 32. ACM.</li>
                        <li>Dan Casas, Marco Volino, John Collomosse, and
Adrian Hilton. 4D Video Textures for Interactive
Character Appearance. Computer Graphics Forum</li>
                        <li>Y. Liu, and O. Tuzel (2016). Coupled generative
adversarial networks. In NIPS .</li>
                        <li>D. Wei, X. Xu, H. Shen, and K. Huang.
(2020).GAC-GAN: A General Method for
Appearance-Controllable Human Video Motion Transfer.</li>
                        <li>A. Shrivastava, T. Pfister, O. Tuzel, J. Susskind, W.
Wang. (2017) Learning from Simulated and Unsupervised
Images through Adversarial Training.</li>
                        <li>P. Isola Jun-Yan Zhu T. Zhou and A. Efros(2018).
Image-to-Image Translation with Conditional Adversarial
Networks.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 17-24</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br>
                <p>Sharma, Moolchand, Sharma, Prerna, Jha, Manish Kumar, & Singh, Rohan. (2020). MOTION TRANSFER IN VIDEOS USING DCGAN. Innovative computing and communication: an international journal, 2(1), 17–24.<br> http://doi.org/10.5281/zenodo.4743820</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>S. Chen, B. Mulgrew, and P. M. Grant, “A clustering technique
for digital communications channel equalization using radial
basis function networks,” IEEE Trans. on Neural Networks,
vol. 4, pp. 570-578, July 1993.</li>
                        <li>J. U. Duncombe, “Infrared navigation—Part I: An assessment
of feasibility,” IEEE Trans. Electron Devices, vol. ED-11, pp.
34-39, Jan. 1959.</li>
                        <li>C. Y. Lin, M. Wu, J. A. Bloom, I. J. Cox, and M. Miller,
“Rotation, scale, and translation resilient public watermarking
for images,” IEEE Trans. Image Process., vol. 10, no. 5, pp.
767-782, May 2001.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 25-30</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br>
                <p>Ilayaraja, M. (2020). An Improved K-Means Clustering with Machine Learning Based Sentiment Analysis and Classification Model. Innovative computing and communication: an international journa, 2(1), 25–29.<br> http://doi.org/10.5281/zenodo.4743822</p>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
