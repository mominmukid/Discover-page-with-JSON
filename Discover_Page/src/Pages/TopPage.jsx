
import AllCard from '../components/bodyComp/AllCard'
import topdata from '../../API/TopNewsData.json'
function TopPage() {
   return (
      <div className=' w-[100%] h-full  md:w-full flex flex-col gap-2 justify-center items-start'>
         <AllCard  getdata={topdata} />
      </div>
   )
}

export default TopPage