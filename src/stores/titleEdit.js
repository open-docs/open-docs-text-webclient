import {observable, action, computed} from 'mobx'

export default class TitleEditStore {

  constructor (store) {
    this.store = store
    this.val = store.doc.title
  }

  title = 'Editace nazvu'

  @observable val = false
  @observable error = false

  @action save () {
    const data = {title: this.val}
    this.store.api.put(data)
    .then(this.onSaved.bind(this, data))
    .catch(this.onError.bind(this))
  }

  @action onSaved (data) {
    this.store.doc.title = data.title
    this.store.closeModal()
  }

  @action onError (err) {
    this.error = err
  }

  @action onChange (text) {
    this.val = text
    if (!this.val || this.val.length === 0) {
      this.error = 'toto pole nesmi byt prazdne'
    } else {
      this.error = false
    }
  }

}
