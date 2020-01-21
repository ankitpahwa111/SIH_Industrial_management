import React from 'react';
import {NavLink } from 'react-router-dom';
import {signout} from '../../Store/authactions';
import {connect} from 'react-redux'
const SignedInLinks = (props)=>{
    //console.log('here')
    
    return(
        <div>
            <ul className='right'>
            
            <li><a onClick={props.signOut}>SELL</a></li>
            <li><NavLink to='/'>BUY</NavLink></li>
            <li><NavLink to='/'>Contact Expert</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-3'>AP</NavLink></li>
            
            </ul>
        </div>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut : ()=> dispatch(signout())
    }
}

export default connect(null , mapDispatchToProps)(SignedInLinks)