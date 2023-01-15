import { useEffect } from 'react'

type Props = {
  open: boolean
  handleClose: () => void
}

export const useModal = ({ open, handleClose }: Props) => {
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
