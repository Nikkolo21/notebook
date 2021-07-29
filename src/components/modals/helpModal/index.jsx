import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeHelpModal } from '../../../store/actions/book';
import { helpModalSelector } from '../../../store/selectors/book';
import { commands } from '../../../utils/commands';
import { Modal } from '../../shared/modal'
import './HelpModal.scss';

export const HelpModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(helpModalSelector);
  return (
    <Modal isOpen={modalIsOpen} onClose={() => dispatch(closeHelpModal())}>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Command Windows/Linux</th>
            <th>Command Mac</th>
          </tr>
          {
            commands({}).map(command => (
              <tr key={command.id}>
                <td>{command.name}</td>
                <td>{command.bindKey.win}</td>
                <td>{command.bindKey.mac}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Modal>
  )
}
