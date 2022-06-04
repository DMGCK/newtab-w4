

export class Todo {
  constructor(obj) {
    this.completed = obj.completed,
    this.description = obj.description,
    this.id = obj.id
    this.user = 'cameron'
  }

  get Template() {
    return `
        <div class="p-1">
          <input onclick="app.todoController.updateTodo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''} name="${this.id}" id="${this.id}">
          <span class="selectable" onclick="app.todoController.removeTodo('${this.id}')">${this.description}</span>
         </div>
    
    `
  }
}