import React from 'react'
import {observer} from 'mobx-react'
import {Modal, Button, FormControl} from 'react-bootstrap'
import {MODAL_NAMES} from '../../consts'
import Perms from './perms'
import Substs from './substs'

const ModalEditor = ({store}) => {
  //
  function _createForm () {
    switch (store.activeModal) {
      case MODAL_NAMES.PERMS: return <Perms store={store.modalStore} />
      case MODAL_NAMES.SUBSTS: return <Substs store={store.modalStore} />
      case MODAL_NAMES.TITLE: return (
        <FormControl type='text' value={store.modalStore.val} placeholder='nazev dokumentu'
          onChange={(evt) => store.modalStore.onChange(evt.target.value)} />
      )
    }
  }

  return store.activeModal === null ? null : (
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{store.modalStore.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{_createForm()}</Modal.Body>

        <Modal.Footer>
          <Button bsStyle='primary' onClick={() => store.modalStore.onSave()}>Uloz</Button>
          <Button onClick={() => store.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default observer(ModalEditor)
