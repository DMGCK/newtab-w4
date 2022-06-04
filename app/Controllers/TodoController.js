import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js"
import { Pop } from "../Utils/Pop.js"


function _drawTodo() {
  let template = ''
  let count = 0;
  ProxyState.todo.forEach((t) => {template += t.Template; t.completed ? '' : count++})
  document.getElementById('todo-list').innerHTML = template
  document.getElementById('todo-count').innerText = count



}
export class TodoController {
  constructor() {
    console.log('todo controls exist'); 
    ProxyState.on('todo', _drawTodo);
    _drawTodo()
    this.getTodos()
  }

  async getTodos() {

   try {
     await todoService.getTodos() 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }

  async addTodo() {
    window.event.preventDefault()
    let desc = window.event.target.newTask.value;
    // console.log(desc); 
    let dataObj = {
      description: desc,
    }

    try {
      await todoService.addTodo(dataObj)
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
    }

    // window.event.target.reset()

  }

  async updateTodo(id) {

  let dataObj = ProxyState.todo.find(x => x.id == id)
  // console.log(id, ProxyState.todo); 
  dataObj.completed = !dataObj.completed
  

   try {
     await todoService.updateTodo(dataObj) 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }

  async removeTodo(id) {

    if(await Pop.confirm('are you sure you want to delete this?')){
      try {
        await todoService.removeTodo(id) 
      } catch (error) {
      Pop.toast(error, 'error')
      console.error(error);
      }
    }

  }
}