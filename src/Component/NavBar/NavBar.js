import React, { Component } from "react";
import "./NavBar.css";
import { Grid } from "@material-ui/core";
import insta_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import dp from "../../images/pp1.png";
import react from "../../images/love.svg";
import Avatar from "@material-ui/core/Avatar";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="navbar_barContent">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className="navbar_logo" src={insta_logo} width="105px"/>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navbar_searchBar" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{display: "flex"}}>
                           <img className="navbar_img" src={home} width="30px"/>
                           <img className="navbar_img" src={message} width="30px"/>
                           <img className="navbar_img" src={find} width="30px"/>
                           <img className="navbar_img" src={react} width="30px"/>
                           <Avatar src={dp} className="navbar_img" style={{"maxHeight": "30px", maxWidth: "30px"}}/>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}

export default NavBar;