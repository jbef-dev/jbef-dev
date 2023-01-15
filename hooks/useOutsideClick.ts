import { useEffect, useRef } from 'react'

const useOutsideClick = (callback: (...props: any) => void, open?: boolean) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    /** Alert if clicked on outside of element */
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (open === true || open === undefined) &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, open])

  return [ref] as const
}

export default useOutsideClick
