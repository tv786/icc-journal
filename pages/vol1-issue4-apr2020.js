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
                    <b>Refrences: </b>
                    <ol>
                        <li>Chinese Center for Disease Control and Prevention.
Epidemic update and risk assessment of 2019-nCoV</li>
                        <li>Peng Zhou, Xing-Lou Yang, Zheng-Li Shi , A pneumonia
outbreak associated with a new coronavirus of probable
bat origin. (2020).</li>
                        <li>Jie Cui ,Fang Li,Zheng-Li Shi , Origin and evolution of
pathogenic coronaviruses (2019)</li>
                        <li>Tanu Singhal A Review of Coronavirus Disease-2019
(COVID-19)</li>
                        <li>Wanchao Yin, Chunyou Mao, Xiaodong Luan, Dan-Dan
Shen, Qingya Shen, Haixia Su, Xiaoxi Wang, Fulai
Zhou, Wenfeng Zhao, Minqi Gao, Shenghai Chang,
Yuan-Chao Xie, Guanghui Tian, He-Wei Jiang,
Sheng-Ce Tao, Jingshan Shen, Yi Jiang, Hualiang Jiang,
Yechun Xu, Shuyang Zhang, Yan Zhang, H. Eric Xu
Structural basis for inhibition of the RNA-dependent
RNA polymerase from SARS-CoV-2 by remdesivir</li>
                        <li>Zhenming Jin, Xiaoyu Du, Yechun Xu, Yongqiang Deng,
Meiqin Liu, Yao Zhao, Bing Zhang, Xiaofeng Li, Leike
Zhang, Chao Peng, Yinkai Duan, Jing Yu, Lin Wang,
Kailin Yang, Fengjiang Liu, Rendi Jiang, Xinglou
Yang, Tian You, Xiaoce Liu, Xiuna Yang, Fang Bai,
Hong Liu, Xiang Liu, Luke W. Guddat, Wenqing Xu,
Gengfu Xiao, Chengfeng Qin, Zhengli Shi, Hualiang
Jiang, Zihe Rao & Haitao Yang Structure of Mpro from
COVID-19 virus and discovery of its inhibitors.</li>
                        <li>Xiaowei Xu ; Xiangao Jiang, Chunlian Ma; Peng Du;
Xukun Li; Shuangzhi Lv, Liang Yu; Yanfei Chen;
Junwei Su ; Guanjing Lang,Yongtao Li, Hong Zhao ;
Kaijin Xu, Lingxiang Ruan ;Wei Wu Deep Learning
System to Screen Coronavirus Disease 2019 Pneumonia</li>
                        <li>https://github.com/CSSEGISandData/COVID-19 2019
Novel Coronavirus COVID-19 (2019-nCoV) Data
Repository by Johns Hopkins CSSE Accessed on
28/04/2020 8:00AM</li>
                        <li>https://systems.jhu.edu//research/public-health/ncov/Mapp
ing 2019-nCoV.</li>
                        <li>https://github.com/CSSEGISandData/COVID-19/blob/bd
a67e3db0e8dca4540297633d431a8021c035c8/csse_covi
d_19_data/csse_covid_19_time_series/time_series_covid
19_confirmed_global.csv ( 28th April,2020, 8:00 IST)</li>
                        <li>https://github.com/CSSEGISandData/COVID-19/blob/e6
645fae67850899a8e31f973cfd76bcb7c2a29f/data/cases_
country.csv ( 28th April,2020, 21:00 IST)</li>
                        <li>Toshikazu Kuniya , Prediction of the Epidemic Peak of
Coronavirus Disease in Japan, 2020</li>
                        <li>Binti Hamzah FA, Lau C, Nazri H, Ligot DV, Lee G,
Tan CL, et al. CoronaTracker: Worldwide COVID-19
Outbreak Data Analysis and Prediction. [Submitted].
Bull World Health Organ.</li>
                        <li>Han Li1 & Fengzhu Sun,Comparative studies of
alignment, alignment-free and SVM based approaches
for predicting the hosts of viruses based on viral
sequences</li>
                        <li>H. AL-NAJJAR, N. AL-ROUSAN,A classifier
prediction model to predict the status of Coronavirus
CoVID-19 patients in South Korea</li>
                        <li>Fotios PetropoulosID1 *, Spyros
MakridakisID2,Forecasting the novel coronavirus
COVID-19,2020.</li>
                        <li>Shruti Kaushik1*, Abhinav Choudhury1, Pankaj Kumar
Sheron1, Nataraj Dasgupta, Sayee Natarajan2, Larry A.
Pickett2 and Varun Dutt,AI in Healthcare: Time-Series
Forecasting Using Statistical, Neural, and Ensemble
Architectures 2020.</li>
                        <li>Tealab, A., Hefny, H., & Badr, A. (2017). Forecasting of
nonlinear time series using ANN. Future Computing and
Informatics</li>
                        <li>Sima Siami-Namini,Neda Tavakoli,Akbar Siami
