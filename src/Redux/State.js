
let initialState = {
  dropDown:Array.from(Array(24).keys()),
  filterName:'',
  filterStartTime:'',
  filterEndTime:'',
  };
  

export  let appReducer = (state = initialState, action)=>{
      let stateCopy = {...state}
      // console.log(stateCopy)
      console.log(action)
      switch(action.type){
        case "getAllUsers":
          stateCopy.users = action.payLoad
          stateCopy.userId = action.payLoad[0]._id
          stateCopy.filterName = action.payLoad[0].userName
          return stateCopy
        case "setUserName":
          stateCopy.userName = action.payLoad
          return stateCopy
        case "setUserId":
          stateCopy.userId = action.payLoad
          return stateCopy
        case "setDistance":
          stateCopy.distanceTravelled = action.payLoad
          return stateCopy
        case "setStartTime":
          stateCopy.startTime = action.payLoad.res1
          stateCopy.endTimeDropDown = action.payLoad.res2
          stateCopy.endTime = action.payLoad.res2[0]
          return stateCopy
        case "setEndTime":
          stateCopy.endTime = action.payLoad
          return stateCopy
          case "sendFilterName":
            stateCopy.filterName = action.payLoad
            stateCopy.totalDistance = null
            return stateCopy
        case "sendFilterStartTime":
          stateCopy.filterStartTime = action.payLoad.res1
          stateCopy.endTimeDropDown = action.payLoad.res2
          stateCopy.filterEndTime = action.payLoad.res2[0]
          stateCopy.totalDistance = null
          return stateCopy
        case "sendFilterEndTime":
          stateCopy.filterEndTime = action.payLoad
          stateCopy.totalDistance = null
          return stateCopy
        case "distanceDataAdded":
          stateCopy.endTimeDropDown = null
          return stateCopy
        case "filterData":
          stateCopy.totalDistance = action.payLoad
          return stateCopy
         default:
            return stateCopy
      }
  }


