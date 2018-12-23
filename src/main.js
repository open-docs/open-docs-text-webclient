import React from 'react'
import ReactDOM from 'react-dom'
import AppStore from './stores/main'
import TextView from './components/textView'
import Menu from './components/menu'
// useStrict(true)

const store = new AppStore()
store.load()

const mount = document.getElementById('root')  // mountpoint

ReactDOM.render((
  <div style={{width: '100%'}}>
    <Menu store={store} />
    <TextView store={store} />
  </div>
), mount)
