import React from 'react'
import Premium from './Premium'
import RoomSpec from './RoomSpec'
import Standard from './Standard'

export default function Selection() {
  return (
    <div>
        <Standard/>
        <RoomSpec/>
        <Premium/>
    </div>
  )
}
