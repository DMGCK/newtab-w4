import { ProxyState } from "../AppState.js";
import { pagesService } from "../Services/PagesService.js";

const timeInterval = setInterval(_updateTime, 500)

function _drawBG() {
  document.querySelector('main').setAttribute('style', 'background-image: url("' +ProxyState.bgUrl.toString() + '"); background-size: cover; width: 100vw; height: 100vh; background')
}

function _drawQuote() {
  // console.log('attempting draw quote', ProxyState.quote); 
  
  document.getElementById('quote').innerText = ProxyState.quote.content
  document.getElementById('quote-author').innerText = ProxyState.quote.author

}

function _updateTime() {
  const time = new Date()
  let timeStr = time.toTimeString()
   timeStr = timeStr.split(' ')
  document.getElementById('clock').innerText = (timeStr[0])
  // console.log(time.toTimeString()); 
  
}

export class PagesController {
  constructor() {
    console.log('page controller loaded'); 
    this.getPageInfo()
    ProxyState.on('bgUrl', _drawBG)
    ProxyState.on('quote', _drawQuote)
    timeInterval
  }

  async getPageInfo() {
    // console.log('getting PageInfo'); 
    pagesService.getPageInfo()
  }



}