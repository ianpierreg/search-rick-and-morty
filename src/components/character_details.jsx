import { useState } from 'react'
import rick from '../images/rick.jpeg'
import '../stylesheets/character_details.scss'
import Modal from 'react-modal';
import Character from './character'
import Button from './button'


export default function CharacterDetails({ show, close }) {
  return (
    <Modal
      isOpen={show}
      portalClassName="character-modal-portal"
      overlayClassName="character-modal-overlay"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          background: 'none',
          padding: 0,
          width: '77%',
          display: 'flex',
          justifyContent: 'flex-end',
          border: 'none',
          margin: 'auto'
        }
      }}
    >
      <div className="floating-card">
        <Character alive expanded />
      </div>
      <div className="modal-wrapper">
        <Button
          type="button"
          onClick={close}
          className="modal-close-button"
          text="Close"
        />
        <div className="character-image-blurred">
          <img src={rick} alt="Rick Sanchez" />
        </div>
        <div className="details-wrapper"></div>
      </div>
    </Modal>
  )
}
