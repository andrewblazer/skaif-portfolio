import React from 'react'

export default function CategoryBtn({ key = null, callback, item, activeTabs }) {
    return (
        <button key={key} onClick={callback} className={`px-4 py-2 rounded-full ${activeTabs === item ? 'bg-blue-500 bg-opacity-40' : 'bg-white bg-opacity-10'}`}>{item}</button>
    )
}
