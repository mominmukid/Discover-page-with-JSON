import React from 'react'
import AllCard from '../components/bodyComp/AllCard'
import Techdata from '../../API/TechData.json'
function TechPage() {
 
  return (
   <div className=' w-[100%]  md:w-full flex flex-col gap-2 justify-center items-start'>
   <AllCard  getdata={Techdata} />
</div>
  )
}

export default TechPage