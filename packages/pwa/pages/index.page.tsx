import { useEffect } from 'react'

import Router from 'next/router'

export default function Home() {
  useEffect(() => {
    const { pathname } = Router
    console.log('pathname', pathname)
    console.log('process.env.MAINTENANCE_MODE ', process.env)
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      console.log('edw')
      Router.push('/maintenance')
    }
  })

  return <div>It works!</div>
}
