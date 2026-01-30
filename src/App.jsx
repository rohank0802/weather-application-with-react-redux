
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchWeather } from './redux store/action'
import Search from './Components/Search'
import CurrentWeather from './Components/CurrentWeather'
import ForecastDetails from './Components/ForecastDetails'

function App() {
const statecity=useSelector((state=>state.weatherReducer.city))
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchWeather(statecity))
},[])
  return (
    <>
    <div className='flex  flex-col items-center'>
      <div className='sticky top-0 p-5 bg-base-100 z-10 w-full flex flex-col items-center'>
     <h1 className='flex justify-center text-3xl font-medium mb-4'>Weather Dashboard</h1>
     <Search/>
      </div>
     <CurrentWeather/>
     <ForecastDetails/>
    </div>
    </>
  )
}

export default App
