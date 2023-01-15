import { ModalProps } from './Modal'
import { useEffect } from 'react'

type useModalProps = {
  open: ModalProps['open']
  handleClose: ModalProps['handleClose']
}

export const useModal = ({ open, handleClose }: useModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll'
    document.body.style.overflowX = 'hidden'
  }, [open])

  const onOverlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return {
    onOverlayClick,
  }
}
