import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const ForecastDetails = () => {

    
    const {forcast,loading,error}=useSelector((state=>state.weatherReducer))
    if(!forcast)return null
    if(error)return <p>{error}</p>
    // logic for only 7 days forecats 
const sevendaysforecasts=forcast.filter((items)=>items).slice(0,7)
  return (
     <div className="card bg-neutral text-neutral-content w-96 my-5">
  <div className="card-body items-center text-center">
    <h2 className="card-title">7 Days Forecast</h2>
    {sevendaysforecasts.map((items,index)=>{
        return(

            <p key={index}> Date: {items.dt_txt
} <br/>Temperature:{(items.main.temp-273).toFixed(1)} °C <br/> </p>
        )
    })}
   
  </div>
</div>
  )
}

export default ForecastDetails
