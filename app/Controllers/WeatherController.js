import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";

function _drawWeather(u = 'k') {
  console.log(ProxyState.weather.main.temp); 
  let temp = ProxyState.weather.main.temp;
  let elem = document.getElementById('temp')


  if ( u == 'K') {
    elem.innerText ='F ' + Math.floor(1.8*(temp-273) + 32)
  }
  else {
    elem.innerText = 'K ' + temp
  }
  // elem.innerText = unit + temp
  
}


export class WeatherController {
  constructor() {
    this.getWeather()
    ProxyState.on('weather', _drawWeather)
  }

  async getWeather() {
   try {
     await weatherService.getWeather() 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }

  changeUnit() {
    let temp = window.event.target.innerText
    let unit = [...temp].find(u => u == 'K')
    console.log(temp); 
    console.log(unit); 

    if (unit) {
      _drawWeather(unit)
    }
    else {
      _drawWeather()
    }
    
    
  }
}

