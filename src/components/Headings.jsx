import React from 'react'

export default function Headings({ title, description }) {
    return (
        <>
            <h1 className='text-4xl font-semibold text-center py-2'>{title}</h1>
            {
                description !== '' && (<h3 className='text-gray-400 text-center'>{description}</h3>)
            }
        </>
    )
}
