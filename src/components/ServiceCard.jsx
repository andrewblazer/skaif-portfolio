import React from 'react'

export default function ServiceCard({ title, description, logo }) {
    return (
        <div className='bg-white bg-opacity-5 py-16 px-5  gap-6 justify-between items-center flex flex-col text-center rounded-2xl'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={logo} alt={title} className='aspect-square min-h-10' width="64px" height="64px"/>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <p className='text-md text-gray-500'>{description}</p>
        </div>
    )
}
