import React, { useState } from 'react'  //convert your jsx file into component using rafc
import './WeatherApp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import logo from "../Assets/logo.jpg";
import rahul from "../Assets/rahul.png";
import rajdeep from "../Assets/rajdeep.png";
import news from "../Assets/news.png";
import red from "../Assets/red.png";

const WeatherApp = () => {
    let api_key="dd94f859a0e52d6e4767fddf735f04a7";
    const[wicon,setWicon]=useState(cloud_icon); //In functional components, you can use the useEffect and useState hooks to handle async functions. The useEffect hook allows you to perform side effects, such as data fetching, in functional components. The useState hook allows you to manage local state in functional components.
    const search=async()=>{   //Async functions are a powerful feature in JavaScript that allow us to write cleaner, more readable code when handling asynchronous operations such as API calls, timeouts, and promises. What does async () do?
    //  In JavaScript, async is a keyword placed before a function to allow the function to return a promise. Since JavaScript is a synchronous language, Async functions let us write promise-based code as if it were synchronous, but without blocking the execution thread that allows the code to run asynchronously.
      
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response=await fetch(url);  //Before diving into how to handle async functions in React.js, let's briefly review what async functions are and how they work in JavaScript. Async functions are a syntactical feature introduced in ECMAScript 2017 (ES8) that simplifies working with asynchronous code by allowing you to use the await keyword inside a function marked as async. When you use await with a promise, the function execution is paused until the promise is resolved or rejected, and then it resumes with the result of the promise.
        let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percentage");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+"km/h";
        temperature[0].innerHTML=data.main.temp+"'C";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }

  return (
    <div className="cont">
      <img src={logo} alt='' className='logo'/>
      
      
      <img src={red} alt=' ' className='res'/>
    
      <img src={news} alt='' className='news'/>
    <div className='container'>
      
      
      
        <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search'/>
      <div className="search-icon" onClick={()=>{search()}} >
        <img src={search_icon} alt=''/>
      </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt='' />
      </div>
      <div className="weather-temp">24'C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percentage">
              64%
                </div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">
              18km/hr;
                </div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WeatherApp

//by using thunderclient we can see the response data coming from api
