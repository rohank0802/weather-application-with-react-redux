import React from 'react'
import {  useSelector } from 'react-redux'
import Loader from './Loader'

const CurrentWeather = () => {
    const {current,loading,error}=useSelector((state=>state.weatherReducer))
  
    console.log(current,loading)
    if(loading)return <Loader/>
    if(error)return <p>{error}</p>
    if(!current)return null
  return (
    <div className="card bg-neutral text-neutral-content w-96 my-5">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{current.name}</h2>
    <p> Temperature: {Math.floor(current.main.temp-273)} °C</p>
    <p> Humidity: {current.main.humidity}%</p>
    <p>Weather: {current.weather[0].description}</p>
   
  </div>
</div>
  )
}

export default CurrentWeather
