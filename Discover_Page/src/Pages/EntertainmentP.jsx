import React from 'react'
import AllCard from '../components/bodyComp/AllCard'
import enterData from '../../API/EntertainmentData.json'

function EntertainmentP() {
  return (
   <div className=' w-[100%]  md:w-full flex flex-col gap-2 justify-center items-start'>
   <AllCard  getdata={enterData}/>
</div>
  )
}

export default EntertainmentP