import { ProxyState } from '../AppState.js'
const sandApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 10000
})


class PagesService {
  constructor() {
    
  }

  async getPageInfo() {
    let bgUrl = ''
    let quote = ''
    let author = ''
    try {
      const res = await sandApi.get('images');
      // console.log(' Background image ', res.data.largeImgUrl);
      bgUrl = res.data.largeImgUrl
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
    }

    ProxyState.bgUrl = bgUrl;

    try {
      const res = await sandApi.get('quotes');
      // console.log(' heres your quote object ', res.data);
      quote = res.data.content;
      author = res.data.author;
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
    }
    ProxyState.quote = { author : author, content : quote }
    // console.log('quote', ProxyState.quote, ProxyState.bgUrl); 
    
  }

 


}

export const pagesService = new PagesService()