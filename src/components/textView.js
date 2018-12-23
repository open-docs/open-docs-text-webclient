/* global marked */
import React from 'react'
import {observer} from 'mobx-react'
import {FormControl} from 'react-bootstrap'
import SubstsEditModal from './substsEdit'

const _style = {
  width: '100%',
  height: '100%'
}

const TextView = observer(({store}) => {
  return store.loading ? (<h4>načítám</h4>) : (
    <div className='main'>
      <form>
        <FormControl type='text' value={store.doc.title}
          placeholder='nazev dokumentu'
          onChange={store.onChange.bind(store, 'title')} />
        <SubstsEditModal store={store} />
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <textarea style={_style}
              onChange={(evt) => store.onChange('content', evt.target.value)}
              defaultValue={store.content} />
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
