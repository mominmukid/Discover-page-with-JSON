import React from 'react'
import AllCard from '../components/bodyComp/AllCard'
import sopdata from '../../API/SportData.json'

function SoprtsPage() {

  return (
   <div className=' w-[100%]  md:w-full flex flex-col gap-2 justify-center items-start'>
         <AllCard  getdata={sopdata}/>
      </div>
  )
}

export default SoprtsPage