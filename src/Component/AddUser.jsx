import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {setUserName,addUsername} from '../ActionCreator/Action'

const AddUser = ({setUserName,addUsername,userName}) => {
    return (
        <div className='d-flex flex-column'>
            <nav style={{width:'100vh'}}>
            <Link to='/dashboard' className='btn btn-primary ml-3 mt-3' >Dashboard</Link>
            </nav>
        <div className="d-flex flex-column justify-content-center align-items-center" >
                <h3 className='mt-5' >Add User</h3> 
                <div className="form-group mt-5">
                    <label htmlFor="userName">User Name :-</label>
                    <input type="text" className="form-control" id="userName"  placeholder="User Name" onBlur={(e)=> setUserName(e.target.value)} required />
                </div>
                <Link to='./dashboard' className="btn btn-success" onClick={(e)=> addUsername(userName)}>Submit</Link>          
        </div>
    </div>

    );
};

const mapStateToProps = (state)=> {
    return {
        userName: state.app.userName, 
    };
}


export default connect(mapStateToProps,{setUserName,addUsername}) (AddUser);