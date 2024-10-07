import React, { useState, useEffect, useId } from 'react';
import { Card } from '../index';
import Loader from '../otherCopms/Loader';


function AllCard({
  getdata
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Default to loading state
  const [error, setError] = useState(null);
  const id = useId();




  const fechdata = async () => {
    // console.log(getdata);
    setLoading(true);
    const datas = await getdata;
    setData(datas);
  }

  useEffect(() => {
    fechdata()
    setLoading(false)

  }, [getdata])


  if (loading) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center"><Loader /></div>;
  }

  // Display error state
  if (error) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center text-white font-semibold text-xl">{error}</div>;
  }

  // Display message if no data
  if (data.length === 0) {
    return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center">No data available</div>;
  }

  // Display articles
  return (
    <div className="w-full min-h-screen flex flex-col gap-2  bg-[#191a1a] flex-wrap">
      {data.map((singleData, index) => (
        singleData.title !== 'Removed' && singleData.image !== null && (
          <Card data={singleData} key={id + index}
            className={`w-[95%] md:w-full`} imageHeight={`h-[15rem]`} getdata={getdata} /> // Render Card for each article unless title is 'Removed'
        )
      ))}
    </div>
  );
}

export default AllCard;

