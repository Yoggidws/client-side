import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function AssetsIT() {
    return (
        <div className='Assets-it flex gap-5'>
            <div className="card bg-white rounded-lg p-2 flex-1 mb-5">
                <div className="card-title flex justify-between pb-6 pt-2">
                    <h1>Laptop</h1>
                    <FontAwesomeIcon icon={faLaptop} className='w-4 h-4 bg-sky-300 text-sky-800 rounded-full mr-4' />
                </div>
                <span className=' text-5xl'> 120 </span>
            </div>
            <div className="card bg-white flex-1 mb-5 rounded-lg p-2">
                <div className="card-title flex justify-between pb-6 pt-2">
                    <h1>Laptop</h1>
                    <FontAwesomeIcon icon={faLaptop} className='w-4 h-4 bg-sky-300 text-sky-800 rounded-full mr-4' />
                </div>
                <span className=' text-5xl'> 120 </span>
            </div>
            <div className="card bg-white flex-1 mb-5 rounded-lg p-2">
                <div className="card-title flex justify-between pb-6 pt-2">
                    <h1>Laptop</h1>
                    <FontAwesomeIcon icon={faLaptop} className='w-4 h-4 bg-sky-300 text-sky-800 rounded-full mr-4' />
                </div>
                <span className=' text-5xl'> 120 </span>
            </div>
        </div>
    )
}
