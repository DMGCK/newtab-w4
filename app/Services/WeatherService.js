import { ProxyState } from "../AppState.js";

const sandApi = axios.create({
  baseURL:'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 10000

})


class WeatherService {
  constructor() {

  }

  async getWeather() {
   const res = await sandApi.get();
   console.log(' heres the weather tonight ', res.data);

   ProxyState.weather = res.data
  }

}

export const weatherService = new WeatherService()