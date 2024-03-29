import React from 'react'
import Img1 from './images/Book.png'
import Img2 from './images/Book2.png'
import Img3 from './images/Book3.png'
import Img4 from './images/Book4.png'
import Img5 from './images/Book5.png'
import Img6 from './images/Book6.png'
import data from './Data.json'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom'
const images={
    1: Img1,
    2: Img2,
    3: Img3,
    4: Img4,
    5: Img5,
    6: Img6



}


const Cards = () => {
  return (
    <>
     <h1 className='text-[40px] text-center mt-[40px] font-bold'>Books</h1> 
    <Link to="/bookdlts">
     <div className='cardcontainer grid lg:grid-cols-3  sm:grid-cols-1 place-items-center place-content-center'>
     {data.map(data=>(
       <div key={data.book_id} className='w-[374px] h-[482px] mt-[40px] flex flex-col justify-center items-center border rounded-lg border-[#d9dad7]'>
          <div className='imgdiv h-[230px] w-[326px] rounded-lg bg-[#d3d6db]  flex justify-center items-center'>
           <img className='h-[134px] w-[156px]' src={images[data.book_id]}></img>
          
          </div>
          <div className='flex flex-row justify-start items-start'>
          {data.category.map((category, index) => (
            <div className="mt-[20px] ml-[10px]" key={index}>
             
             
              <h1 className="text-[18px] text-[#23BE0A] leading-3">{category}   </h1>
             
            
              
              </div>
          ))}
          </div>
          <div className='flex flex-col items-start justify-center'> 
          
          <h1 className='mt-[20px] text-[24px] font-bold'>{data.book_name}</h1>  
          <h1 className='mt-[20px] text-[16px] font-medium'>By: {data.author}</h1> 
          </div>
          <div className='mt-[40px] flex justify-between'>
          <h1 className='text-[16px] text-[#282828]'>Fiction</h1>
          <div className='flex ml-[200px]'>
          <h1 className='text-[16px] text-[#282828]'>5 star</h1>
          <CiStar className='h-[20px] w-[20px]'/>
          </div>
          </div>   
                 
          </div>


     ))}
    
     </div>
    </Link>   
     </>
  )
}

export default Cards
