import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Footer, Loader, Error } from '../components';
import { Switch } from "@material-tailwind/react";
import { IoMdGitNetwork } from "react-icons/io";
import { useSelector } from 'react-redux';
import AllData from '../../API/AllData.json'


function DetailsPage({
}) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null);
   const [item, setItem] = useState(null);
   const params = useParams();
   const alldata = useSelector(state => state.Alldata.alldata)
   const title = params.title;

   // console.log(alldata);

   useEffect(() => {
      if (AllData && AllData.length > 0) {
         const item = AllData.find((item) => item.title === title);
         setItem(item)
         setLoading(false)
         // console.log(item);
      }
   }, [title, params])

   // Display loading state
   if (loading) {
      return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center"><Loader /></div>;
   }

   // Display error state
   if (error) {
      return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center font-semibold text-white text-xl">{error}</div>;
   }

   // Display message if no data
   if (AllData.length === 0) {
      return <div className="w-[100%] min-h-screen bg-[#202222] flex justify-center items-center">No data available</div>;
   }
   return (
      <>
         <div className='w-full  bg-[#191a1a] flex flex-col justify-start items-center relative text-[#e8e8e6] mb-[7rem]'>

            <div className='w-[95%] h-[60%] md:w-full bg-black mt-5 rounded-lg'>

               <img src={item?.image_url} alt={item?.title}
                  className='w-full h-full object-cover cursor-zoom-in'
               />
            </div>

            <div className='w-[94%] md:w-full  mt-4 '>
               <h1 className='font-semibold text-xl mt-2'> {item?.title}</h1>
               <p className='mt-2'>{item?.description}</p>
               <p className=''> {item?.content}</p>
            </div>

            <div className='w-full px-5 py-3 flex flex-col justify-center items-start mt-5 gap-2'>
               <p className='font-bold tetx-lg'>Author: <span className='font-normal'>{item?.author}</span> </p>
               <p className='font-bold tetx-lg'>publishedAt: <span className='font-normal'>{item?.published_at}</span> </p>
               <p className='font-bold tetx-lg'>Url: <a href={item?.url} className='text-blue-500'>{item?.url}</a> </p>
            </div>


            <div className='fixed w-[90%] md:w-[35%] h-[4rem] md:h-[5rem] left-5 md:left-[22rem] bottom-[5rem] md:bottom-1  bg-[#202222] rounded-full flex justify-center items-center p-2'>

               <div className='w-[100%] h-full rounded-full  bg-[#202222] border border-[#373a3b] flex justify-around items-center p-2'>
                  <textarea rows='1' className='w-[70%] bg-[#202222] outline-none  flex justify-center pt-1 items-start rounded-full resize-none text-[#8d9191]' placeholder=' Ask follow-up' >
                  </textarea>
                  <Switch color='gray' label="pro" />
                  <p className='text-gray-400 rounded-full hover:text-white cursor-pointer bg-gray-800 hover:bg-gray-400/10 p-2 duration-400 font-bold overflow-hidden'><IoMdGitNetwork /></p>
               </div>
            </div>

            <div className=' md:hidden w-full p-3 fixed bottom-0 bg-[#202222] '>
               <Footer />
            </div>

         </div>
      </>
   )
}

export default DetailsPage

