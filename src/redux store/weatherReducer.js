
const initialstatte={
    city:'delhi',
    current:null,
    forcast:null,
    loading:false,
    error:null,

}
export const weatherReducer=(state=initialstatte,action)=>{
   if(action.type==='FETCH_WEATHER_PENDING'){
   return{
    ...state,loading:true,error:null
   }
   }
   else if(action.type==='FETCH_CURRENT_SUCESS'){
      return{
    ...state,loading:false,current:action.payload
      }
   }
   else if(action.type==='FETCH_FORCAST_SUCESS'){
return{
...state,loading:false,forcast:action.payload
}
   }
   else if(action.type==='FETCH_WEATHER_ERROR'){
  return{
    ...state,loading:false,errorL:action.payload
  }
   }
   else if(action.type==='SET_CITY'){
return{
    ...state,city:action.payload
}
   }
   else{
    return state
   }
}
