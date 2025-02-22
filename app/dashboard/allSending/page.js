import React from 'react'
import AllPlaces from '../../../components/AllPlaces'


const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center mt-2 ">
        <div className="max-w-screen-xl m-0  bg-white shadow-xl sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-0 flex flex-col items-center">            

            <div className="max-w-lg mx-auto mt-0 bg-white shadow-xl rounded-lg overflow-hidden">
             
                <AllPlaces />
                </div>

            </div>
          </div>
          <div>
          </div>       
        </div>
      </div>
  )
}

export default page