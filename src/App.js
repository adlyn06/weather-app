import { useState } from "react"
import axios from "axios"

function App()
{
  const [deg,setdeg] = useState("0")
  const [city,setcity] = useState("Madurai")
  const [desc,setdesc] = useState("Rainy")
  const [evalue,setevalue] = useState("")
  
  function handlechange(event)
  {
    setevalue(event.target.value)
  }

  function getweather()
  {
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=5e98939c05b688dd1776d6d74a587d4d`)
    
    weatherdata.then(function(dalta){
      setdeg(dalta.data.main.temp)
      setdesc(dalta.data.weather[0].main)
      setcity(dalta.data.name)
    })
  }

    return(
    <div className="flex flex-row justify-center h-[100vh] items-center">
       <div style={{"backgroundImage":"linear-gradient(120deg, #a6c0fe 0%, #f68084 100%"}}
       className="p-2 rounded-md shadow-md">
           <h2 className="font-medium">Hey! ⛅</h2>
           <p className="text-xs">Do you want to know the weather report :)</p>
           <input onChange={handlechange} className="rounded-md h-6 text-sm p-1 mt-2 outline-none" placeholder="City Name"></input>
         <br />
           <button onClick= {getweather} className="bg-black text-white rounded-md p-1 mt-2 text-xs">Get Report ⚡</button>
           <p className="text-xs mt-2">Degree:{deg} | City:{city} | Weather:{desc}</p>
       </div>    
    </div>)
}

export default App