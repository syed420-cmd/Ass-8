import React from 'react'
import Nav from './Nav'
import bar1 from './images/graph1.png'
import bar2 from './images/graph2.png'
import bar3 from './images/graph3.png'
const PageRead = () => {
  return (
    <>
    <Nav/>
     <div className='flex justify-start items-center'>
     <div className='flex flex-col space-y-[100px]'>
     <h1 className='text-[20px] text-[#282828]'>340</h1>
     <h1 className='text-[20px] text-[#282828]'>255</h1>
     <h1 className='text-[20px] text-[#282828]'>170</h1>
     <h1 className='text-[20px] text-[#282828]'>80</h1>
     <h1 className='text-[20px] text-[#282828]'>00</h1>     
     </div>
     
     <img className='h-[522px] w-[150px]  mt-[90px] ml-[30px] ' src={bar1}></img>
     <img className='h-[522px] w-[160px] mt-[90px] ml-[30px] ' src={bar3}></img>
     <img className='h-[523px] w-[150px] mt-[90px] ml-[30px] ' src={bar2}></img>
     
   
     
     </div>
    </>
  )
}

export default PageRead
