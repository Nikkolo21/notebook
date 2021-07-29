import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeHelpModal } from '../../../store/actions/book';
import { helpModalSelector } from '../../../store/selectors/book';
import { Modal } from '../../shared/modal'

export const HelpModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(helpModalSelector);
  return (
    <Modal isOpen={modalIsOpen} onClose={() => dispatch(closeHelpModal())}>

    </Modal>
  )
}
