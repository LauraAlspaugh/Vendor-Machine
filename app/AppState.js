import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snack } from "./models/Snack.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }
  money = 0
  snacks = [
    new Snack({ name: 'Oreos', price: 3.00, imgUrl: 'https://images.unsplash.com/photo-1610992254475-b2fab0bd1986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3Jlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' }),
    new Snack({ name: 'Pringles', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbmdsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' }),
    new Snack({ name: 'Skittles', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1547097465-7324fd55c97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpdHRsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' })

  ]

}

export const AppState = new Proxy(new ObservableAppState(), {
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
