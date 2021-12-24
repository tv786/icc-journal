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
            <b>Vol. 2, Issue 2, October/November 2020 </b>{" "}
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
                        window.open("2020oct-1.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                     ConvPose : Application of CNN for Estimating Human Poses
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Vividha, Anjali Khandelwal, Anubhav Singh, Preeti Nagrath, Narina Thakur
                </h5>
                <h5>
                  <b>Abstract: </b> Human pose estimation has always been a chal- lenging problem, especially in  the  detection  of  human  joints  in the various body poses in  order  to  get  a  posture  frame.  This trend leads to several architectures and models that are computationally expensive and require costly pre-training of datasets and hardware equipment, also it leads problem in comparing other techniques with replicate existing outcomes. Therefore,toresolvethisissue,thispaper,discussesthechallenges faced in detecting human joints and give an overview of the substantial research work done in this area. In this paper, an efficient CNN-based regression model has been developed that can easily be trained on mid-run  inimi GPU towards estimation of body key points and identifying the joints that result in low loss value, for the estimation of the MPII dataset and its sub-regions. This technique shows consistent improvement over the dataset where the data was curated and crafted as per the needs. The dataset images were cropped to increase the focus on the humans in the images. This paper modifies the images excluding the not required background details, thus only training the human body image pixels in the proposed network.  The paper  alsoshows the results obtained by the proposed model with the modelled dataset.

                </h5>
                <h5>
                    <b>Refrences: </b>
                    <ol>
                        <li>H. Zhang, H. Ouyang, S. Liu, X. Qi, X. Shen, R. Yang, and J. Jia, “Human pose estimation with spatial contextual information,” arXivpreprint arXiv:1901.01760,2019.</li>

                        <li>F.Xiong, Y. Xiao, Z. Cao, K.Gong,Z.Fang,andJ.T.Zhou,“Good practices on building effective cnn baseline model for person re-identification,” in Tenth International Conference on Graphics and Image Processing (ICGIP 2018), vol. 11069. International Society for OpticsandPhotonics,2019,p.110690I.</li>

                        <li>M. Hein, M. Andriushchenko, and J. Bitterwolf, “Why relunetworks yield high-confidence predictions far away from the training data and how to mitigate the problem,” in Proceedings of the IEEE Conference onComputerVisionandPatternRecognition,2019,pp.41–50.</li>

                        <li>[Online].	Available:	https://www.cs.ubc.ca/	lsi- gal/Publications/SigalEncyclopediaCVdraft.pdf</li>

                        <li>J. Carreira, P. Agrawal, K. Fragkiadaki, and J. Malik, “Human pose estimation with iterative error feedback,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2016, pp. 4733– 4742.</li>

                        <li>T. Durand, N. Mehrasa, and G. Mori, “Learning a deep convnet for multi-label classification with partial labels,” in Proceedings of theIEEE ConferenceonComputerVisionandPatternRecognition,2019,pp.647– 657.</li>

                        <li>L. Pishchulin, E. Insafutdinov, S. Tang, B. Andres, M. Andriluka, P. V. Gehler, and B. Schiele, “Deepcut: Joint subset partition and labeling for multi person pose estimation,” in Proceedings of the IEEE Conference onComputerVisionandPatternRecognition,2016,pp.4929–4937.</li>

                        <li>S.-E. Wei, V. Ramakrishna, T. Kanade, and Y. Sheikh, “Convolutional pose machines,” in Proceedings of the IEEE Conference on Computer VisionandPatternRecognition,2016,pp.4724–4732.</li>

                        <li>J. Tompson, R. Goroshin, A. Jain, Y. LeCun, and C. Bregler, “Efficient object localization using convolutional networks,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 2015, pp.648–656.</li>

                        <li>E. Insafutdinov, L. Pishchulin, B. Andres, M. Andriluka, and B. Schiele, “Deepercut: A deeper, stronger, and faster multi-person pose estimation model,” in European Conference on Computer Vision. Springer, 2016, pp.34–50.</li>

                        <li>L. Hansen, M. Siebert, J. Diesel, and M. P. Heinrich, “Fusing informa- tion from multiple 2d depth cameras for 3d human pose estimation inthe operating room,” International journal of computer assisted radiology and surgery, pp. 1–9,2019.</li>

                        <li>S. Liu, Y. Yin, and S. Ostadabbas, “In-bed pose estimation: Deep learningwithshallowdataset,”IEEEjournaloftranslationalengineering inhealthandmedicine,vol.7,pp.1–12,2019.</li>

                        <li>P. Sermanet, D. Eigen, X. Zhang, M. Mathieu, R. Fergus, and Y. Le- Cun, “Overfeat: Integrated recognition, localization and detection using convolutional networks,” arXiv preprint arXiv:1312.6229,2013.</li>

                        <li>A. Bearman and C. Dong, “Human pose estimation and activity classi- fication using convolutional neural networks,” CS231n Course Project Reports,2015.</li>

                        <li>L. Pishchulin, M. Andriluka, P. Gehler, and B. Schiele, “Poseletcondi- tioned pictorial structures,” in Proceedings of the IEEE Conference on ComputerVisionandPatternRecognition,2013,pp.588–595.</li>

                        <li>A. Toshevand C. Szegedy, “Deeppose: Human pose estimation via deep neural networks,” in Proceedings of the IEEE conference on computer visionandpatternrecognition,2014,pp.1653–1660.</li>

                        <li>A. Nibali, Z. He, S. Morgan, and L. Prendergast, “3d human pose estimationwith2dmarginalheatmaps,”in2019IEEEWinterConference on Applications of Computer Vision (WACV). IEEE, 2019, pp. 1477– 1485.</li>

                        <li>X. Zhou, M. Zhu, G. Pavlakos, S. Leonardos, K. G. Derpanis,and
                        K. Daniilidis, “Monocap: Monocular human motion capture using a cnn coupled with a geometric prior,” IEEE transactions on pattern analysis and machine intelligence, vol. 41, no. 4, pp. 901–914, 2018.
                        </li>

                        <li>G. Rogez, P. Weinzaepfel, and C. Schmid, “Lcr-net++: Multi-person 2d and 3d pose detection in natural images,” IEEE transactions on pattern analysis and machine intelligence,2019.</li>

                        <li>Agarwal, A., Triggs, B.: Recovering 3d human pose from monocular images. IEEE transactions on pattern analysis and machine intelligence 28(1) (2006) 44–58</li>

                        <li>Ionescu, C., Li, F., Sminchisescu, C.: Latent structured models for human pose estimation. In: 2011 International Conference on Computer Vision, IEEE (2011) 2220–222</li>

                        <li>Shotton, J., Sharp, T., Kipman, A., Fitzgibbon, A., Finocchio, M., Blake, A., Cook, M., Moore, R.: Real-time human pose recognition in parts from single depth images. Communications of the ACM 56(1) (2013) 116–124</li>

                        <li>Li, S., Chan, A.B.: 3d human pose estimation from monocular images with deep convolutional neural network. In: Asian Conference on Computer Vision, Springer (2014) 332–347</li>

                        <li>Li, S., Zhang, W., Chan, A.B.: Maximum-margin structured learning with deep networks for 3d human pose estimation. In: Proceedings of the IEEE International Conference on Computer Vision. (2015) 2848–2856</li>

                        <li>Tekin, B., Katircioglu, I., Salzmann, M., Lepetit, V., Fua, P.: Structured prediction of 3d human pose with deep neural networks. arXiv preprint arXiv:1605.05180 (2016)</li>

                        <li>Zhou, X., Zhu, M., Leonardos, S., Derpanis, K.G., Daniilidis, K.: Sparseness meets deepness: 3d human pose estimation from monocular video. In: The IEEE Conference on Computer Vision and Pattern Recognition (CVPR). (June 2016)</li>

                        <li>G. Pons-Moll, D. J. Fleet, and B. Rosenhahn. Posebits for monocular human pose estimation. In IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 2337–2344, 2014.</li>

                        <li>C. Ionescu, J. Carreira, and C. Sminchisescu. Iterated second-order label sensitive pooling for 3d human pose estimation. InIEEEConferenceonComputerVisionandPattern Recognition (CVPR), pages 1661–1668, 2014.</li>

                        <li>B. Tekin, A. Rozantsev, V. Lepetit, and P. Fua. Direct Prediction of 3D Body Poses from Motion Compensated Sequences. In IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016.</li>

                        <li>Y. Yu, F. Yonghao, Z. Yilin, and W. Mohan. Marker-less 3DHumanMotionCapturewithMonocularImageSequence andHeight-Maps. InEuropeanConferenceonComputerVision (ECCV), 2016.</li>

                        <li>X. Zhou, X. Sun, W. Zhang, S. Liang, and Y. Wei. Deep kinematicposeregression. InECCVWorkshoponGeometry Meets Deep Learning, 2016.</li>

                        <li>H. J. Lee and Z. Chen. Determination of 3D human body postures from a single view. Computer Vision, Graphics and Image Processing, 30:148–168, 1985.</li>

                        <li>H. Jiang. 3d human pose reconstruction using millions of exemplars. In ICPR, pages 1674–1677, Aug 2010.</li>

                        <li>A. Gupta, J. Martinez, J. J. Little, and R. J. Woodham. 3D Pose from Motion for Cross-view Action Recognition via Non-linear Circulant Temporal Encoding. In CVPR, 2014.</li>

                        <li>I. Akhter and M. J. Black. Pose-conditioned joint angle limits for 3D human pose reconstruction. In CVPR, 2015.</li>

                        <li>G. Pavlakos, X. Zhou, K. G. Derpanis, and K. Daniilidis. Coarse-to-ﬁne volumetric prediction for single-image 3D human pose. In CVPR, 2017.</li>

                        <li>A. Newell, K. Yang, and J. Deng. Stacked hourglass networks for human pose estimation. In ECCV, 2016.</li>

                        <li>F. Moreno-Noguer. 3d human pose estimation from a single image via distance matrix regression. In CVPR, 2017.</li>

                        <li>F. Bogo, A. Kanazawa, C. Lassner, P. Gehler, J. Romero, and M. J. Black. Keep it SMPL: Automatic Estimation of 3D Human Pose and Shape from a Single Image. In European Conference on Computer Vision, 2016.</li>

                        <li>C. Ionescu, D. Papava, V. Olaru, and C. Sminchisescu. Human3.6M: Large Scale Datasets and Predictive Methods for 3D Human Sensing in Natural Environments. IEEE Transactions on Pattern Analysis and Machine Intelligence, 36(7):1325–1339, 2014.</li>

                        <li>A. Agudo, J. M. M. Montiel, B. Calvo, and F. MorenoNoguer. Mode-Shape Interpretation: Re-Thinking Modal Space for Recovering Deformable Shapes. In Winter Conference on Applications of Computer Vision, 2016.</li>

                        <li>A. Kloczkowski, R. L. Jernigan, Z. Wu, G. Song, L. Yang, A. Kolinski, and P. Pokarowski. Distance Matrix-based Approach to Protein Structure Prediction. Journal of Structural and Functional Genomics, 10(1):67–81, 2009.</li>

                        <li>P. Biswas, T. Liang, K. Toh, T. Wang, and Y. Ye. Semideﬁnite Programming Approaches for Sensor Network Localization With Noisy Distance Measurements. IEEE Transactions on Automation Science and Engineering, 3:360–371, 2006.</li>

                        <li>J. Porta, L. Ros, F. Thomas, and C. Torras. A Branch-andPrune Solver for Distance Constraints. IEEE Transactions on Robotics, 21:176–187, 2005.</li>

                        <li>D. Smeets, J. Hermans, D. Vandermeulen, and P. Suetens. Isometric Deformation Invariant 3D Shape Recognition. Pattern Recognition, 45(7):2817–2831, 2012.</li>

                        <li>I. Borg and P. Groenen. Modern Multidimensional Scaling: Theory and Applications. Springer, 2005.</li>

                        <li>S. Zufﬁ and M. J. Black. The stitched puppet: A graphical model of 3D human shape and pose. In CVPR, 2015.</li>

                        <li>W. Chen, H. Wang, Y. Li, H. Su, Z. Wang, C. Tu, D. Lischinski, D. Cohen-Or, and B. Chen. Synthesizing training images for boosting human 3D pose estimation. In 3DV, 2016.</li>

                        <li>S. Huang and D. Ramanan. Expecting the unexpected: Training detectors for unusual pedestrians with adversarial imposters. In CVPR, 2017.</li>

                        <li>H. Hattori, V. N. Boddeti, K. M. Kitani, and T. Kanade. Learning scene-speciﬁc pedestrian detectors without real data. In CVPR, 2015.</li>

                        <li>M. Enzweiler and D. M. Gavrila. A mixed generativediscriminative framework for pedestrian classiﬁcation. In CVPR, 2008.</li>

                        <li>A. Hornung, E. Dekkers, and L. Kobbelt. Character animation from 2D pictures and 3D motion data. ACM Trans. Graph., 26(1), 2007.</li>

                        <li>L. Pishchulin, A. Jain, M. Andriluka, T. Thormählen, and B. Schiele. Articulated people detection and pose estimation: Reshaping the future. In CVPR, 2012.</li>

                        <li>D. Park and D. Ramanan. Articulated pose estimation with tiny synthetic videos. In CVPR ChaLearn Looking at People Workshop, 2015.</li>

                        <li>D. C. Luvizon, D. Picard, and H. Tabia, “2d/3d pose estimation and action recognition using multitask deep learning,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 2018, pp.5137–5146.</li>

                        <li>M. Andriluka, U. Iqbal, E. Insafutdinov, L. Pishchulin, A. Milan, J. Gall, and B. Schiele, “Posetrack: A benchmark for human pose estimationand tracking,” in Proceedings of the IEEE Conference on Computer Vision andPatternRecognition,2018,pp.5167–5176.</li>

                        <li>[Online]. Available:http://human-pose.mpi-inf.mpg.de/</li>

                        <li>J. Redmon, S. Divvala, R. Girshick, and A. Farhadi, “You only look once: Unified, real-time object detection,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2016, pp. 779– 788.</li>

                        <li>A.Camero,J.Toutouh,andE.Alba,“Aspecializedevolutionarystrategy using mean absolute error random sampling to design recurrent neural networks,” arXiv preprint arXiv:1909.02425,2019.</li>

                    </ol>
                </h5>
                <h5>
                  <b>Pages: 1-9</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Vividha, Anjali Khandelwal, Anubhav Singh, Preeti Nagrath, Narina Thakur (2020). ConvPose: Application of CNN for Estimating Human Poses. Innovative computing and communication: an international journal.<br/> http://doi.org/10.5281/zenodo.4743804</p>
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
                        window.open("2020oct-2.pdf");
                      }}
                      target="_blank"
                      style={{ color: "#1565d4" }}
                    >
                      {" "}
                      Automated Detection & Classification of Pneumonia & Tuberculosis using Chest X-Ray Images
                    </a>{" "}
                  </b>
                </h4>
                <h5>
                  <b>Author(s): </b> Vividha, Soham Taneja, Preeti Nagrath, Rachna Jain
                </h5>
                <h5>
                  <b>Abstract: </b> Pneumonia and tuberculosis are leading causes of death in children and the elderly.Furthermore, the fact that despite being curable with proper treatment the numbers of deaths by these diseases are high. In a country with such a large population, the smaller number of doctors is a problem due to which the diagnosis of these diseases is not that accurate and often flawed. Our research proposes a deep learning based model to classify and detect pneumonia and tuberculosis using Convolutional Neural Networks. The dataset used for Pneumonia consists of chest x-rays of 1 - 5 years of age from Guangzhou women and children’s medical center, Guangzhou, consisting of 5,863 images and for tuberculosis contains 662 chest x-rays. Our model detected pneumonia with an accuracy and recall percentage of 91% while the accuracy achieved in detecting tuberculosis is 87% with a recall percentage of 88%..
                </h5>
                <h5>
                    <b>Refrences: </b>
                    <ol>
                        <li>Ruuskanen O, Lahti E, Jennings LC, Murdoch DR (April 2011). "Viral pneumonia". Lancet. 377 (9773): 1264–75.</li>

                        <li>Lodha R, Kabra SK, Pandey RM (June 2013). "Antibiotics for community-acquired pneumonia in children". The Cochrane Database of Systematic Reviews.</li>

                        <li>George, Ronald B. (2005). Chest medicine: essentials of pulmonary and critical care medicine (5th ed.). Philadelphia: Lippincott Williams & Wilkins. p. 353.</li>

                        <li>McLuckie, A., ed. (2009). Respiratory disease and its management. New York: Springer. p. 51.</li>

                        <li>Mandell LA, Wunderink RG, Anzueto A, Bartlett JG, Campbell GD, Dean NC, Dowell SF, File TM, Musher DM, Niederman MS, Torres A, Whitney CG (March 2007). "Infectious Diseases Society of America/American Thoracic Society consensus guidelines on the management of community-acquired pneumonia in adults". Clinical Infectious Diseases. 44 Suppl 2 (Suppl 2): S27–72.</li>

                        <li>Lim WS, Baudouin SV, George RC, Hill AT, Jamieson C, Le Jeune I, Macfarlane JT, Read RC, Roberts HJ, Levy ML, Wani M, Woodhead MA (October 2009). "BTS guidelines for the management of community acquired pneumonia in adults: update 2009". Thorax. 64 Suppl 3 (Suppl 3): iii–155.</li>

                        <li>Elena, Prina; Otavio, T Ranzani; Anthoni, Torres (12 August 2015). "Community-acquired pneumonia". The Lancet. 386 (9998): 1097–1108.</li>

                        <li>Rudan I, Boschi-Pinto C, Biloglav Z, Mulholland K, Campbell H (May 2008). "Epidemiology and etiology of childhood pneumonia". Bulletin of the World Health Organization. 86 (5): 408–16.</li>

                        <li>WHO (June 1999). "Pneumococcal vaccines. WHO position paper".ReleveEpidemiologiqueHebdomadaire. 74 (23): 177–83.</li>

                        <li>"Global tuberculosis report". World Health Organization (WHO). Retrieved 9 November 2017.</li>

                        <li>Nicas M, Nazaroff WW, Hubbard A (March 2005). "Toward understanding the risk of secondary airborne infection: emission of respirable pathogens". Journal of Occupational and Environmental Hygiene.2 (3): 143–54.</li>

                        <li>Dolin, [edited by] Gerald L. Mandell, John E. Bennett, Raphael (2010). Mandell, Douglas, and Bennett's principles and practice of infectious diseases (7th ed.). Philadelphia, PA: Churchill Livingstone/Elsevier. p. Chapter 250</li>

                        <li>TB Statistics for India. (2012). TB Facts. Retrieved April 3, 2013, from http://www.tbfacts.org/tb-statistics-india.html</li>

                        <li>"India records 2.15m new TB patients in 2018". The Nation. 2019-03-26. Retrieved 2019-03-27.</li>

                        <li>Sachdeva, Kuldeep Singh et al. “New vision for Revised National Tuberculosis Control Programme (RNTCP): Universal access - "reaching the un-reached".” The Indian journal of medical research vol. 135,5 (2012): 690-4.</li>

                        <li>Rajpurkar P, Irvin J, Zhu K, Yang B, Mehta H, Duan T, Ding D, Bagul A, Langlotz C, Shpanskaya K, Lungren MP (2017-11-14). "CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays with Deep Learning"</li>

                        <li>Van Ginneken, B., Katsuragawa, S., terHaarRomeny, B.M., Doi, K., Viergever, M.A.: Automatic detection of abnormalities in chest radiographs using local texture analysis. IEEE Trans. Med. Imaging 21(2), 139–149 (2002).</li>

                        <li>Wang, X.; Peng, Y.; Lu, L.; Lu, Z.; Bagheri, M.; summers, R.M. Chestx-ray8: Hospital scale chest x-ray database and benchmarks on weakly-supervised classiﬁcation and localization of common thorax diseases. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, Honolulu, HI, USA, 21–26 July 2017; IEEE: Piscataway, NJ, USA; pp. 2097–2106.</li>

                        <li>Ronneberger, O.; Fischer, P.; Brox, T. U-net: Convolutional networks for biomedical image segmentation. In Proceedings of the 18th International Conference on Medical Image Computing and Computer-Assisted Intervention, Munich, Germany, 5–9 October 2015; Springer International Publishing: New York, NY, USA; pp. 234–241.</li>

                        <li>Roth, H.R.; Lu, L.; Seﬀ, A.; Cherry, K.M.; Hoﬀman, J.; Wang, S.; Liu, J.; Turkbey, E.; Summers, R.M. A new 2.5 d representation for lymph node detection using random sets of deep convolutional neural network observations. In Proceedings of the 17th International Conference on Medical Image Computing and Computer-Assisted Intervention, Boston, MA, USA, 14–18 September 2014; Springer International Publishing: New York, NY, USA; pp. 520–527.</li>

                        <li>Shin, H.-C.; Roth, H.R.; Gao, M.; Lu, L.; Xu, Z.; Nogues, I.; Yao, J.; Mollura, D.; Summers, R.M. Deep convolutional neural networks for computer-aided detection: Cnn architectures, dataset characteristics and transfer learning. IEEE Trans. Med. Imaging 2016, 35, 1285–1298.</li>

                        <li>Sivaramakrishnan, R., Antani, S., Xue, Z., Candemir, S., Jaeger, S., and Thoma, G. (2017). Visualizing abnormalities in chest radiographs through salient network activations in deep learning. In Life Sciences Conference (LSC), 2017 IEEE, pages 71–74. IEEE.</li>

                        <li>Li, X.; Shen, L.; Xie, X.; Huang, S.; Xie, Z.; Hong, X.; Yu, J. Multi-resolution convolutional     networks for chest X-ray radiograph based lung nodule detection. Artif. Intell. Med. 2019, 101744.  </li>

                        <li>Liang, G.; Zheng, L. A transfer learning method with deep residual network for pediatric pneumonia diagnosis. Comput. Methods Programs Biomed. 2019, 104964.</li>

                        <li>Nam, J.G.; Park, S.; Hwang, E.J.; Lee, J.H.; Jin, K.; Lim, K.Y.; Park, C.M. Development and validation of deep learning-based automatic detection algorithm for malignant pulmonary nodules on chest radiographs. Radiology 2019, 290, 218–228.</li>

                        <li>Nasrullah, N.; Sang, J.; Alam, M.S.; Mateen, M.; Cai, B.; Hu, H. Automated lung nodule detection and classiﬁcation using deep learning combined with multiple strategies. Sensors 2019, 19, 3722.</li>

                        <li>Pasa, F.; Golkov, V.; Pfeiﬀer, F.; Cremers, D.; Pfeiﬀer, D. Eﬃcient deep network architectures for fast chest X-ray tuberculosis screening and visualization. Sci. Rep. 2019, 9, 6268.</li>

                        <li>Souza, J.C.; Bandeira Diniz, J.O.; Ferreira, J.L.; França da Silva, G.L.; Corrêa Silva, A.; de Paiva,      A.C. An automatic method for lung segmentation and reconstruction in chest X-ray using deep neural   networks. Comput. Methods Programs Biomed. 2019, 177, 285–296.</li>

                        <li>Taylor, A.G.; Mielke, C.; Mongan, J. Automated detection of moderate and large pneumothorax on frontal chest X-rays using deep convolutional neural networks: A retrospective study. PLoSM ed. 2018, 15,e1002697.</li>

                        <li>Daniel Kermany, Kang Zhang, Michael Goldbaum Labeled Optical Coherence Tomography (OCT) and Chest X-Ray Images for Classification</li>

                        <li>Kermany, D., Zhang, K., and Goldbaum, M. (2018). Labeled optical coherence tomography (oct) and chest x-ray images for classiﬁcation. Structural Equation Modeling: A Multidisciplinary Journal.</li>

                        <li>Sharma S, Maycher B, Eschun G (May 2007). "Radiological imaging in pneumonia: recent innovations". Current Opinion in Pulmonary Medicine. 13 (3): 159–69.</li>

                        <li>Johnson AEW, Pollard TJ, Berkowitz SJ, Greenbaum NR, Lungren MP, Deng CY, Mark RG, Horng S. MIMIC-CXR, a de-identified publicly available database of chest radiographs with free-text reports. Sci Data. 2019 Dec 12;6 (1):317.</li>

                        <li>Ustinova, E., Ganin, Y., and Lempitsky, V. (2017). Multiregion bilinear convolutional neural networks for person re-identiﬁcation. In Advanced Video and Signal Based Surveillance (AVSS), 2017 14th IEEE International Conference on, pages 1–6. IEEE.</li>

                        <li>Albawi, S.; Mohammed, T.A.; Al-Zawi, S. Understanding of a convolutional neural network. In Proceedings of the 2017 International Conference on Engineering and Technology (ICET), Antalya, Turkey, 21–23 August 2017; pp. 1–6.</li>

                        <li>Gomes, J.; Velho, L. Image Processing for Computer Graphics and Vision. Springer-Verlag, 2008.</li>

                        <li>Gonzalez, R. C.; Woods, R. E. Digital Image Processing. Third Edition. Prentice Hall, 2007.</li>

                        <li>Yu, S., Jia, S., and Xu, C. (2017). Convolutional neural networks for hyperspectral image classiﬁcation. Neurocomputing, 219:88–98.</li>

                        <li>Bailer, C.; Habtegebrial, T.; Varanasi, K.; Stricker, D. Fast Feature Extraction with CNNs with Pooling Layers. arXiv 2018</li>

                        <li>Scherer, Dominik; Müller, Andreas C.; Behnke, Sven (2010). "Evaluation of Pooling Operations in Convolutional Architectures for Object Recognition” Artificial Neural Networks (ICANN), 20th International Conference on. Thessaloniki, Greece: Springer. pp. 92–101</li>

                        <li>Powers, David M W (2011). "Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation" (Journal of Machine Learning Technologies. 2 (1): 37–63.</li>

                        <li>Junge, M. R. J. and Dettori, J. R. (2018). Roc solid: Receiver operator characteristic (roc) curves as a foundation for better diagnostic tests. Global Spine Journal, 8(4):424–429.</li>

                        <li>Hanley, James A.; McNeil, Barbara J. (1983-09-01). "A method of comparing the areas under receiver operating characteristic curves derived from the same cases". Radiology. 148 (3): 839–843.</li>

                        <li>Sasaki, Y. (2007). "The truth of the F-measure".</li>

                        <li>ThiKieuKhanh Ho, JeonghwanGwak, Om Prakash,Jong-In Song, and Chang Min Park "Utilizing Pretrained Deep Learning Models for Automated Pulmonary Tuberculosis Detection Using Chest Radiography”. Springer Link (2019).</li>

                        <li>He, Kaiming; Zhang, Xiangyu; Ren, Shaoqing; Sun, Jian (He, Kaiming; Zhang, Xiangyu; Ren, Shaoqing; Sun, Jian (2015-12-10). "Deep Residual Learning for Image Recognition".</li>

                        <li>Szegedy, Christian, Sergey Ioffe, Vincent Vanhoucke, and Alexander A. Alemi. "Inception-v4, Inception-ResNet and the Impact of Residual Connections on Learning." In AAAI, vol. 4, p. 12. 2017.</li>

                    </ol>
                </h5>
                <h5>
                  <b>Pages: 10-16</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Vividha, Soham Taneja, Preeti Nagrath, Rachna Jain (2020). Automated Detection and Classification of Pneumonia and Tuberculosis using Chest X-Ray Images, Innovative computing and communication: an international journal.<br/> http://doi.org/10.5281/zenodo.4743812</p>
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
                <br/>
                <p>Arya, Ashima, Juneja, Sapna, &Juneja, Abhinav. (2020). One QR code for Ticketing System. Innovative computing and communication: an international journal, 2(1), 11–15.<br/> http://doi.org/10.5281/zenodo.4743817</p>
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
                <br/>
                <p>Sharma, Moolchand, Sharma, Prerna, Jha, Manish Kumar, & Singh, Rohan. (2020). MOTION TRANSFER IN VIDEOS USING DCGAN. Innovative computing and communication: an international journal, 2(1), 17–24.<br/> http://doi.org/10.5281/zenodo.4743820</p>
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
                <br/>
                <p>Ilayaraja, M. (2020). An Improved K-Means Clustering with Machine Learning Based Sentiment Analysis and Classification Model. Innovative computing and communication: an international journa, 2(1), 25–29.<br/> http://doi.org/10.5281/zenodo.4743822</p>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
