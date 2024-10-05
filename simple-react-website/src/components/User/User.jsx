import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div className='text-2xl items-center text-center bg-slate-400 p-10 font-bold'>User : {userid}</div>
  )
}

