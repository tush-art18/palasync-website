import { useEffect } from 'react'

export function useExitIntent(onExit: () => void) {
  useEffect(() => {
    // Only track on desktop/pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the top of the screen (clientY < 15 or moving out)
      if (e.clientY <= 15) {
        onExit()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [onExit])
}
