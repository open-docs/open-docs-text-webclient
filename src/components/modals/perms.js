import React from 'react'
import {observer} from 'mobx-react'
import {FormControl} from 'react-bootstrap'

const PermsEditModal = ({store}) => {
  //
  const edits = store.val.map((i, idx) => (
    <FormControl key={idx} type='text' value={i}
      onChange={(evt) => store.onChange(idx, evt.target.value)} />
  ))

  return edits
}

export default observer(PermsEditModal)
