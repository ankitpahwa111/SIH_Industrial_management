import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import {Redirect} from 'react-router-dom'
class Dashboard extends Component {

    render() {

        return (
            <div className="dashboard container">
                <div className="mycard">
                    <div className="col s12 m6">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card">
                                    <div class="card-image">
                                        <img src='https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.' />
                                        <span class="card-title red-text text-darken-2 ">Welcome To Halanx Stores</span>
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Through Halanx app, customers can know about their neighborhood happenings and they can order from neighborhood businesses like Grocery stores, restaurants, and pharmacies, and get it delivered in as little as an hour, through our part time shoppers. </p>
                                    </div>
                                    <div class="card-action">
                                        <Link to ='/'>Go To Stores </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m5 offset-m1">

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
