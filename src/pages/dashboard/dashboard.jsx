import { Grid } from '@mui/material'
import React, { Component } from 'react'
import Navbar from '../../components/common/NavBar/User'
import Widget from '../../components/common/widget'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            products:'',
            cart: ''
        }
    }
  
    render() {
        return (
            <Grid container direction={'row'} columns='12' className='pt-28'>
                {/* <Grid item xs={'auto'} ><Sidebar/></Grid> */}
                <Grid item xs className=''>
                    <Navbar/>
                    <Grid container item xs={'auto'} className='flex p-5 gap-5'>
                        <Widget type="users" path="" number={5}/>
                        <Widget type="products" path="../productmanage" number={12}/>
                        <Widget type="cart " path="../cartmanage" number={6}/>
                        
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default Dashboard