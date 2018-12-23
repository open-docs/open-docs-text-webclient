import {observable, action, computed} from 'mobx'

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
  }
  @action showModal (name) {
    this.activeModal = name
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
