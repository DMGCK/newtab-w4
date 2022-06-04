import { PagesController } from "./Controllers/PagesController.js";
import {TodoController } from "./Controllers/TodoController.js"
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  pagesController = new PagesController()
  todoController = new TodoController()
  weatherController = new WeatherController()
}

window["app"] = new App();
