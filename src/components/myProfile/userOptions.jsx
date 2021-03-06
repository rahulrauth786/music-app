import React, { Component } from "react";
import { getCurrentUser, getUserLogOut } from "../../services/userService";

class UserOption extends Component {
  state = { user: null };
  componentDidMount() {
    let token = JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token"))
      : null;
    if (token !== null) {
      let response = getCurrentUser(token);
      response
        .then((data) => {
          this.setState({ user: data, loading: true });
        })
        .catch((err) => console.log(err));
    }
  }
  showLoginPage = () => {
    this.props.history.push("/login");
  };
  handleLogout = () => {
    getUserLogOut();
    window.location = "/";
  };

  render() {
    const { user } = this.state;
    return (
      <div className="row mx-1">
        <div className="col-12">
          <div className="row bg-white mb-4 ">
            <div className="col-12 pt-2 ">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                onClick={() => this.props.history.goBack()}
              >
                <path
                  class="fill_path"
                  fill="black"
                  fill-rule="evenodd"
                  d="M19.7 11H7.5l5.6-5.6L11.7 4l-8 8 8 8 1.4-1.4L7.5 13h12.2z"
                ></path>
              </svg>
            </div>
          </div>

          {user ? (
            <div className="row bg-white mt-4">
              <div className="col-12">
                <div className="row mt-2">
                  <div className="col-6">
                    <span
                      style={{
                        fontSize: 24,
                        color: "black",
                        paddingTop: 6,
                        display: "block",
                        lineHeight: 1.2,
                      }}
                    >
                      {user.fullName}
                      <br />
                      <span
                        style={{
                          fontSize: 17,
                          color: "#999999",
                        }}
                      >
                        View Profile
                      </span>
                    </span>

                    <span></span>
                  </div>
                  <div className="col-6 text-right">
                    <img
                      className="rounded-circle mt-3"
                      style={{ width: 38 }}
                      src="https://a10.gaanacdn.com/images/users/102/crop_110x110_4927102.jpg"
                      alt="rahul"
                      title="rahul"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row pt-3">
              <div className="col-12">
                <span style={{ fontSize: 23, color: "black" }}>
                  Get more out of Gaana
                </span>
                <br />
                <span style={{ color: "red" }}>Login or Register</span>
              </div>
            </div>
          )}

          <hr />
          <div className="row bg-white ">
            <div className="col-12 py-2">
              <div className="row py-2">
                <div className="col-6">
                  <span class="hm-ic _ic mr-3" data-icon="home">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h20v20H0z"></path>{" "}
                        <path
                          class="fill_path"
                          fill="#E72C30"
                          d="M10.666 2.025l7.361 7.297a.774.774 0 0 1-.545 1.324h-1.38a.5.5 0 0 0-.5.5v6.155a1 1 0 0 1-1 1h-2.93v-4.167H8.34v4.167H5.32a1 1 0 0 1-1-1v-6.155a.5.5 0 0 0-.5-.5h-1.38a.774.774 0 0 1-.545-1.324l7.362-7.297a1 1 0 0 1 1.408 0z"
                        ></path>{" "}
                      </g>{" "}
                    </svg>
                  </span>
                  <span
                    style={{ fontSize: 16, color: "black" }}
                    onClick={() => this.props.history.push("/")}
                  >
                    Home
                  </span>
                </div>
                <div className="col-6"></div>
              </div>
              <div className="row py-2">
                <div className="col-12">
                  <span class="sg-ic _ic mr-3" data-icon="song_lg">
                    <svg width="22" height="22" viewBox="0 0 22 22">
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          class="fill_path"
                          transform="translate(-15.000000, -226.000000)"
                          fill="black"
                          fill-rule="nonzero"
                        >
                          <g transform="translate(15.000000, 185.000000)">
                            <g transform="translate(0.000000, 41.000000)">
                              <path d="M7.38087064,12.9041607 C4.96728881,12.9041607 3,10.9092965 3,8.45208034 C3,5.9985397 4.96728881,4 7.38087064,4 C9.78373973,4 11.7367449,5.99850331 11.7367449,8.45208034 C11.7367449,10.9056574 9.78373973,12.9041607 7.38087064,12.9041607 Z M9.22356956,5.83929503 C9.07255756,5.87749918 8.11772833,6.15600564 6.35908188,6.67481442 C6.29478265,6.69511178 6.25086748,6.75526539 6.25053697,6.82349582 L6.25053697,9.51659301 C6.0733536,9.39881975 5.8654344,9.33746293 5.65353993,9.34041957 C5.41983608,9.34041957 5.19720825,9.41111337 5.02774527,9.53791336 C4.84554487,9.67537353 4.74530696,9.86108502 4.74530696,10.0630673 C4.74530696,10.2650496 4.84554487,10.4507611 5.02774527,10.5882213 C5.19720825,10.7155823 5.41817468,10.7857151 5.65353993,10.7857151 C5.88890518,10.7857151 6.10987162,10.7155823 6.2793346,10.5882213 C6.46208879,10.4507611 6.5617729,10.2650496 6.5617729,10.0630673 L6.5617729,7.60617719 L9.10465177,6.82349582 L9.10465177,8.63179837 C8.92751618,8.51385871 8.71960205,8.45230799 8.50765473,8.45506387 C8.27339708,8.45506387 8.05132304,8.52519661 7.88186006,8.65255766 C7.69965967,8.79001783 7.59942176,8.97572932 7.59942176,9.17771161 C7.59942176,9.3796939 7.69965967,9.56540539 7.88186006,9.70286556 C8.05132304,9.82966556 8.27228948,9.90035936 8.50765473,9.90035936 C8.74301998,9.90035936 8.96398642,9.82966556 9.1334494,9.70286556 C9.31564979,9.56540539 9.4158877,9.3796939 9.4158877,9.17771161 L9.4158877,6.06174596 C9.4158877,5.90513663 9.34026426,5.80462456 9.22356956,5.83929503 Z M18.4526729,14.680604 C17.4958104,16.4570838 15.4785288,17.3562046 13.5433782,16.8684151 C11.6689332,16.3624299 10.3443021,14.6624084 10.2764547,12.7039355 C11.5332384,11.8084174 12.3722964,10.3486515 12.4472499,8.68869684 C14.1074757,7.69852483 16.2104593,7.92786307 17.6243276,9.27841854 C19.0810469,10.6617262 19.4202482,12.8823259 18.4526729,14.680604 Z M16.7710216,13.7741685 L14.9751011,10.1557046 C14.9143955,10.0319377 14.7894492,9.95547945 14.6573253,9.95547945 C14.5216662,9.95547945 14.4002551,10.0319377 14.3395495,10.1557046 L12.5150973,13.857905 C12.4258245,14.0362953 12.4972428,14.2546798 12.6721819,14.3456945 C12.7221747,14.3711684 12.7793094,14.385725 12.8328374,14.385725 C12.9649256,14.385725 13.0899076,14.3129059 13.1506132,14.1854998 L13.7789872,12.9114026 L15.5427695,12.9114026 L16.1354701,14.1054025 C16.224743,14.2837928 16.4389622,14.3565755 16.6139014,14.2655608 C16.7888762,14.1709797 16.8602588,13.9525588 16.7710216,13.7741685 Z M14.136043,12.1797182 L14.6573253,11.1240418 L15.1821785,12.1797182 L14.136043,12.1797182 Z"></path>
                              <path d="M9.9961292,17.6405633 L9.9961292,17.6367652 C9.99217941,17.6215726 9.98822962,17.6063801 9.98427983,17.5949857 C9.98427983,17.5949857 9.98427983,17.5949857 9.98427983,17.5911876 C9.98033004,17.5797932 9.97638025,17.5646007 9.96848066,17.5532063 C9.96848066,17.5494081 9.96453087,17.54561 9.96058108,17.5418119 C9.95663129,17.5342156 9.94873171,17.5228212 9.94478191,17.515225 C9.94083212,17.5114268 9.94083212,17.5076287 9.93688233,17.5038306 C9.92898275,17.4924362 9.92108316,17.4810418 9.91318358,17.4696474 C9.905284,17.458253 9.89343462,17.4468586 9.88158525,17.4354642 C9.87763546,17.4316661 9.87763546,17.4316661 9.87368567,17.427868 C9.86578608,17.4202717 9.85393671,17.4126754 9.84603713,17.4050792 C9.84208733,17.4012811 9.83813754,17.4012811 9.83418775,17.3974829 C9.82628817,17.3898867 9.81443879,17.3860885 9.80653921,17.3784923 C9.80258942,17.3746941 9.79863963,17.3746941 9.79468983,17.370896 C9.78284046,17.3632997 9.76704129,17.3557035 9.75519192,17.3519054 L7.73712492,16.5692246 C7.53572505,16.4894259 7.30667663,16.5844171 7.22373101,16.7781977 C7.14078539,16.9719784 7.23953018,17.1923079 7.44093005,17.2721066 L8.79156127,17.7964006 C8.04911895,18.1801257 7.15263476,18.2105108 6.37464432,17.8533725 L6.37069453,17.8533725 C5.38735442,17.4164356 4.76731614,16.4514066 4.79101489,15.3875882 C4.79496468,15.178615 4.62516314,15.003863 4.40397482,15.0000649 C4.18677578,14.9962668 4.00508537,15.1596244 4.00113558,15.3723956 C3.96558745,16.7363423 4.76727664,17.9787488 6.03500174,18.5448602 C6.50889773,18.7614296 7.01439206,18.8678152 7.51992588,18.8678152 C7.95037416,18.8678152 8.38086195,18.7880165 8.78761148,18.6360533 L8.42821995,19.4795042 C8.34527432,19.6732848 8.44401911,19.8974505 8.64541898,19.9734131 C8.69281648,19.9924037 8.74416377,20 8.79547157,20 C8.94947394,20 9.09956602,19.912605 9.16276268,19.7644399 L9.97630125,17.8457763 C9.97630125,17.8419781 9.98025104,17.83818 9.98025104,17.8343819 C9.97630125,17.8305838 9.97630125,17.8267856 9.98025104,17.8229875 C9.98420083,17.8115931 9.98815063,17.8001987 9.98815063,17.7926025 C9.98815063,17.7888043 9.98815063,17.7850062 9.99210042,17.7812081 C9.99605021,17.7660155 9.99605021,17.750823 10,17.7356305 C10,17.720438 10,17.7090436 10,17.6938511 C10,17.6900529 10,17.6862548 10,17.6824567 C10,17.6710623 9.99605021,17.6596679 9.99605021,17.6482735 C9.9961292,17.6443614 9.9961292,17.6443614 9.9961292,17.6405633 Z"></path>
                              <path d="M13.0038709,4.36237594 L13.0038709,4.36616993 C13.0078209,4.38134592 13.0117708,4.3965219 13.0157208,4.40790389 C13.0157208,4.40790389 13.0157208,4.40790389 13.0157208,4.41169789 C13.0196707,4.42307988 13.0236207,4.43825586 13.0315205,4.44963785 C13.0315205,4.45343184 13.0354705,4.45722584 13.0394204,4.46101984 C13.0433704,4.46860783 13.0512703,4.47998982 13.0552202,4.48757781 C13.0591701,4.49137181 13.0591701,4.4951658 13.0631201,4.4989598 C13.07102,4.51034179 13.0789199,4.52172378 13.0868197,4.53310576 C13.0947196,4.54448775 13.1065695,4.55586974 13.1184193,4.56725173 C13.1223692,4.57104573 13.1223692,4.57104573 13.1263192,4.57483972 C13.1342191,4.58242771 13.1460689,4.59001571 13.1539688,4.5976037 C13.1579187,4.60139769 13.1618687,4.60139769 13.1658186,4.60519169 C13.1737185,4.61277968 13.1855683,4.61657368 13.1934682,4.62416167 C13.1974182,4.62795567 13.2013681,4.62795567 13.205318,4.63174966 C13.2171679,4.63933766 13.2329676,4.64692565 13.2448175,4.65071964 L15.2629619,5.43254843 C15.4643695,5.51226029 15.6934267,5.41737245 15.7763755,5.22380276 C15.8593243,5.03023308 15.7605757,4.81014336 15.5591681,4.7304315 L14.2084851,4.20670828 C14.9509559,3.82340084 15.8474745,3.79304887 16.6254948,4.14979833 L16.6294447,4.14979833 C17.6128225,4.58625965 18.2328846,5.55023819 18.2091849,6.61289857 C18.205235,6.82164424 18.375043,6.996206 18.5962399,7 C18.6001898,7 18.6041397,7 18.6041397,7 C18.8173972,7 18.9951446,6.83682023 18.9990946,6.62807456 C19.0306941,5.2618186 18.2329241,4.01697053 16.9612004,3.4552694 C16.0804816,3.05299199 15.0892039,3.03398407 14.212435,3.36417555 L14.5718404,2.52164283 C14.6547892,2.32807314 14.5560406,2.10418943 14.354633,2.02827157 C14.1532254,1.94855971 13.9202182,2.04344755 13.8412194,2.23701723 L13.0276496,4.15359233 C13.0276496,4.15738633 13.0236997,4.16118032 13.0236997,4.16497432 C13.0236997,4.16876831 13.0197497,4.17635631 13.0197497,4.1801503 C13.0157998,4.19153229 13.0118498,4.20291428 13.0118498,4.21050227 C13.0118498,4.21429627 13.0118498,4.21809026 13.0078999,4.22188426 C13.0039499,4.23706024 13.0039499,4.25223623 13,4.26741221 C13,4.2825882 13,4.29397019 13,4.30914617 C13,4.31294017 13,4.31673416 13,4.32052816 C13,4.33191015 13.0039499,4.34329214 13.0039499,4.35467412 C13.0038709,4.35858194 13.0038709,4.35858194 13.0038709,4.36237594 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "black" }}>
                    Song Language
                  </span>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-12">
                  <span class="dw-ic _ic mr-3" data-icon="g_icon">
                    <svg width="22" height="22" viewBox="0 0 22 22">
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          class="fill_path"
                          transform="translate(-15.000000, -270.000000)"
                          fill="#FFFFFF"
                        >
                          <g transform="translate(15.000000, 185.000000)">
                            <g transform="translate(0.000000, 85.000000)">
                              <path
                                fill="black"
                                d="M12.3238107,14.4759224 C12.1206922,14.4759224 11.9581973,14.481797 11.7957025,14.4759224 C10.9948351,14.4582988 10.1881642,14.4935461 9.39310021,14.4054277 C8.19179907,14.2644382 7.35611133,13.5007453 7.11817245,12.4491988 C6.98469455,11.8734918 7.06013858,11.3036593 7.15879616,10.7338269 C7.42575197,9.21819004 7.68110101,7.69667865 7.96546697,6.18104182 C8.30786681,4.34817868 9.70648311,3.03227694 11.5577636,2.88541291 C12.642997,2.79729449 13.7398372,2.83254186 14.8308739,2.82079273 C15.4112126,2.81491817 15.985748,2.82079273 16.6125138,2.82079273 C16.5370697,3.28488308 16.4674291,3.72547518 16.3919851,4.16019272 C15.9741412,6.56288831 15.5504939,8.9655839 15.1268467,11.3682795 C14.8598909,12.8780418 14.6161486,14.387804 14.3143725,15.8916917 C13.9081354,17.9419136 12.3644344,18.887718 10.7801097,19.1168259 C10.3970862,19.169697 10.0082592,19.1755715 9.62523569,19.1755715 C8.29045665,19.1814461 6.95567762,19.1755715 5.62089858,19.1755715 C5.60348842,19.1755715 5.58607826,19.169697 5.54545455,19.1579478 C5.55125793,19.1227005 5.54545455,19.0874531 5.56286471,19.0580803 C5.93428148,18.3825057 6.29989487,17.7069312 6.68872181,17.0431057 C6.74675568,16.9491128 6.92085729,16.8844926 7.04272842,16.8844926 C8.21501262,16.8727435 9.38149343,16.878618 10.5537776,16.878618 C11.4474992,16.878618 11.9059668,16.5085207 12.0974786,15.6214619 C12.1903328,15.2513645 12.2425633,14.8988909 12.3238107,14.4759224 Z M11.4416959,12.1613453 L11.4416959,12.1965926 C11.743472,12.1965926 12.0452481,12.1730944 12.3412209,12.2024672 C12.6371936,12.23184 12.7416546,12.1084742 12.7880817,11.8264953 C13.0956612,9.98188301 13.4148475,8.13727075 13.7340338,6.29265849 C13.8559049,5.59946025 13.5077017,5.14711903 12.8054918,5.12362078 C12.4166649,5.11187166 12.0336413,5.11774622 11.6448144,5.11774622 C10.8671605,5.12949534 10.3390523,5.58183657 10.199771,6.36315322 C10.0488829,7.20909006 9.8921915,8.04915233 9.74710682,8.89508916 C9.6194323,9.65290758 9.47434763,10.410726 9.38729682,11.174419 C9.32345956,11.7207532 9.6194323,12.0791014 10.1707541,12.1437216 C10.588598,12.1965926 11.0180486,12.1613453 11.4416959,12.1613453 Z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "black" }}>
                    Download App!
                  </span>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-6">
                  <span class="at-ic _ic mr-3" data-icon="play">
                    <svg width="22" height="22" viewBox="0 0 22 22">
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g transform="translate(-15.000000, -315.000000)">
                          <g transform="translate(15.000000, 185.000000)">
                            <g transform="translate(0.000000, 130.000000)">
                              <polygon points="0 0 22 0 22 22 0 22"></polygon>
                              <path
                                class="fill_path"
                                d="M6,5.82166324 L6,16.1783169 C6,16.7306017 6.44771525,17.1783169 7,17.1783169 C7.19018558,17.1783169 7.37642758,17.1240827 7.53687937,17.0219759 L15.6742501,11.8435966 C16.1401901,11.5470863 16.2775401,10.9289982 15.9810298,10.4630582 C15.9024505,10.3395777 15.7977235,10.2348517 15.6742424,10.1562736 L7.53687162,4.97799929 C7.07092888,4.68149328 6.45284205,4.81884889 6.15633605,5.28479163 C6.05423248,5.44524171 6,5.63148078 6,5.82166324 Z"
                                fill="black"
                                fill-rule="nonzero"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "black" }}>Autoplay</span>
                </div>
                <div className="col-6"></div>
              </div>
              <div className="row py-2">
                <div className="col-6">
                  <span class="th-ic _ic mr-3" data-icon="theme_icon">
                    <svg width="22" height="22" viewBox="0 0 22 22">
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g transform="translate(-15.000000, -358.000000)">
                          <g transform="translate(15.000000, 185.000000)">
                            <g transform="translate(0.000000, 173.000000)">
                              <polygon points="0 0 22 0 22 22 0 22"></polygon>
                              <path
                                class="fill_path"
                                d="M14.896036,3.91460763 C14.2019916,3.42846962 13.4423752,3.05756903 12.6385577,2.81197371 C12.4846208,2.76489067 12.3183331,2.8221164 12.2263378,2.95397137 C12.1343425,3.08563921 12.1372244,3.26169535 12.2339355,3.38991991 C14.13496,5.91399009 14.1936454,9.35090237 12.3795635,11.941817 C10.5651074,14.5329187 7.31585359,15.653293 4.29333195,14.7297842 C4.13973195,14.6827012 3.97310739,14.7399269 3.88111207,14.8717819 C3.78911675,15.0034497 3.79199862,15.1795059 3.88870973,15.3077304 C4.39404774,15.9787573 5.00257172,16.5656111 5.6973647,17.0522731 C7.09413663,18.0303129 8.69705593,18.4997959 10.285491,18.4996088 C12.8153624,18.4994217 15.3075448,17.3080111 16.8655518,15.0829819 C19.4015238,11.4609187 18.5180618,6.45080412 14.896036,3.91460763 Z"
                                fill="black"
                                fill-rule="nonzero"
                                transform="translate(11.063506, 10.647642) scale(-1, 1) rotate(10.000000) translate(-11.063506, -10.647642) "
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "black" }}>
                    Black Theme
                  </span>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
          <hr />
          {user ? (
            <div className="row bg-white">
              <div className="col-12 pb-2">
                <div className="row py-2">
                  <div className="col-6">
                    <span class="hm-ic _ic mr-3" data-icon="home">
                      <span class="noti-ic _ic" data-icon="notificationicon">
                        <svg width="25" height="100%" viewBox="0 0 23 23">
                          {" "}
                          <g fill="none" fill-rule="evenodd">
                            {" "}
                            <path d="M.333.9h21.334v21.2H.333z"></path>{" "}
                            <path
                              class="fill_path"
                              fill="black"
                              fill-rule="nonzero"
                              d="M12.58 17.86c0 .878-.707 1.59-1.58 1.59-.873 0-1.58-.712-1.58-1.59h3.16zM11 3.55c.436 0 .79.356.79.795v.859a4.768 4.768 0 0 1 3.95 4.706v4.77l2.371 2.385H3.89l2.37-2.385V9.91a4.768 4.768 0 0 1 3.95-4.706v-.859c0-.44.355-.795.791-.795z"
                            ></path>{" "}
                          </g>{" "}
                        </svg>
                      </span>
                    </span>
                    <span style={{ fontSize: 16, color: "black" }}>
                      Notification
                    </span>
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row py-2">
                  <div className="col-6">
                    <span class="ms-ic _ic mr-3" data-icon="song">
                      <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g transform="translate(-54.000000, -329.000000)">
                            {" "}
                            <g transform="translate(20.000000, 303.000000)">
                              {" "}
                              <g transform="translate(34.000000, 26.000000)">
                                {" "}
                                <polygon points="0 0 24 0 24 24 0 24"></polygon>{" "}
                                <path
                                  class="fill_path"
                                  d="M17,8.6 L13.25,8.6 L13.25,15.75 C13.25,17.544923 11.8508875,19 10.125,19 C8.3991125,19 7,17.544923 7,15.75 C7,13.955077 8.3991125,12.5 10.125,12.5 C10.8375,12.5 11.475,12.747 12,13.15 L12,6 L17,6 L17,8.6 Z M19.5,2 L4.5,2 C3.1192875,2 2,3.1192875 2,4.5 L2,19.5 C2,20.8807125 3.1192875,22 4.5,22 L19.5,22 C20.8807125,22 22,20.8807125 22,19.5 L22,4.5 C22,3.1192875 20.8807125,2 19.5,2 Z"
                                  fill="black"
                                  fill-rule="nonzero"
                                ></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </svg>
                    </span>
                    <span
                      style={{ fontSize: 16, color: "black" }}
                      onClick={() => this.props.history.push("/mymusic")}
                    >
                      My Music
                    </span>
                  </div>
                  <div className="col-6"></div>
                </div>{" "}
                <div className="row py-2">
                  <div className="col-6">
                    <span class="st-ic _ic mr-3" data-icon="setting">
                      <svg width="22" height="22" viewBox="0 0 22 22">
                        {" "}
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g transform="translate(-15.000000, -511.000000)">
                            {" "}
                            <g transform="translate(15.000000, 423.000000)">
                              {" "}
                              <g transform="translate(0.000000, 88.000000)">
                                {" "}
                                <polygon points="0 0 22 0 22 22 0 22"></polygon>{" "}
                                <path
                                  class="fill_path"
                                  d="M10.7518858,14.2083333 C8.97996917,14.2083333 7.5435525,12.7719167 7.5435525,11 C7.5435525,9.22808333 8.97996917,7.79166667 10.7518858,7.79166667 C12.5238025,7.79166667 13.9602192,9.22808333 13.9602192,11 C13.9602192,12.7719167 12.5238025,14.2083333 10.7518858,14.2083333 Z M17.5627192,11.8891667 C17.5993858,11.5958333 17.6268858,11.3025 17.6268858,11 C17.6268858,10.6975 17.5993858,10.395 17.5627192,10.0833333 L19.4968858,8.58916667 C19.6710525,8.45166667 19.7168858,8.20416667 19.6068858,8.0025 L17.7735525,4.83083333 C17.6635525,4.62916667 17.4160525,4.54666667 17.2143858,4.62916667 L14.9318858,5.54583333 C14.4552192,5.18833333 13.9602192,4.87666667 13.3827192,4.6475 L13.0435525,2.21833333 C13.0068858,1.99833333 12.8143858,1.83333333 12.5852192,1.83333333 L8.9185525,1.83333333 C8.68938583,1.83333333 8.49688583,1.99833333 8.46021917,2.21833333 L8.1210525,4.6475 C7.5435525,4.87666667 7.0485525,5.18833333 6.57188583,5.54583333 L4.28938583,4.62916667 C4.08771917,4.54666667 3.84021917,4.62916667 3.73021917,4.83083333 L1.89688583,8.0025 C1.77771917,8.20416667 1.83271917,8.45166667 2.00688583,8.58916667 L3.9410525,10.0833333 C3.90438583,10.395 3.87688583,10.6975 3.87688583,11 C3.87688583,11.3025 3.90438583,11.5958333 3.9410525,11.8891667 L2.00688583,13.4108333 C1.83271917,13.5483333 1.77771917,13.7958333 1.89688583,13.9975 L3.73021917,17.1691667 C3.84021917,17.3708333 4.08771917,17.4441667 4.28938583,17.3708333 L6.57188583,16.445 C7.0485525,16.8116667 7.5435525,17.1233333 8.1210525,17.3525 L8.46021917,19.7816667 C8.49688583,20.0016667 8.68938583,20.1666667 8.9185525,20.1666667 L12.5852192,20.1666667 C12.8143858,20.1666667 13.0068858,20.0016667 13.0435525,19.7816667 L13.3827192,17.3525 C13.9602192,17.1141667 14.4552192,16.8116667 14.9318858,16.445 L17.2143858,17.3708333 C17.4160525,17.4441667 17.6635525,17.3708333 17.7735525,17.1691667 L19.6068858,13.9975 C19.7168858,13.7958333 19.6710525,13.5483333 19.4968858,13.4108333 L17.5627192,11.8891667 Z"
                                  fill="black"
                                  fill-rule="nonzero"
                                ></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </svg>
                    </span>
                    <span style={{ fontSize: 16, color: "black" }}>
                      Settings
                    </span>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row pt-3 px-4 py-2">
              <div className="col-12 text-center">
                <p style={{ fontWeight: "lighter", fontSize: 16 }}>
                  Login to make your Collection,Create Playlists and Favourite
                  Songs
                </p>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: 0, width: 180, height: 35 }}
                  onClick={() => this.showLoginPage()}
                >
                  Login/Register
                </button>
              </div>
            </div>
          )}
          {user ? (
            <>
              <hr />
              <div className="row mb-5 bg-white">
                <div className="col-12 pt-2">
                  <div className="row py-2">
                    <div className="col-6">
                      <span class="log-ic _ic mr-3" data-icon="logout">
                        <svg width="22" height="22" viewBox="0 0 22 22">
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g transform="translate(-15.000000, -580.000000)">
                              {" "}
                              <g transform="translate(15.000000, 423.000000)">
                                {" "}
                                <g transform="translate(0.000000, 157.000000)">
                                  {" "}
                                  <polygon points="0 0 22 0 22 22 0 22"></polygon>{" "}
                                  <path
                                    class="fill_path"
                                    d="M10.875,20 C6.53267419,20 3,16.3495619 3,11.8623649 C3,9.24178387 4.23307258,6.76615776 6.29835484,5.23979992 C6.85707339,4.82709057 7.63365,4.96033778 8.03298871,5.53768987 C8.43253065,6.11493695 8.30358387,6.91746528 7.74491613,7.33017463 C6.33102339,8.37504698 5.48677258,10.0693551 5.48677258,11.8623649 C5.48677258,14.9327209 7.90388952,17.4302923 10.875,17.4302923 C13.8461105,17.4302923 16.2632274,14.9327734 16.2632274,11.8623649 C16.2632274,10.0693551 15.4189766,8.37504698 14.0050839,7.33017463 C13.4464161,6.91751778 13.3174694,6.11498945 13.7170113,5.53768987 C14.11635,4.96039028 14.8929774,4.82709057 15.4516452,5.23979992 C17.5169274,6.76610526 18.75,9.24178387 18.75,11.8623649 C18.75,16.3495619 15.2173258,20 10.875,20 Z M10.875,11.75 C10.2536826,11.75 9.75,11.1806338 9.75,10.4780846 L9.75,3.27155161 C9.75,2.5693662 10.2536826,2 10.875,2 C11.4963174,2 12,2.5693662 12,3.27155161 L12,10.4781366 C12,11.1806338 11.4963174,11.75 10.875,11.75 Z"
                                    fill="black"
                                    fill-rule="nonzero"
                                  ></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </svg>
                      </span>
                      <span
                        style={{ fontSize: 16, color: "black" }}
                        onClick={() => this.handleLogout()}
                      >
                        Logout
                      </span>
                    </div>
                    <div className="col-6"></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default UserOption;
