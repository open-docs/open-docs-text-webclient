/* global marked */
import React from 'react'
import {observer} from 'mobx-react'
import {FormControl} from 'react-bootstrap'
import TextEditor from './textEditor'
import SubstsEditModal from './substsEdit'
import PermsEditModal from './permsEdit'

const TextView = observer(({store}) => {
  return store.loading ? (<h4>načítám</h4>) : (
    <div className='main'>
      <form>
        <FormControl type='text' value={store.doc.title}
          placeholder='nazev dokumentu'
          onChange={store.onChange.bind(store, 'title')} />
        <SubstsEditModal store={store} />
        <PermsEditModal store={store} />
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
