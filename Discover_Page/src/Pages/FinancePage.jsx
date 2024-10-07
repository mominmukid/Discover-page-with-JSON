import React from 'react'
import AllCard from '../components/bodyComp/AllCard'
import findata from '../../API/FinData.json'

function FinancePage() {
 
  return (
   <div className=' w-[100%]  md:w-full flex flex-col gap-2 justify-center items-start'>
   <AllCard news={'business'} getdata={findata} />
</div>

  )
}

export default FinancePage