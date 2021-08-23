import { useEffect } from 'react'

import Router from 'next/router'

export default function Home() {
  useEffect(() => {
    const { pathname } = Router
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      Router.push('/maintenance')
    }
  })

  return <div>It works!</div>
}
