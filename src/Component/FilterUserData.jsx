import React,{useEffect} from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom'
import { getAllUsers,sendFilterName,sendFilterStartTime,sendFilterEndTime,filterData } from '../ActionCreator/Action'

const FilterUserData = ( {getAllUsers,users,dropDown,sendFilterStartTime,sendFilterName,sendFilterEndTime,endTimeDropDown,filterName,filterStartTime,filterEndTime,totalDistance,filterData} ) => {

    useEffect(()=>{
        getAllUsers()
    },[])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
           <h3 className='mt-5' >Filter User</h3>
           <div className='form-group' >
                    <label for="users">User's List:</label>
                    <select className='form-control text-capitalize' id='users'  onChange={(e)=>sendFilterName(e.target.value)}>
                        {users && users.map((element, i) => {
                            return (
                                <option value={element.userName} key={i}>{element.userName}</option>
                            )
                            })}
                    </select>  
                </div> 
           <div className='form-group' >
                    <label for="startTime">Start Time:</label>
                    <select className='form-control' id='startTime' onChange={(e)=>sendFilterStartTime(e.target.value)}>
                        {dropDown && dropDown.map((element, i) => {
                            return (
                                <option value={element} key={i} >{element < 12?[element,' am'] : (element === 12 ? [element,' pm'] : [(element-12),' pm']) } </option>
                            )
                            })}
                    </select>  
                </div> 
                <div className='form-group' >
                    <label for="endTime">End Time:</label>
                    <select className='form-control' id='endTime' onChange={(e)=>sendFilterEndTime(e.target.value)}>
                        {endTimeDropDown && endTimeDropDown.map((element, i) => {
                            return (
                                <option value={element} key={i} >{element < 12?[element,' am'] : (element === 12 ? [element,' pm'] : [(element-12),' pm']) } </option>
                            )
                            })}
                    </select>  
                </div>
                <button type='button' className="btn btn-success" onClick={()=>filterData(users,filterName,filterStartTime,filterEndTime)} disabled={filterName.length<1 && filterStartTime.length<1 &&  filterEndTime.length<1 } >Submit</button> 
                { totalDistance && <h4 className='text-capitalize mt-5'> {filterName} has travelled {totalDistance}km between {filterStartTime<12?[filterStartTime,'am']:(filterStartTime===12?[filterStartTime,'pm']:[(filterStartTime-12),'pm'])} and {filterEndTime<12?[filterEndTime,'am']:(filterEndTime===12?[filterEndTime,'pm']:[(filterEndTime-12),'pm'])} </h4>}
        </div>
    );
};

const mapStateToProps = (state)=>{

    return{
        users: state.app.users, 
        dropDown: state.app.dropDown,
        endTimeDropDown: state.app.endTimeDropDown,
        filterName: state.app.filterName,
        filterStartTime: state.app.filterStartTime,
        filterEndTime: state.app.filterEndTime,
        totalDistance: state.app.totalDistance,

    }
}

export default connect(mapStateToProps,{getAllUsers,sendFilterStartTime,sendFilterEndTime,sendFilterName,filterData})(FilterUserData);