import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import TitleEditStore from './titleEdit'
import SubtsEditStore from './substsEdit'
import PermsEditStore from './permsEdit'

const modalMapping = {
  [MODAL_NAMES.TITLE]: TitleEditStore,
  [MODAL_NAMES.PERMS]: PermsEditStore,
  [MODAL_NAMES.SUBSTS]: SubtsEditStore
}

export default class StateStore {

  load (id) {
    const content = `
# pokujfsd

jfskfjs:
- fsf s
- skdjflsakjfslafkjal

[cf](http://cf.pirati.cz)
`
    const data = {
      title: 'pokus',
      owner: 11,
      substitutions: [
        'Pepa z Depa', 'Josefa silena'
      ],
      content
    }
    setTimeout(this.onLoaded.bind(this, data), 2000)
  }

  @observable menuDown = false

  @observable activeModal = null
  @action closeModal () {
    this.activeModal = null
    delete this.modalStore
  }
  @action showModal (name) {
    this.activeModal = name
    this.modalStore = new modalMapping[name](this)
  }

  @observable doc = {}
  @observable loading = true


  @action onLoaded (data) {
    this.loading = false
    this.doc = data
  }

  @action onChange (name, text) {
    this.doc[name] = text
  }

  @action onArrayChange (idx, val) {
    this.doc.substitutions[idx] = val
  }

}
