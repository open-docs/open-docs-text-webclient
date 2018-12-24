import React from 'react'
import {observer} from 'mobx-react'
import {Modal, Button, FormControl, FormGroup, HelpBlock} from 'react-bootstrap'
import {MODAL_NAMES} from '../../consts'
import Perms from './perms'
import Substs from './substs'

const TitleEdit = observer(({store}) => (
  <FormGroup validationState={store.error === false ? 'success' : 'error'}>
    <FormControl type='text' value={store.val} placeholder='nazev dokumentu'
      onChange={(evt) => store.onChange(evt.target.value)} />
    <FormControl.Feedback />
    {
      store.error === false ? null : <HelpBlock>{store.error}.</HelpBlock>
    }
  </FormGroup>
))

const ModalEditor = ({store}) => {
  //
  function _createForm () {
    switch (store.activeModal) {
      case MODAL_NAMES.PERMS: return <Perms store={store.modalStore} />
      case MODAL_NAMES.SUBSTS: return <Substs store={store.modalStore} />
      case MODAL_NAMES.TITLE: return <TitleEdit store={store.modalStore} />
    }
  }

  return store.activeModal === null ? null : (
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{store.modalStore.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body><form>{_createForm()}</form></Modal.Body>

        <Modal.Footer>
          <Button bsStyle='primary' disabled={store.modalStore.error !== false}
            onClick={() => store.modalStore.save()}>Uloz</Button>
          <Button onClick={() => store.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default observer(ModalEditor)
