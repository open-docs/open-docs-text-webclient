import {observable, action, computed} from 'mobx'
import axios from 'axios'

export default class StateStore {

  constructor (store) {
    this.store = store
    this.val = store.doc.substitutions
  }

  title = 'Editace substitucí'

  @observable val = false
  @observable error = false

  @action onSave () {
    this.save()
    this.close()
  }

  @action onChange (text) {
    this.val = text
  }

}
