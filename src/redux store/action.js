import axios from 'axios'
import {} from '../redux store/eatherConstants'
 const apikey=import.meta.env.VITE_WEATHER_API
export const fetchWeatherPending=()=>{
    return{
        type:"FETCH_WEATHER_PENDING"
    }
}
export const fetchCurrentSucess=(data)=>{
    return{
        type:"FETCH_CURRENT_SUCESS",
        payload:data
    }
}
export const fetchForcastSucess=(data)=>{
    return{
        type:"FETCH_FORCAST_SUCESS",
        payload:data
    }
}
export const fetchWeatherError=(error)=>{
    return{
        type:"FETCH_WEATHER_ERROR",
        payload:error
    }
}
export const setCity=(city)=>{
    return{
        type:'SET_CITY',
        payload:city
    }
}


export const fetchWeather=(city)=>{
    return async(dispatch)=>{

        dispatch(fetchWeatherPending())
        try{
             const currentWeatherDetails=  await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
             
             const forcastDetails=  await axios(`https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`)
            
    
           dispatch(fetchCurrentSucess(currentWeatherDetails.data))
    
           dispatch(fetchForcastSucess(forcastDetails.data.list))
        }
        catch(error){
      dispatch(fetchWeatherError("Something went wrong while fetching weather data"))
        }

         
    }
}