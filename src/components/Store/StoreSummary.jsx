import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
class ProjectSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: [
                {
                    "id": 1,
                    "weekday": "Monday",
                    "from_hour": "12:11:00",
                    "to_hour": "23:00:00",
                    "place": 1
                },
                {
                    "id": 2,
                    "weekday": "Tuesday",
                    "from_hour": "11:30:50",
                    "to_hour": "22:00:22",
                    "place": 1
                },
                {
                    "id": 3,
                    "weekday": "Wednesday",
                    "from_hour": "11:00:00",
                    "to_hour": "21:00:00",
                    "place": 1
                },
                {
                    "id": 4,
                    "weekday": "Thursday",
                    "from_hour": "10:10:00",
                    "to_hour": "20:00:00",
                    "place": 1
                },
                {
                    "id": 5,
                    "weekday": "Friday",
                    "from_hour": "02:58:00",
                    "to_hour": "02:02:00",
                    "place": 1
                },
                {
                    "id": 6,
                    "weekday": "Saturday",
                    "from_hour": "10:00:00",
                    "to_hour": "22:00:00",
                    "place": 1
                },
                {
                    "id": 7,
                    "weekday": "Sunday",
                    "from_hour": "10:00:00",
                    "to_hour": "21:00:00",
                    "place": 1
                }
            ],
            day:'',
            from_hour : '',
            to_hour : ''
        }

        this.handleChange = this.handleChange.bind(this);
        
    }
    
    componentDidMount() {

        window.$('select').material_select()

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
          })
        const day = document.getElementById('day').options[document.getElementById('day').selectedIndex].text;
        const hours = this.state.hours;
        for (let i=0;i<hours.length;i++){
            let x = hours[i];
            if(x.weekday===day)
            {
                x.from_hour= this.state.from_hour;
                x.to_hour= this.state.to_hour;
                break;
            }
        }
        this.setState({
            hours : hours
        })
    }
    render() {
        
        return (

            <div class="card mynewcard">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6kvEQe9u7JYQCWUznV86_j-SxxyXEVFmLcxCKXFGp6XneXhH&s" />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Test Store<i class="material-icons right">more_vert</i></span>
                    <p className="red-text text-darken-3"> Reveal More To view Opening Hours -------  </p>
                    <br />
                    <Link to='./stores/store'>View Details</Link>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Test Store Opening Hours<i class="material-icons right">close</i></span>
                    <ul className="flow-text">
                        <li>
                            <blockquote>Expected Price : Rs 3 / KG</blockquote>
                        </li>
                        <br />
                        <li>
                            <blockquote>Delivery/Pickup Available : Yes</blockquote>
                        </li>
                        <br />
                        <li>
                            <blockquote>Contact Info : 9899429440</blockquote>
                        </li>
                        <br />
                        <li>
                            <blockquote>Grade : 304</blockquote>
                        </li>
                        <br/>
                        <li>
                            <blockquote>Thickness : 3mm</blockquote>
                        </li>
                    </ul>
                    <div class="input-field col s12">
                        <select id='day'>
                            <option value="" disabled selected>Flat</option>
                            <option value="1">Flat</option>
                            <option value="2">Roll</option>
                        </select>
                        <label>Select Form</label>
                    </div>
                    <div class="row">
                        <div class="col s6">
                            <input id="from_hour" type="text" class="validate" onChange={this.handleChange} />
                            {/* <label for="last_name">From Hour (HH:MM:SS)</label> */}
                        </div>
                        
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" onClick={this.handleChange}>Quote Price
                        <i class="material-icons right">create</i>
                    </button>
                </div>

            </div>

        )
    }


}

export default  (ProjectSummary);