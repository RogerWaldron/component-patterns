import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="z-0 max-w-screen-xl mx-auto antialiased bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
