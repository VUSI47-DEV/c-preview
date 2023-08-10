import React from 'react'

const UpperCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-10 p-4 w-full'>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$456.66</p>
                <p className='text-gray-700'>Daily Something</p>
            </div>
        </div>
        
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg ">
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$456.66</p>
                <p className='text-gray-700'>Daily Something</p>
            </div>
        </div>
        <div className=" bg-white flex justify-between w-full border p-4 rounded-lg  ">
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$456.66</p>
            <p className='text-gray-700'>Daily Something</p>
        </div>
        </div>
    </div>
  )
}

export default UpperCards