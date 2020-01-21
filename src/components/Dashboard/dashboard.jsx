import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import {Redirect} from 'react-router-dom'
class Dashboard extends Component {
    state = {
        store: {}
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://testapi.halanx.com/stores/',
            headers: [

                {
                    "key": "Authorization",
                    "value": "Token 0f948ebc7f620891adde46a8b1d1049cc7d56fcc",
                    "description": "",
                    "enabled": true
                },
                {
                    "key": "",
                    "value": "",
                    "description": "",
                    "type": "text",
                    "enabled": true
                }

            ]
        }).then((store) => {
            console.log(store)
            this.setState({
                store: store
            })
        })
    }
    render() {

        return (
            <div className="dashboard container">
                <div className="mycard">
                    {/* <div className="col m6"> */}
                        <div class="row">
                            {/* <div class="col m7"> */}
                                <div class="card col m5">
                                    <div class="card-image">
                                        <img src='https://media.istockphoto.com/photos/oil-refinery-chemical-petrochemical-plant-picture-id582256640?k=6&m=582256640&s=612x612&w=0&h=HMX-gTHzDXnDhC9Q6XhWnJOZtncl9RVfpJrB49SXGQI=' />
                                        {/* <span class="card-title red-text text-darken-2 ">Welcome To Halanx Stores</span> */}
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Industrial waste is the waste produced by industrial activity which includes any
                                                        material that is useless during a manufacturing process. It is hazardous to human
                                                        health and environment. We aim to build a highly versatile software platform for collection and utilization of industrial waste management. </p>
                                    </div>
                                    <div class="card-action">
                                        <Link to='/stores'>Go To Stores </Link>
                                    </div>
                                </div>
                                <div className="card col m2">

                                </div>
                                <div class="card col m5">
                                    <div class="card-image">
                                        <img src='https://media.istockphoto.com/photos/oil-refinery-chemical-petrochemical-plant-picture-id582256640?k=6&m=582256640&s=612x612&w=0&h=HMX-gTHzDXnDhC9Q6XhWnJOZtncl9RVfpJrB49SXGQI=' />
                                        {/* <span class="card-title red-text text-darken-2 ">Welcome To Halanx Stores</span> */}
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Through Halanx app, customers can know about their neighborhood happenings and they can order from neighborhood businesses like Grocery stores, restaurants, and pharmacies, and get it delivered in as little as an hour, through our part time shoppers. </p>
                                    </div>
                                    <div class="card-action">
                                        <Link to='/stores'>Go To Stores </Link>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                        <div class="row">
                            {/* <div class="col m7"> */}
                                <div class="card col m5">
                                    <div class="card-image">
                                        <img src='https://media.istockphoto.com/photos/oil-refinery-chemical-petrochemical-plant-picture-id582256640?k=6&m=582256640&s=612x612&w=0&h=HMX-gTHzDXnDhC9Q6XhWnJOZtncl9RVfpJrB49SXGQI=' />
                                        {/* <span class="card-title red-text text-darken-2 ">Welcome To Halanx Stores</span> */}
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Through Halanx app, customers can know about their neighborhood happenings and they can order from neighborhood businesses like Grocery stores, restaurants, and pharmacies, and get it delivered in as little as an hour, through our part time shoppers. </p>
                                    </div>
                                    <div class="card-action">
                                        <Link to='/stores'>Go To Stores </Link>
                                    </div>
                                </div>
                                <div className="card col m2">

                                </div>
                                <div class="card col m5">
                                    <div class="card-image">
                                        <img src='https://media.istockphoto.com/photos/oil-refinery-chemical-petrochemical-plant-picture-id582256640?k=6&m=582256640&s=612x612&w=0&h=HMX-gTHzDXnDhC9Q6XhWnJOZtncl9RVfpJrB49SXGQI=' />
                                        {/* <span class="card-title red-text text-darken-2 ">Welcome To Halanx Stores</span> */}
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Through Halanx app, customers can know about their neighborhood happenings and they can order from neighborhood businesses like Grocery stores, restaurants, and pharmacies, and get it delivered in as little as an hour, through our part time shoppers. </p>
                                    </div>
                                    <div class="card-action">
                                        <Link to='/stores'>Go To Stores </Link>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>



                    {/* </div> */}
                    {/* <div className="col s12 m5 offset-m1">

                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard;
