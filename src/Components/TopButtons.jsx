import React from 'react'

const TopButtons = () => {
    const cities=[{id:1,title:'London'},{id:2,title:'Paris'},
        {id:3,title:'New York'},{id:4,title:'Delhi'},{id:5,title:'Tokyo'},{id:6,title:'Toronto'}];
  return (
    <div  className='flex items-cneter justify-around my-6'>
    {cities.map((x)=>(
        <button key={x.id} className='text-white text-lg font-medium '>{x.title}</button>
    ))}
      
    </div>
  )
}

export default TopButtons
