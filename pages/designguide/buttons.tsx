import React from 'react'

import { SimpleButton, LinkButton, PlayfulButton, BrutalButton, ElegantButton, PrimaryButton } from '../../components/button'

type Props = {}

function MyButtons({}: Props) {
  return (
    <div>
        <div className="flex py-6 bg-gray-200 justify-evenly">
        <SimpleButton>Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton>Link</LinkButton>
        <PlayfulButton>Playful</PlayfulButton>
        <BrutalButton>Brutal</BrutalButton>
        <ElegantButton onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
      <div className="flex py-6 bg-gray-600 justify-evenly">
        <SimpleButton disabled >Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton disabled>Link</LinkButton>
        <PlayfulButton disabled>Playful</PlayfulButton>
        <BrutalButton  disabled>Brutal</BrutalButton>
        <ElegantButton disabled onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton disabled onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
      <div className="flex py-6 bg-gray-400 justify-evenly">
        <SimpleButton>Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton>Link</LinkButton>
        <PlayfulButton>Playful</PlayfulButton>
        <BrutalButton>Brutal</BrutalButton>
        <ElegantButton onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
      <div className="flex py-6 bg-gray-600 justify-evenly">
        <SimpleButton disabled >Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton disabled>Link</LinkButton>
        <PlayfulButton disabled>Playful</PlayfulButton>
        <BrutalButton  disabled>Brutal</BrutalButton>
        <ElegantButton disabled onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton disabled onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
      <div className="flex py-6 bg-gray-800 justify-evenly">
        <SimpleButton >Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton>Link</LinkButton>        
        <PlayfulButton>Playful</PlayfulButton>
        <BrutalButton>Brutal</BrutalButton>
        <ElegantButton onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
      <div className="flex py-6 bg-gray-600 justify-evenly">
        <SimpleButton disabled>Simple</SimpleButton>
        <SimpleButton disabled>Disabled</SimpleButton>
        <LinkButton disabled>Link</LinkButton>
        <PlayfulButton disabled>Playful</PlayfulButton>
        <BrutalButton  disabled>Brutal</BrutalButton>
        <ElegantButton disabled onClick={() => alert("hello")} aria-label="test">Elegant</ElegantButton>
        <PrimaryButton disabled onClick={() => alert('Wooot')}>Primary</PrimaryButton>
      </div>
    </div>
  )
}

export default MyButtons