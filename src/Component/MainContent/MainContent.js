import React, { Component } from "react";
import "./MainContent.css";
import { Grid } from "@material-ui/core";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item={2}></Grid>
                    <Grid item={6} className="maincontent_container">
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid>
                        <Grid item={2}>
                        <InfoSection />
                        <Suggestions />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item={2}></Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainContent;