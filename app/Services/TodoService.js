import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/ToDo.js";


const sandApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/cameron/todos',
  timeout: 10000
})

class TodoService {
  constructor() {

  }

  async getTodos() {
   const res = await sandApi.get() ;
   console.log(' getting todos ', res.data);
   ProxyState.todo = res.data.map(a => new Todo(a))
  }

  async addTodo(dataObj) {
   const res = await sandApi.post('', dataObj);
   console.log('Adding new todo! ', res.data);
   ProxyState.todo = [...ProxyState.todo, new Todo(res.data)]
  }
  async updateTodo(dataObj) {
    console.log(dataObj); 
    
   const res = await sandApi.put(dataObj.id, dataObj);
   console.log(' Updating individual todo ', res.data);

   ProxyState.todo = ProxyState.todo
   
  }

  async removeTodo(id) {
   const res = await sandApi.delete(id);
   console.log('deleting something ', res.data);
   ProxyState.todo = ProxyState.todo.filter(x => x.id != id)
  }
}

export const todoService = new TodoService()