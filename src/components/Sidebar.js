import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";
import TelegramIcon from "@material-ui/icons/Telegram";
import MoneyIcon from "@material-ui/icons/Money";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import { UserItems, AdminItems, RoleItems } from "../pages/data";
import { useHistory } from "react-router-dom";
import { MenuItems, UserMenuItems } from "../pages/FormElements";

const useStyles = makeStyles(() => ({
  list: {
    width: "100%",
    maxWidth: "264px",
    backgroundColor: "#c7c0c0",
    color: "#f3e7e7eb",
    paddingBottom: "74px",
  },
  listitem: {
    borderBottom: "2px solid #696161",
  },
  text: {
    fontSize: "13px",
    color: "#e2e4ea",
    fontFamily: "Roboto",
  },
  typo: {
    color: "#0c1d7b",
    fontFamily: "Roboto",
    fontSize: "14px",
  },
  root: {
    margin: "5px",
    "&:hover": {
      backgroundColor: "#675f5f",
      borderRadius: "5px",
    },
  },
}));

export default function Sidebar() {
  let history = useHistory();
  const classes = useStyles();
  const [userdropdown, setuserDropdown] = useState(false);
  const [admindropdown, setadminDropdown] = useState(false);
  const username = localStorage.getItem("username");

  const handleClick = () => {
    debugger;
    setuserDropdown((userdropdown) => !userdropdown);
  };

  const handleClick1 = () => {
    debugger;
    setadminDropdown((admindropdown) => !admindropdown);
  };

  const adminmenu = (
    <div className={classes.list}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button className={classes.listitem}>
          <ListItemText
            primary={
              <Typography className={classes.typo}>
                Clinical policies and Guidlines
              </Typography>
            }
          />
        </ListItem>
        {MenuItems.map((item) => {
          return (
            <>
              {item.userdropdown ? (
                <li className={classes.navitem} onClick={handleClick1}>
                  {/* <ListItem button className={classes.listitem}>
        <ListItemIcon>
          <MoneyIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography className={classes.text}>
              Prior Authorization Pharmacy
            </Typography>
          }
        />
        <ArrowDropDownIcon />
      </ListItem> */}
                  {admindropdown &&
                    RoleItems.map((item, index) => {
                      return (
                        <div className={classes.root}>
                          <ListItem button className={classes.text} key={index}>
                            <ListItemIcon style={{ color: "#fff" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography className={classes.text}>
                                  {item.title}
                                </Typography>
                              }
                            />
                          </ListItem>
                        </div>
                      );
                    })}
                </li>
              ) : (
                <ListItem button className={classes.listitem}>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className={classes.text}>
                        {item.name}
                      </Typography>
                    }
                  />
                </ListItem>
              )}
            </>
          );
        })}

        {/* <ListItem button className={classes.listitem}>
      <ListItemIcon>
        <TelegramIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.text}>
            Case management Correspondence
          </Typography>
        }
      />
    </ListItem> */}

        {/* <ListItem button className={classes.listitem}>
      <ListItemIcon>
        <TelegramIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.text}>
            Case management Roster
          </Typography>
        }
      />
    </ListItem>
<ListItem button className={classes.listitem}>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className={classes.text}>Claims</Typography>}
      />
    </ListItem> */}
        {/* <li className={classes.navitem} onClick={handleClick}>
          <ListItem button className={classes.listitem}>
            <ListItemIcon>
              <MoneyIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.text}>
                  Medical/Behavioral Health
                </Typography>
              }
            />
            <ArrowDropDownIcon />
          </ListItem>
          {userdropdown && AdminItems.map((item, index) => {
          return (
            <div className={classes.root}>
              <ListItem button className={classes.text} key={index}>
                <ListItemIcon style={{ color: "#fff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography className={classes.text} >
                      {item.title}
                    </Typography>
                  }
                />
              </ListItem>
            </div>
          );
        })}


        </li>
<ListItem button className={classes.listitem}>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className={classes.text}>Appeals</Typography>}
      />
    </ListItem>
    <ListItem button className={classes.listitem}>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.text}>Correspondence</Typography>
        }
      />
    </ListItem>

    <ListItem button className={classes.listitem}>
      <ListItemIcon>
      <PersonIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography className={classes.text}>Change Password</Typography>
        }
      />
    </ListItem> */}
      </List>
    </div>
  );

  const handleuser = (e) => {
    e.preventDefault();
    history.push("/medical-pa");
  };

  return (
    <>
      {username === "user" ? (
        <div className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {UserMenuItems.map((item) => {
              return (
                <>
                  {!item.userdropdown&&!item.admindropdown ? (
                    <ListItem button className={classes.listitem}>
                      <ListItemText
                        primary={
                          <Typography className={classes.typo}>
                            {item.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ) : (
                    <>
                    {item.userdropdown&&(
                      <li className={classes.navitem} onClick={handleClick}>
                        <ListItem button className={classes.listitem}>
                          <ListItemIcon>
                            <MoneyIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography className={classes.text}>
                                {item.name}
                              </Typography>
                            }
                          />
                          <ArrowDropDownIcon />
                        </ListItem>
                        {userdropdown &&
                          UserItems.map((item, index) => {
                            return (
                              <div className={classes.root}>
                                <div className={classes.root1}>
                                  <ListItem
                                    button
                                    className={classes.text}
                                    key={index}
                                  >
                                    <ListItemIcon style={{ color: "#fff" }}>
                                      {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                      className={classes.listitemtext}
                                      primary={
                                        <Typography
                                          className={classes.text}
                                          onClick={handleuser}
                                        >
                                          {item.title}
                                        </Typography>
                                      }
                                    />
                                  </ListItem>
                                </div>
                              </div>
                            );
                          })}
                      </li>
                      )}
                  
                  {item.admindropdown&&
                      <li className={classes.navitem} onClick={handleClick1}>
                        <ListItem button className={classes.listitem}>
                          <ListItemIcon>
                            <MoneyIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography className={classes.text}>
                                {item.name}
                              </Typography>
                            }
                          />
                          <ArrowDropDownIcon />
                        </ListItem>
                        {admindropdown &&
                          RoleItems.map((item, index) => {
                            return (
                              <div className={classes.root}>
                                <ListItem
                                  button
                                  className={classes.text}
                                  key={index}
                                >
                                  <ListItemIcon style={{ color: "#fff" }}>
                                    {item.icon}
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={
                                      <Typography className={classes.text}>
                                        {item.title}
                                      </Typography>
                                    }
                                  />
                                </ListItem>
                              </div>
                            );
                          })}
                      </li>
            }
                    </>
                  )}
                </>
              );
            })}
          </List>
        </div>
      ) : (
        adminmenu
      )}
    </>
  );
}
