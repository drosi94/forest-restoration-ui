import { useEffect } from 'react'

export const useFixHeightViewport = () => {
  /* Little hack to overcome the issue with the 100vh in mobile phones:
    https://dev.to/admitkard/mobile-issue-with-100vh-height-100-100vh-3-solutions-3nae 
  */
  useEffect(() => {
    const listener = () => {
      return (document.querySelector(':root') as any).style.setProperty(
        '--vh',
        window.innerHeight / 100 + 'px'
      )
    }
    listener()
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])
}
