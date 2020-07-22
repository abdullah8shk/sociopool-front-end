import axios from 'axios'

export function addUsername(userName){
   let users = axios.post("http://localhost:3010/api/user",{userName});
   return (dispatch) => {
       users
       .then(res => {
           dispatch({type: "addedUserName"})
       })
       .catch((err)=> console.log(err));
   }
}
export function getAllUsers(){
   let users = axios.get("http://localhost:3010/api/user");
   return (dispatch) => {
       users
       .then(res => {
           dispatch({type: "getAllUsers", payLoad : res.data})
       })
       .catch((err)=> console.log(err));
   }
}

export function addDistanceData(userId,distanceTravelled,startTime,endTime){
    let response = axios
    .post("http://localhost:3010/api/distanceRecord",{distanceTravelled,startTime,endTime})
    .then((res)=>{
        axios.post(`http://localhost:3010/api/user/${userId}`,{id:res.data._id})  
    })
    return(dispatch)=> {
        response
        .then(res=>{
            dispatch({type:"distanceDataAdded"})
        })
       .catch((err)=> console.log(err));
    }
}

export function setUserName(data){
    return{
        type: "setUserName",
        payLoad: data
    }
}
export function setUserId(data){
    return{
        type: "setUserId",
        payLoad: data
    }
}
export function setDistance(data){
    return{
        type: "setDistance",
        payLoad: data
    }
}
export function setStartTime(data){
    let res1= data
    data=Number(data)
    data+=1
    let res2 = Array.from(Array(24-data), (_, i) => i + (data))
    let res = {res1,res2}
    return{
        type: "setStartTime",
        payLoad: res
    }
}

export function setEndTime(data){
    return{
        type: "setEndTime",
        payLoad: data
    }
}

export function sendFilterName(data){
    return{
        type: "sendFilterName",
        payLoad: data
    }
}
export function sendFilterStartTime(data){
    let res1= data
    data=Number(data)
    data+=1
    let res2 = Array.from(Array(24-data), (_, i) => i + (data))
    let res = {res1,res2}
    return{
        type: "sendFilterStartTime",
        payLoad: res
    }
}
export function sendFilterEndTime(data){
    return{
        type: "sendFilterEndTime",
        payLoad: data
    }
}
export  function filterData(users,filterName,filterStartTime,filterEndTime){
    let data =  users.filter((elem)=> elem.userName == filterName)
    let response = data[0].userTrackRecord.filter((elem)=>{
        return(
         filterStartTime <= Number(elem.startTime) &&  Number(elem.endTime) <= filterEndTime   
        )
    })
    let newData =  response.map(el=>el.distanceTravelled).reduce((acc,curr)=> acc + curr)
    // console.log(newData)
    
    return{
        type: "filterData",
        payLoad: newData
    }
}

