import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <h2 className="mt-8">
        <Link href="/designguide">Design Guide</Link>  
      </h2>
      <div className="px-6 py-8 bg-white rounded-lg shadow-xl dark:bg-slate-800 ring-1 ring-slate-900/5">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            {/* <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg> */}
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </div>

  )
}

export default Home