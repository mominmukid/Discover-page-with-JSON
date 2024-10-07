import React, { useEffect } from 'react'
import AllCard from '../components/bodyComp/AllCard'
import artdata from '../../API/ArtsData.json'


function ArtsPage() {


  return (

    
    <div className=' w-[100%]  md:w-full flex flex-col gap-2 justify-center items-start'>
      <AllCard  getdata={artdata}/>
    </div>
  )
}

export default ArtsPage