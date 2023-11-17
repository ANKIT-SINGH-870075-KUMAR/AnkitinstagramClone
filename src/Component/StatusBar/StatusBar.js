import React, { Component } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";
import statusimg from "../../images/pp2.png"

class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <div className="statusbar_container">
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">Deepika</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;
