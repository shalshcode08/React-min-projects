import React, { useEffect, useState } from 'react'

export default function Github(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/shalshcode08')
        .then((res)=> res.json())
        .then((data)=> {
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4, bg-slate-400 p-10 text-3xl'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="GitHub PP" className='items-center w-100 h-40 m-auto mt-10 mb-10 rounded-xl' />
    </div>
  )
}
