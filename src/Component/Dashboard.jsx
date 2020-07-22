import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
     <>
            <h3 className='d-flex justify-content-center mt-5' >User's Dashboard</h3>
        <div style={{height:'70vh'}} className="d-flex justify-content-around align-items-center" >
            <Link to='/addUser' className='btn btn-lg btn-primary' >Add User</Link>
            <Link to='/addUserData' className='btn btn-lg btn-primary' >Add User Data</Link>
            <Link to='/filterUserData' className='btn btn-lg btn-primary' >Filter User</Link>
        </div>
    </>
    );
};

export default Dashboard;