import {Grid,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../components/common/NavBar/User";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

class CartManage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container direction={"row"} columns="12">
                <Grid item xs className="">
                    <Navbar/>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(CartManage);