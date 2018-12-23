import React from 'react'
import {observer} from 'mobx-react'
import {FormControl, Modal, Button} from 'react-bootstrap'
import {MODAL_NAMES} from '../consts'

const PermsEditModal = ({store}) => {
  //
  const edits = store.doc.substitutions.map((i, idx) => (
    <FormControl key={idx} type='text' value={i}
      onChange={(evt) => store.onArrayChange(idx, evt.target.value)} />
  ))

  return store.activeModal !== MODAL_NAMES.PERMS ? null : (
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Editace oprávnění</Modal.Title>
        </Modal.Header>

        <Modal.Body>{edits}</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => store.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default observer(PermsEditModal)
