import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import {Todo} from "./Models/ToDo.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  quote = []
  bgUrl = []
  /** @type {import('./Models/Todo').Todo[]} */
  todo = []
  weather = {}
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
