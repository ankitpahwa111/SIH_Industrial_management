import React from 'react';


const ProjectSummary = (props) => {
    console.log(props)
    const store = props.store;

    return (

        <div class="card mynewcard">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://d28fujbigzf56k.cloudfront.net/static/img/store-logo.png" />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{store.name}<i class="material-icons right">more_vert</i></span>
                <p className="red-text text-darken-3"> Reveal More To view Opening Hours -------  </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{store.name}  Opening Hours<i class="material-icons right">close</i></span>
                <ul className="flow-text">
                    <li>
                        <blockquote> Monday : 12:11:00 to 23:00:00 </blockquote>
                    </li>
                    <br />
                    <li>
                    <blockquote>Tuesday : 11:30:50 to 22:00:22</blockquote>
              </li>
                    <br />
                    <li>
                    <blockquote>Wednesday : 11:00:00 to 21:00:00</blockquote>
              </li>
                    <br />
                    <li>
                    <blockquote>Thursday : 12:11:00 to 23:00:00</blockquote>
              </li>
                    <br />
                    <li>
                    <blockquote>Friday : 02:58:00 to 02:02:00</blockquote>
              </li>
                    <br />
                    <li>
                    <blockquote>Saturday : 12:11:00 to 23:00:00</blockquote>
              </li>
                    <br />
                    <li>
                    <blockquote>Sunday : 10:00:00 to 21:00:00</blockquote>
              </li>
                </ul>
            </div>
        </div>

    )
}

export default ProjectSummary;