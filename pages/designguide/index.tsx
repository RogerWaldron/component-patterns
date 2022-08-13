import Link from 'next/link'
import React from 'react'

type Props = {}

function DesignGuide({}: Props) {
  return (
    <div className="container mx-auto">
        <h2 className="flex justify-center py-8 text-2xl">Design Guide</h2>
        <p>Playground for testing ideas on how to construct these components</p>
        <ul className="flex flex-col gap-4">
            <li className="">
                <Link href="../designguide/buttons">Buttons</Link>
            </li>
            <li className="">
                <Link href="../designguide/polymorphic">Polymorphic Components</Link>
            </li>
        </ul>
    </div>
  )
}

export default DesignGuide