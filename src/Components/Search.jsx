import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setCity } from '../redux store/action'
const Search = () => {
    const dispatch=useDispatch()
    // in this we are fetching our setcity state value from setcity state
    const stateCity=useSelector((state=>state.weatherReducer.city))
     //in this we are giving our search value in apifun argument
    function handlesearchbtn(){
        dispatch(fetchWeather(stateCity))
        
    }
  return (
    <div className="join ">

    
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
      >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  {/* in this with on onchange event we are putting our search in setcity sate */}
  <input type="search" required placeholder="Search" onChange={(e)=>dispatch(setCity(e.target.value))} value={stateCity} />
</label>
 <button onClick={handlesearchbtn} className="btn btn-accent join-item">Search</button>
        </div>
  )
}

export default Search
