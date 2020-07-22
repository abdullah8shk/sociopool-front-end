import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getAllUsers,setUserId,setDistance,setStartTime,setEndTime,addDistanceData} from '../ActionCreator/Action'

const AddUserData=({getAllUsers,setUserId,users,setDistance,setStartTime,setEndTime,addDistanceData,userId,distanceTravelled,startTime,endTime,dropDown,endTimeDropDown})=> {

    useEffect(()=>{
        getAllUsers()
    },[])


    return (
        <div className="d-flex flex-column justify-content-center align-items-center" >
        <h3 className='d-flex justify-content-center mt-5' >Add User Data</h3>
            <div style={{height:"70vh",width:"40vh"}} className="d-flex flex-column border justify-content-center align-items-center">
                <div className='form-group' >
                    <label for="users">User's List:</label>
                    <select className='form-control text-capitalize' id='users' onChange={(e)=> setUserId(e.target.value)} >
                        {users && users.map((element, i) => {
                            return (
                                <option value={element._id} key={i}>{element.userName}</option>
                            )
                            })}
                    </select>  
                </div>
                <div className="form-group">
                    <label for="distance">Distance Travelled</label>
                    <input type="number" className="form-control" id="distance"  placeholder="Distance Travelled" pattern="[0-9]{2}:[0-9]{2}" onChange={(e)=> setDistance(e.target.value)} required />
                </div>
                <div className='form-group' >
                    <label for="startTime">Start Time:</label>
                    <select className='form-control' id='startTime' onChange={(e)=>{setStartTime(e.target.value)}} required>
                        {dropDown && dropDown.map((element, i) => {
                            return (
                                <option value={element} key={i} >{element < 12?[element,' am'] : (element === 12 ? [element,' pm'] : [(element-12),' pm']) } </option>
                            )
                            })}
                    </select>  
                </div>
                <div className='form-group' >
                    <label for="endTime">End Time:</label>
                    <select className='form-control' id='endTime' onChange={(e)=>setEndTime(e.target.value)} >
                        {endTimeDropDown && endTimeDropDown.map((element, i) => {
                            return (
                                <option value={element} key={i} >{element < 12?[element,' am'] : (element === 12 ? [element,' pm'] : [(element-12),' pm']) } </option>
                            )
                            })}
                    </select>  
                </div> 
                <Link to='./dashboard' className="btn btn-success" onClick={(e)=> addDistanceData(userId,distanceTravelled,startTime,endTime)}>Submit</Link>          
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        users: state.app.users, 
        userId: state.app.userId, 
        distanceTravelled: state.app.distanceTravelled, 
        startTime: state.app.startTime,
        endTime: state.app.endTime,
        dropDown: state.app.dropDown,
        endTimeDropDown: state.app.endTimeDropDown,
    };
}

// const mapDispatchToProps = (dispatch)=>{
//     return bindActionCreators({getAllUsers},dispatch)
// }

export default connect(mapStateToProps,{getAllUsers,setUserId,setDistance,setStartTime,setEndTime,addDistanceData})(AddUserData);