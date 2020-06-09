export class GlobalEventDistributor {

  constructor() {
    this.stores = []
  }

  registerStore(store) {
    console.log('registerStore store', store)
    this.stores.push(store)
  }

  dispatch(event) {
    this.stores.forEach((s) => s.dispatch(event))
  }
}