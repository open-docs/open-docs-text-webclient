/* global marked */
import React from 'react'
import {observer} from 'mobx-react'
import TextEditor from './textEditor'
import ModalEditor from './modals'

const TextView = observer(({store}) => {
  return store.loading ? (<h4>načítám</h4>) : (
    <div className='main'>
      <ModalEditor store={store} />
      <form>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <TextEditor store={store} />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <p dangerouslySetInnerHTML={{__html: marked(store.doc.content)}} />
          </div>
        </div>
      </form>
    </div>
  )
})

export default TextView
