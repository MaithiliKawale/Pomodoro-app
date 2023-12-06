import React from 'react'
import styled from 'styled-components'
import Backdrop from './Backdrop';
import ModalContainer from './ModalContainer';
import { AnimatePresence } from 'framer-motion';

const Modal = ( {isOpen, onClose} ) => {
  return (
    <>
    <AnimatePresence>
    {
        isOpen &&
        (<>
    <Backdrop />
    <ModalContainer isOpen={isOpen} onClose={onClose} />
    </>)
    }
    </AnimatePresence>
    </>
  );
}

export default Modal;