Namin,A Comparative Analysis of Forecasting Financial
Time Series Using ARIMA, LSTM, and BiLSTM</li>
                        <li>Alex Graves and Jurgen Schmidhuber,Framewise
Phoneme Classification with Bidirectional LSTM and
Other Neural Network Architectures.</li>
                        <li>https://en.wikipedia.org/wiki/Bidirectional_recurrent_ne
ural_networks</li>
                        <li>https://github.com/CSSEGISandData/COVID-19/blob/bd
a67e3db0e8dca4540297633d431a8021c035c8/csse_covi
d_19_data/csse_covid_19_time_series/time_series_covid
19_deaths_global.csv (28th April,2020, 8:00 IST)</li>
                        <li>Oliver Faust, Alex Shenfield, Murtadha Kareem, Ru San
Tan Automated detection of atrial fibrillation using long
short-term memory network with RR interval signals</li>
                        <li>https://datascience.stackexchange.com/questions/25650/
what-is-lstm-bilstm-and-when-to-use-them.</li>
                        <li>P iyush Kapoor and Sarabjeet Singh Bedi,Weather
Forecasting Using Sliding Window Algorithm,2013.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 1-5</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Gupta, Karan, Dhamija, Luv, &Behl, Ritin. (2020). COVID-19 outbreak analysis and predictions for future cases. Innovative computing and communication: an international journal, 1(4), 1–5.<br/> http://doi.org/10.5281/zenodo.4743770</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>In Proceedings of the 16th ACM SIGSPATIAL
InternationalConference on Advances in Geographic
Information Systems (ACM GIS 2008), Irvine, CA,
November 2008
https://cims.nyu.edu/gcl/papers/newsstand-acmgis2008.p
d</li>
                        <li>https://www.microsoft.com/en-us/research/uploads/prod/
2019/09/kars2019.pdf</li>
                        <li>Building event-centric knowledge graphs from
news.Marco Rospocher a,Marieke van Erp b,∗, Piek
Vossen b, Antske Fokkens b, Itziar Aldabe German
Rigau c, Aitor Soroa c, Thomas Ploeger d, Tessel
Bogaard</li>
                        <li>https://material.io/components/bottom-navigation/#usage</li>
                        <li>News recommender systems – Survey and roads ahead
MozhganKarimia, Dietmar Jannach</li>
                        <li>Software Engineering: A Practitioner's Approach
Book by Roger S. Pressman</li>
                        <li>Journal - A study of repetitive news display and news
consumption in Korea.</li>
                        <li>https://doi.org/10.1016/j.tele.2019.101313</li>
                        <li>Research Paper:- IntoNews: Online news retrieval using
closed captions
http://dx.doi.org/10.1016/j.ipm.2014.07.010</li>
                        <li>Distribution of news via different mediums :
https://www.pewresearch.org/fact-tank/2018/12/10/social
-media-outpaces-print-newspapers-in-the-u-s-as-a-newssource/</li>
                        <li>Johannes Hoffart, Fabian M. Suchanek, Klaus
Berberich, and Gerhard Weikum. 2013. YAGO2: A
spatially and temporally enhanced knowledge base from
Wikipedia. Artificial Intelligence 194 (2013), 28–61.</li>
                        <li>Thomas N Kipf and Max Welling. 2016.
Semi-supervised classification with graph convolutional
networks. arXiv preprint arXiv:1609.02907 (2016).</li>
                        <li>Bishan Yang, Wen-tau Yih, Xiaodong He, Jianfeng Gao,
and Li Deng. 2014. Embedding entities and relations for
learning and inference in knowledge bases. arXiv
preprint arXiv:1412.6575 (2014).</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 7-15</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Chaudhary, Srishty, Mehra,Tanya, Singh, Prabhat, &Khatter, Harsh. (2020). FLY BULLETIN: AN INTELLIGENT NEWS APP. Innovative computing and communication: an international journal, 1(4), 7–15.<br/> http://doi.org/10.5281/zenodo.4743772</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>https://images.nvidia.com/content/tegra/automotive/image
s/2016/solutions/pdf/e nd-to-end-dl-using-px.pdf</li>
                        <li>https://www.researchgate.net/publication/285164623_An_
Introduction_to_Convo lutional_Neural_Networks</li>
                        <li>Bojarski, Mariusz & Testa, Davide & Dworakowski,
Daniel & Firner, Bernhard & Flepp, Beat & Goyal,
Prasoon & Jackel, Larry & Monfort, Mathew & Muller,
Urs & Zhang, Jiakai & Zhang, Xin & Zhao, Jake & Zieba,
Karol. (2016). End to End Learning for Self-Driving Cars.</li>
                        <li>Y. LeCun, B. Boser, J. S. Denker, D. Henderson, R. E.
