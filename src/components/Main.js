import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import PhoneIcon from "@material-ui/icons/Phone";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CallMadeIcon from "@material-ui/icons/CallMade";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";

const useStyles = makeStyles({
  cont: {
    justifyContent: "center",
  },
  main: {
    height: 1000,
    width: 1200,
    backgroundColor: "#f8f8f8",
    marginTop: "20px",
    borderRadius: "20px",
  },
  topbar: {
    display: "flex",
  },
  contentbar: {
    display: "flex",
    height: 900,
  },
  rightside: {
    height: 875,
  },
  timeline: {},
});

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container className={classes.cont}>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              className={classes.topbar}
              style={{ backgroundColor: "black", height: "60px" }}
            >
              <div className={classes.topbar} style={{ padding: "7px" }}>
                <SportsSoccerIcon
                  style={{
                    color: "whitesmoke",
                    marginTop: "10px",
                    marginLeft: "50px",
                    fontSize: "25px",
                  }}
                ></SportsSoccerIcon>
                <Typography
                  style={{
                    padding: "5px",

                    color: "white",
                    marginTop: "6px",
                  }}
                >
                  Clova
                </Typography>
                <div
                  style={{
                    borderLeft: "1px solid #5c5a5a",
                    height: "25px",
                    marginTop: "10px",
                    marginLeft: "12px",
                  }}
                ></div>
                <PhoneIcon
                  style={{
                    color: "#5058b6",
                    marginTop: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                ></PhoneIcon>
                <Grid style={{ marginTop: "5px", marginLeft: "5px" }}>
                  <Typography style={{ color: "#e1dede", fontSize: "13px" }}>
                    829-362-7204
                  </Typography>
                  <Typography style={{ color: "grey", fontSize: "10px" }}>
                    Help&Support
                  </Typography>
                </Grid>
              </div>
              <Button
                style={{
                  textTransform: "capitalize",
                  color: "#daf0e7",
                  backgroundColor: "#33b07d",
                  fontSize: "16px",
                  width: "150px",
                  height: "35px",
                  marginLeft: "420px",
                  marginTop: "10px",
                }}
              >
                +New Property
              </Button>

              <TextsmsRoundedIcon
                style={{
                  backgroundColor: "black",
                  borderRadius: "15px",
                  color: "#4b586b",
                  padding: "2px",
                  marginTop: "15px",
                  marginLeft: "35px",
                  fontSize: "18px",
                }}
              ></TextsmsRoundedIcon>

              <NotificationsRoundedIcon
                style={{
                  backgroundColor: "black",
                  borderRadius: "5px",
                  color: "#4b586b",
                  padding: "2px",
                  marginTop: "13px",
                  marginLeft: "10px",
                  fontSize: "20px",
                }}
              ></NotificationsRoundedIcon>
              <Grid
                className={classes.topbar}
                style={{
                  backgroundColor: "black",
                  marginLeft: "20px",
                  padding: "5px",
                }}
              >
                <Avatar
                  src="https://www.pikpng.com/pngl/m/4-46401_business-man-png-free-image-download-businessman-png.png"
                  style={{ height: "30px", width: "30px", marginTop: "6px" }}
                ></Avatar>
                <Grid>
                  <Typography
                    style={{
                      color: "#e1dede",
                      fontSize: "15px",
                      marginLeft: "15px",
                      marginTop: "5px",
                    }}
                  >
                    Rodney Leonard
                  </Typography>
                  <Typography
                    style={{
                      color: "#4b586b",
                      fontWeight: "500",
                      fontSize: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    Landlord
                  </Typography>
                </Grid>
                <ExpandMoreOutlinedIcon
                  style={{
                    color: "#d5cfcf",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                ></ExpandMoreOutlinedIcon>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.topbar} style={{ padding: "7px" }}>
              <Grid
                style={{
                  display: "flex",
                  marginLeft: "50px",
                  marginTop: "5px",
                }}
              >
                <DashboardRoundedIcon
                  style={{ color: "#2525cf", fontSize: "19px" }}
                ></DashboardRoundedIcon>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginTop: "3px",
                    fontWeight: "600",
                    marginLeft: "7px",
                    color: "#2525cf",
                  }}
                >
                  Dashboard
                </Typography>
                <div
                  style={{
                    borderBottom: "2.5px solid #2525cf",
                    width: "89px",
                    marginBottom: "-6.5px",
                    marginLeft: "-86px",
                  }}
                ></div>
                <MonetizationOnRoundedIcon
                  style={{
                    color: "#8190ad",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop: "2.5px",
                  }}
                ></MonetizationOnRoundedIcon>

                <Typography
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginLeft: "7px",
                    color: "#616791",
                    marginTop: "3px",
                  }}
                >
                  Accounting
                </Typography>
                <ListAltRoundedIcon
                  style={{
                    color: "#8190ad",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop: "2.5px",
                  }}
                ></ListAltRoundedIcon>
                <Typography
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginLeft: "7px",
                    color: "#616791",
                    marginTop: "3px",
                  }}
                >
                  Reports
                </Typography>
                <TextsmsRoundedIcon
                  style={{
                    color: "#8190ad",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop: "2.5px",
                  }}
                ></TextsmsRoundedIcon>
                <Typography
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginLeft: "7px",
                    color: "#616791",
                    marginTop: "3px",
                  }}
                >
                  Messages
                </Typography>
                <CheckCircleOutlineRoundedIcon
                  style={{
                    color: "#8190ad",
                    fontSize: "20px",
                    marginLeft: "20px",
                    marginTop: "2.5px",
                  }}
                ></CheckCircleOutlineRoundedIcon>
                <Typography
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginLeft: "7px",
                    color: "#616791",
                    marginTop: "3px",
                  }}
                >
                  Tasks
                </Typography>
                <MoreHorizRoundedIcon
                  style={{
                    color: "#8190ad",
                    fontSize: "25px",
                    marginLeft: "20px",
                    marginTop: "1px",
                  }}
                ></MoreHorizRoundedIcon>
              </Grid>
              <Box
                style={{
                  display: "flex",
                  padding: "6px",
                  backgroundColor: "whitesmoke",
                  marginLeft: "335px",
                  width: "200px",
                  borderRadius: "5px",
                }}
              >
                <SearchRoundedIcon
                  style={{
                    fontSize: "17px",
                    marginTop: "3px",
                    color: "#616791",
                  }}
                ></SearchRoundedIcon>
                <Typography
                  style={{
                    fontSize: "13px",
                    marginLeft: "5px",
                    marginTop: "3px",
                    marginRight: "5px",
                    color: "#b4bacb",
                  }}
                >
                  Search anything here...
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.contentbar}>
            <Grid item xs={12}>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  marginLeft: "40px",
                  marginRight: "25px",
                }}
              >
                <Grid style={{ display: "flex" }}>
                  <Grid>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "600", color: "#3c3a5e" }}
                    >
                      Dashboard
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "13px",
                        color: "#6264a0",
                        fontWeight: "200px",
                      }}
                    >
                      Welcome to #1 Property Management Platform
                    </Typography>
                  </Grid>
                  <Box
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      marginLeft: "613px",
                      padding: "1px",
                      height: "30px",
                      width: "185px",
                      boxShadow: "0px 0px 0.5px 0.5px #d4e6e6",
                    }}
                  >
                    <DateRangeRoundedIcon
                      style={{
                        marginLeft: "5px",
                        marginTop: "8px",
                        color: "#6264a0",
                        fontSize: "16px",
                      }}
                    ></DateRangeRoundedIcon>
                    <Typography
                      style={{
                        fontSize: "14px",
                        marginTop: "6px",
                        marginLeft: "5px",
                        color: "#6264a0",
                        fontWeight: "500",
                      }}
                    >
                      Jan 2019 - Dec 2019
                    </Typography>
                    <ExpandMoreOutlinedIcon
                      style={{
                        marginTop: "7px",
                        marginLeft: "5px",
                        color: "#6264a0",
                        fontSize: "17px",
                      }}
                    ></ExpandMoreOutlinedIcon>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  xs={8}
                  style={{
                    backgroundColor: "white",
                    marginLeft: "60px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <Grid item xs={12} style={{ padding: "5px" }}>
                    <Grid style={{ display: "flex" }}>
                      <Grid>
                        <Typography
                          style={{ fontWeight: "500", color: "#2a2b2a" }}
                        >
                          Property Revenue Overview
                        </Typography>
                        <Grid style={{ display: "flex" }}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              marginTop: "5px",
                              color: "#3f3f99",
                            }}
                          >
                            Show overview Jan 2019-Dec 2019{" "}
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              marginTop: "5px",
                              marginLeft: "10px",
                              color: "#2222c0",
                              fontWeight: "500",
                            }}
                          >
                            {" "}
                            Detailed Status{" "}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "whitesmoke",
                          width: "160px",
                          height: "27px",
                          padding: "3px",
                          borderRadius: "5px",
                          marginLeft: "210px",
                        }}
                      >
                        <CloudDownloadIcon
                          style={{
                            marginLeft: "10px",
                            marginTop: "4px",
                            fontSize: "20px",
                            color: "#474fae",
                          }}
                        ></CloudDownloadIcon>
                        <Typography
                          style={{
                            marginLeft: "10px",
                            marginTop: "4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#474fae",
                          }}
                        >
                          Download Report
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: "15px" }}>
                      <Grid style={{ display: "flex" }}>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "3c3a5e#",
                            borderBottom: "2px solid #3c3a5e",
                            padding: "5px",
                            marginTop: "-4px",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#bebcbc",
                            marginLeft: "20px",
                          }}
                        >
                          Leasing
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#bebcbc",
                            marginLeft: "20px",
                          }}
                        >
                          Conversion
                        </Typography>
                      </Grid>

                      <Grid style={{ display: "flex" }}>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#bebcbc",
                            marginLeft: "300px",
                          }}
                        >
                          Week
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#4d4343",
                            marginLeft: "20px",
                          }}
                        >
                          Month
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#bebcbc",
                            marginLeft: "20px",
                          }}
                        >
                          Year
                        </Typography>
                      </Grid>
                    </Grid>

                    <Divider style={{ width: "720px", marginTop: "-1px" }} />

                    <Grid style={{ marginTop: "20px", display: "flex" }}>
                      <img
                        src="https://www.infscripts.com/wp-content/uploads/2015/06/chart.png"
                        height="220"
                        width="415"
                      ></img>
                      <Grid style={{ marginLeft: "50px" }}>
                        <Box
                          style={{
                            border: "1px solid #c2c2ec",
                            padding: "10px",
                            width: "230px",
                            borderRadius: "10px",
                          }}
                        >
                          <ChevronRightIcon
                            style={{ fontSize: "17px", marginLeft: "215px" }}
                          ></ChevronRightIcon>
                          <Typography
                            style={{
                              fontSize: "30px",
                              fontWeight: "570",
                              color: "#5058b6",
                              marginLeft: "10px",
                              marginTop: "-10px",
                            }}
                          >
                            $46,690
                          </Typography>
                          <Grid style={{ display: "flex", marginLeft: "10px" }}>
                            <Typography
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#7a8ba9",
                                marginTop: "3px",
                                marginBottom: "5px",
                              }}
                            >
                              Money in
                            </Typography>
                            <CallMadeIcon
                              style={{
                                fontSize: "13px",
                                marginTop: "7px",
                                marginLeft: "7px",
                                backgroundColor: "#41b785",
                                color: "white",
                                borderRadius: "5px",
                              }}
                            ></CallMadeIcon>
                            <Typography
                              style={{
                                fontSize: "14px",
                                color: "#41b785",
                                marginLeft: "7px",
                                marginTop: "3px",
                              }}
                            >
                              5.8%
                            </Typography>
                          </Grid>
                        </Box>
                        <Box
                          style={{
                            border: "1px solid #f6c695",
                            marginTop: "8px",
                            padding: "10px",
                            width: "230px",
                            borderRadius: "10px",
                          }}
                        >
                          <ChevronRightIcon
                            style={{
                              fontSize: "15px",
                              marginLeft: "215px",
                              color: "#ff7600",
                            }}
                          ></ChevronRightIcon>
                          <Typography
                            style={{
                              fontSize: "27px",
                              fontWeight: "550",
                              color: "#ff8838",
                              marginLeft: "10px",
                              marginTop: "-10px",
                            }}
                          >
                            $8,940
                          </Typography>
                          <Grid
                            style={{
                              display: "flex",
                              marginLeft: "10px",
                              marginTop: "3px",
                              marginBottom: "5px",
                            }}
                          >
                            <Typography
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#7a8ba9",
                              }}
                            >
                              Money out
                            </Typography>
                            <CallMadeIcon
                              style={{
                                fontSize: "13px",
                                marginTop: "3px",
                                marginLeft: "7px",
                                backgroundColor: "#ff545d",
                                color: "white",
                                borderRadius: "5px",
                              }}
                            ></CallMadeIcon>
                            <Typography
                              style={{
                                fontSize: "14px",
                                color: "#ff545d",
                                marginLeft: "7px",
                              }}
                            >
                              26.4%
                            </Typography>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "white",
                      marginRight: "60px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid style={{ display: "flex", padding: "5px" }}>
                      <BusinessTwoToneIcon
                        style={{
                          fontSize: "40px",
                          color: "#0e419e",
                          marginTop: "10px",
                          marginLeft: "10px",
                        }}
                      ></BusinessTwoToneIcon>

                      <Grid style={{ padding: "5px", marginLeft: "5px" }}>
                        <Typography
                          style={{ fontWeight: "500", fontSize: "20px" }}
                        >
                          98
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "11px",
                            color: "#0606b8",
                            fontWeight: "500",
                          }}
                        >
                          Properties
                        </Typography>
                      </Grid>
                      <Typography
                        style={{
                          fontSize: "14px",
                          marginLeft: "25px",
                          color: "#0606b8",
                          fontWeight: "500",
                          marginTop: "10px",
                        }}
                      >
                        See all properties
                      </Typography>
                      <ChevronRightIcon
                        style={{
                          color: "#0606b8",
                          fontSize: "15px",
                          marginTop: "13px",
                        }}
                      ></ChevronRightIcon>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        marginBottom: "15px",
                        marginTop: "10px",
                        marginLeft: "25px",
                        borderRadius: "10px",
                        backgroundColor: "#e9f3f4",
                        marginRight: "25px",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#e9f3f4",
                          padding: "8px",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "22px",
                            fontWeight: "500",
                            marginLeft: "13px",
                            marginTop: "3px",
                            color: "#122343",
                          }}
                        >
                          8
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "13px",
                            color: "#8392af",
                            marginTop: "-3px",
                          }}
                        >
                          Vacant
                        </Typography>
                      </Box>

                      <div
                        style={{
                          borderLeft: "1px solid #e6e5e5",
                          height: "40px",
                          marginTop: "13px",
                          marginLeft: "12px",
                        }}
                      ></div>
                      <Box
                        style={{
                          backgroundColor: "#e9f3f4",
                          padding: "8px",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            marginLeft: "13px",
                            marginTop: "3px",
                            color: "#122343",
                          }}
                        >
                          64
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", color: "#8392af" }}
                        >
                          Occupied
                        </Typography>
                      </Box>

                      <div
                        style={{
                          borderLeft: "1px solid #e6e5e5",
                          height: "40px",
                          marginTop: "13px",
                          marginLeft: "12px",
                        }}
                      ></div>
                      <Box
                        style={{
                          backgroundColor: "#e9f3f4",
                          padding: "8px",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            marginLeft: "13px",
                            marginTop: "3px",
                            color: "#122343",
                          }}
                        >
                          16
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", color: "#8392af" }}
                        >
                          Unlisted
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "white",
                      marginRight: "60px",
                      padding: "10px",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid style={{ display: "flex", padding: "2px" }}>
                      <Grid style={{ padding: "5px", marginLeft: "10px" }}>
                        <Typography
                          style={{
                            fontWeight: "500",
                            fontSize: "19px",
                            color: "#33415c",
                          }}
                        >
                          Last 30 Days
                        </Typography>
                      </Grid>

                      <MoreHorizRoundedIcon
                        style={{
                          color: "grey",
                          marginTop: "10px",
                          marginLeft: "120px",
                        }}
                      ></MoreHorizRoundedIcon>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        marginBottom: "15px",
                        marginTop: "10px",
                        marginLeft: "15px",
                        borderRadius: "10px",
                        marginRight: "25px",
                      }}
                    >
                      <Box style={{ backgroundColor: "white" }}>
                        <Typography
                          style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            marginLeft: "2px",
                            color: "#37b47f",
                          }}
                        >
                          $36,840
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "13px",
                            color: "#3f3f99",
                            marginLeft: "2px",
                          }}
                        >
                          paid invoices
                        </Typography>
                      </Box>

                      <div
                        style={{
                          borderLeft: "2px solid #e6e5e5",
                          height: "50px",
                          marginTop: "5px",
                          marginLeft: "45px",
                        }}
                      ></div>
                      <Box
                        style={{ backgroundColor: "white", marginLeft: "5px" }}
                      >
                        <Typography
                          style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            marginLeft: "13px",
                            color: "#ff515a",
                          }}
                        >
                          $8,420
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "13px",
                            color: "#909pd4",
                            marginLeft: "13px",
                          }}
                        >
                          open invoices
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid style={{ display: "flex" }}>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "#ebecf6",
                          width: "160px",
                          height: "27px",
                          padding: "3px",
                          borderRadius: "5px",
                          marginLeft: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography
                          style={{
                            marginLeft: "15px",
                            marginTop: "4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#4c54b1",
                          }}
                        >
                          $ Receive Payments
                        </Typography>
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          color: "#535ab4",
                          marginLeft: "30px",
                          marginTop: "5px",
                          fontWeight: "500",
                        }}
                      >
                        View all
                      </Typography>
                      <ChevronRightIcon
                        style={{
                          color: "#535ab4",
                          fontSize: "17px",
                          marginTop: "5px",
                        }}
                      ></ChevronRightIcon>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ display: "flex" }}>
                <Grid item xs={8} style={{ display: "flex" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      backgroundColor: "white",
                      marginLeft: "60px",
                      marginTop: "20px",
                      padding: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid>
                      <Grid style={{ display: "flex", marginTop: "10px" }}>
                        <Typography
                          style={{
                            color: "#152645",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Recent Tasks
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "95px",
                            color: "#4a52b0",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          See all tasks{" "}
                        </Typography>
                        <ExpandMoreOutlinedIcon
                          style={{
                            color: "#0606b8",
                            fontSize: "15px",
                            marginLeft: "3px",
                            marginTop: "2px",
                          }}
                        ></ExpandMoreOutlinedIcon>
                      </Grid>

                      <Grid style={{ display: "flex", marginTop: "25px" }}>
                        <Typography
                          style={{
                            borderBottom: "2px solid #152645",
                            marginTop: "-4px",
                            marginLeft: "-4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#152645",
                            padding: "5px",
                          }}
                        >
                          Incoming Requests
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "#bdbcc7",
                            marginLeft: "25px",
                          }}
                        >
                          Assigned to me
                        </Typography>
                      </Grid>
                      <Divider></Divider>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <Grid style={{ display: "flex" }}>
                        <Typography
                          style={{
                            color: "#5d5183",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                          }}
                        >
                          Hole in Bedroom Screen at 150 Ma...
                        </Typography>
                        <Typography
                          style={{
                            color: "#8291ae",
                            fontSize: "11px",
                            marginLeft: "30px",
                          }}
                        >
                          1d ago
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid style={{ display: "flex", padding: "5px" }}>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "#eaf7f2",
                          width: "40px",
                          height: "20px",
                          padding: "1px",
                          borderRadius: "5px",
                          marginLeft: "1px",
                        }}
                      >
                        <Typography
                          style={{
                            marginLeft: "10px",
                            marginTop: "3px",
                            fontSize: "11px",
                            fontWeight: "500",
                            color: "#21e191",
                          }}
                        >
                          New
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "#ebecf6",
                          width: "100px",
                          height: "20px",
                          padding: "1px",
                          borderRadius: "5px",
                          marginLeft: "6px",
                        }}
                      >
                        <Typography
                          style={{
                            marginLeft: "5px",
                            marginTop: "2px",
                            fontSize: "11px",
                            fontWeight: "500",
                            color: "#0606b8",
                          }}
                        >
                          Resident Requests
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid style={{ display: "flex", marginTop: "10px" }}>
                      <Avatar
                        style={{
                          height: "20px",
                          width: "20px",
                          marginLeft: "10px",
                        }}
                        src="https://www.pikpng.com/pngl/m/4-46401_business-man-png-free-image-download-businessman-png.png"
                      ></Avatar>
                      <Typography
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#7c8caa",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      >
                        Robert Friedman
                      </Typography>
                    </Grid>

                    <Divider style={{ marginTop: "15px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <Grid style={{ display: "flex" }}>
                        <Typography
                          style={{
                            color: "#5d5183",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                          }}
                        >
                          Finding a new tenant at 3 Industria...
                        </Typography>
                        <Typography
                          style={{
                            color: "#8291ae",
                            fontSize: "11px",
                            marginLeft: "30px",
                          }}
                        >
                          2d ago
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid style={{ display: "flex", padding: "5px" }}>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "#e9fef6",
                          width: "40px",
                          height: "20px",
                          padding: "1px",
                          borderRadius: "5px",
                          marginLeft: "1px",
                        }}
                      >
                        <Typography
                          style={{
                            marginLeft: "10px",
                            marginTop: "3px",
                            fontSize: "11px",
                            fontWeight: "500",
                            color: "#21e191",
                          }}
                        >
                          New
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          backgroundColor: "#fff3ea",
                          width: "120px",
                          height: "20px",
                          padding: "1px",
                          borderRadius: "5px",
                          marginLeft: "6px",
                        }}
                      >
                        <Typography
                          style={{
                            marginLeft: "5px",
                            marginTop: "2px",
                            fontSize: "11px",
                            fontWeight: "500",
                            color: "#ffaa69",
                          }}
                        >
                          Rental Owner request
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    style={{
                      backgroundColor: "white",
                      marginLeft: "15px",
                      marginTop: "20px",
                      padding: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    <Grid item xs={12}>
                      <Grid style={{ display: "flex", marginTop: "10px" }}>
                        <Typography
                          style={{
                            color: "#152645",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Expiring Leases
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "80px",
                            color: "#4a52b0",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          See details{" "}
                        </Typography>
                        <ExpandMoreOutlinedIcon
                          style={{
                            color: "0606b8",
                            marginLeft: "3px",
                            marginTop: "3px",
                            fontSize: "15px",
                          }}
                        ></ExpandMoreOutlinedIcon>
                      </Grid>
                      <Grid style={{ marginLeft: "25px", marginTop: "30px" }}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HK1ErR-LoEWNqrZMnw4xJrW26RQoCj4DycI4n1_SiOHTpQi-2Q6_VjMhvcMP1oLRq5s&usqp=CAU"
                          height="150"
                          width="270"
                        ></img>
                      </Grid>
                      <Grid
                        style={{
                          marginTop: "10px",
                          padding: "10px",
                          display: "flex",
                          marginLeft: "25px",
                        }}
                      >
                        <Grid>
                          <Grid style={{ display: "flex" }}>
                            <CheckBoxOutlineBlankIcon
                              style={{
                                fontSize: "small",
                                backgroundColor: "#ff535c",
                                color: "#ff535c",
                                borderRadius: "5px",
                                marginTop: "5px",
                              }}
                            ></CheckBoxOutlineBlankIcon>
                            <Typography
                              style={{
                                fontSize: "17px",
                                fontWeight: "500",
                                marginLeft: "5px",
                                color: "#054135",
                              }}
                            >
                              8
                            </Typography>
                          </Grid>

                          <Typography
                            style={{
                              fontSize: "15px",
                              color: "#7c8daa",
                              fontSize: "13px",
                            }}
                          >
                            {" "}
                            30days
                          </Typography>
                        </Grid>

                        <Grid style={{ marginLeft: "30px" }}>
                          <Grid style={{ display: "flex" }}>
                            <CheckBoxOutlineBlankIcon
                              style={{
                                fontSize: "small",
                                backgroundColor: "#ff8a31",
                                color: "#ff8a31",
                                borderRadius: "5px",
                                marginTop: "5px",
                              }}
                            ></CheckBoxOutlineBlankIcon>
                            <Typography
                              style={{
                                fontSize: "17px",
                                fontWeight: "500",
                                marginLeft: "5px",
                                color: "#054135",
                              }}
                            >
                              16
                            </Typography>
                          </Grid>

                          <Typography
                            style={{
                              fontSize: "15px",
                              color: "#7c8daa",
                              fontSize: "13px",
                            }}
                          >
                            {" "}
                            31-60 days
                          </Typography>
                        </Grid>

                        <Grid style={{ marginLeft: "30px" }}>
                          <Grid style={{ display: "flex" }}>
                            <CheckBoxOutlineBlankIcon
                              style={{
                                fontSize: "small",
                                backgroundColor: "#474fb2",
                                color: "#474fb2",
                                borderRadius: "5px",
                                marginTop: "5px",
                              }}
                            ></CheckBoxOutlineBlankIcon>
                            <Typography
                              style={{
                                fontSize: "17px",
                                fontWeight: "500",
                                marginLeft: "5px",
                                color: "#054135",
                              }}
                            >
                              22
                            </Typography>
                          </Grid>

                          <Typography
                            style={{
                              fontSize: "15px",
                              color: "#7c8daa",
                              fontSize: "13px",
                            }}
                          >
                            {" "}
                            61-90 days
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{
                    backgroundColor: "white",
                    marginLeft: "15px",
                    marginTop: "20px",
                    padding: "15px",
                    borderRadius: "10px",
                    marginRight: "60px",
                  }}
                >
                  <Grid item xs={12}>
                    <Grid style={{ display: "flex", marginTop: "10px" }}>
                      <Typography
                        style={{
                          color: "#102342",
                          fontSize: "33px",
                          fontWeight: "600",
                        }}
                      >
                        $6,280
                      </Typography>

                      <MoreHorizRoundedIcon
                        style={{ color: "grey", marginLeft: "200px" }}
                      ></MoreHorizRoundedIcon>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "5px",
                      }}
                    >
                      <Grid>
                        <Typography
                          style={{
                            fontWeight: "800",
                            color: "#212c4b",
                            marginLeft: "px",
                            marginTop: "5px",
                            fontSize: "15px",
                          }}
                        >
                          {" "}
                          Outstanding Balances
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "12px",
                            marginTop: "2px",
                            fontWeight: "500",
                            marginLeft: "5px",
                            color: "#7688a6",
                          }}
                        >
                          All properties{" "}
                        </Typography>
                      </Grid>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Icons8_flat_bar_chart.svg/1024px-Icons8_flat_bar_chart.svg.png"
                        height="50"
                        width="100"
                        style={{ marginLeft: "70px" }}
                      ></img>
                    </Grid>

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <img
                        width="100"
                        height="110"
                        src="data:image/jpeg;base64,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"
                      ></img>
                      <Grid>
                        <Typography
                          style={{
                            fontWeight: "800",
                            color: "#445068",
                            marginLeft: "15px",
                            marginTop: "5px",
                            fontSize: "0.85rem",
                          }}
                        >
                          {" "}
                          Garden Row Multi Building Complex
                        </Typography>
                        <Grid style={{ display: "flex", marginTop: "5px" }}>
                          <Avatar
                            style={{
                              backgroundColor: "#bdc5d4",
                              color: "grey",
                              height: "20px",
                              width: "20px",
                              padding: "3px",
                              fontSize: "11px",
                              marginLeft: "10px",
                              border: "1px solid grey",
                            }}
                          >
                            AR
                          </Avatar>
                          <Typography
                            style={{
                              fontSize: "13px",
                              marginLeft: "5px",
                              marginTop: "4px",
                              color: "#7b8aa9",
                            }}
                          >
                            Amanda Rawles
                          </Typography>
                        </Grid>

                        <Typography
                          style={{
                            marginLeft: "10px",
                            marginTop: "5px",
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#3db682",
                          }}
                        >
                          $350
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