Howard, W. Hubbard, and L. D. Jackel. Backpropagation
applied to handwritten zip code recognition. Neural
Computation, 1(4):541–551, Winter 1989. URL:
http://yann.lecun.org/exdb/publis/pdf/lecun-89e.pdf.</li>
                        <li>L. D. Jackel, D. Sharman, Stenard C. E., Strom B. I., , and
D Zuckert. Optical character recognition for self-service
banking. AT&T Technical Journal, 74(1):16–24, 1995.</li>
                        <li>Dean A. Pomerleau. ALVINN, an autonomous land vehicle
in a neural network. Technical report, Carnegie Mellon
University, 1989. URL:
http://repository.cmu.edu/cgi/viewcontent.cgi?article=2874
&context=compsci.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 17-19</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Vats, Navender, Iqbal, Md Abid, & Aggarwal, Suraj. (2020). AUTONOMOUS CAR USING TENSORFLOW. Innovative Computing and Communication: An International Journal, 1(4), 17–19.<br/> http://doi.org/10.5281/zenodo.4743778</p>
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
                    <b>Refrences: </b>
                    <ol>
                        <li>Sherstinsky A. “Fundamentals of Recurrent
Neural Network (RNN) and Long Short-Term
Memory (LSTM) Network”, 2018.</li>
                        <li>Liu P., Qiu X. and Huang X. “Recurrent Neural
Network for Text Classification with Multi-Task
Learning”, International Joint Conference on
Artificial Intelligence (IJCAI-16).</li>
                        <li> Li J., Sun A., Han R. and Li C. “A survey on
Deep Learning for Named Entity Recognition”, IEEE
Knowledge and Data Engineering (2020), PP. 1-1.
10.1109/TKDE.2020.2981314.</li>
                        <li>Yadav V. and Bethard S. “A Survey on Recent
Advances in Named Entity Recognition from Deep
Learning models”, Proceedings of the 27th
International Conference on Computational
Linguistics, 2018.</li>
                        <li>Yao L., Liu H., Anwar W. M., Li X. and Liu Y.
“Biomedical Named Entity Recognition based on
Deep Neural Network.”, International Journal of
Hybrid Information Technology (2015),
https://doi.org.10.14257/ijhit.2015.8.8.29.</li>
                        <li>K. Fukushima “Neocognitron: A self-organizing
neural network model for a mechanism of pattern
recognition unaffected by shift in position”,
Biological Cybern. 36(4), 93–202 (1980).</li>
                        <li> Jatav V., Teja R., Bharadwaj S. and Srinivasan V.
“Improving Part-of-Speech Tagging for NLP
Pipelines” (2017).</li>
                        <li>H. Shimodaira “Improving predictive inference
under covariate shift by weighting the log-function”,
Journal of Statistical Planning and Inference 90,
227–244 (2000).</li>
                        <li> S. Weisler and H. Ney “A convergence analysis
of log-linear training”, Advances in Neural
Information Processing Systems (NIPS) 24 (2011).</li>
                        <li>X. Glorot and Y. Bengio “Understanding the
difficulty of training deep feed-forward neural
networks”, Artificial Intelligence and Statics
(AISTATS) (2010).</li>
                        <li> Kim Y. J., Liu C., Calvo A. R., McCabe K.,
Taylor R. S., Schuller W. B. and Wu K. “A
comparison of Online Automatic Speech Recognition
Systems and the Nonverbal Responses to
Unintelligible Speech”, ArXiv (2019).</li>
                        <li>Kim Y., ‘‘Convolutional neural networks for
sentence classification’’, Proceeding Conference on
Empirical Methods Natural Language Process.
(EMNLP), Oct. 2014, pp. 1746–1751.</li>
                        <li>Moratanch N. and Gopalan C., “A survey on
extractive text summarization”, International
Conference on Computer, Communication and Signal
Processing (ICCCSP), Jan 2017.</li>
                        <li>Devlin J., Chang W. M. and Lee K.,Toutanova
K., “BERT: Pre-training of Deep Bidirectional
Transformers forLanguage Understanding”, NAACLHLT 2019.</li>
                        <li>S. Hochreiter and J. Schmidhuber, "Long shortterm memory", Neural Comput., vol. 9, no. 8, pp.
1735-1780, 1997.</li>
                        <li>Yih W., Goodman J., Vanderwende L., and
Suzuki H., “Multi-Document Summarization by
Maximizing Informative Content-Words”, IJCAI,
Vol. 2007. 20th.</li>
                        <li>Bose J., K P. D, Kasi S and Bhide A., “A
framework for text summarization in mobile web
browsers”, ICCIC 2013.</li>
                    </ol>
                </h5>
                <h5>
                  <b>Pages: 21-25</b>
                </h5>
                <h5>
                <b>Cite As </b>
                <br/>
                <p>Dang, Nobel, Thukral, Saksham, & Khanna, Ashish. (2020). Voice Prescription using Name Entity Recognition. Innovative computing and communication: an international journal, 1(4), 21–25.<br/> http://doi.org/10.5281/zenodo.4743795</p>
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </ExpansionPanelDetails>
    </div>
  );
}
