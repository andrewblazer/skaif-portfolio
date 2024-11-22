import React from 'react'

export default function CategoryBtn({ callback, item, activeTabs }) {
    return (
        <button onClick={callback} className={`px-4 py-2 rounded-full ${activeTabs === item ? 'bg-blue-500 bg-opacity-40' : 'bg-opacity-10'}`}>{item}</button>
    )
}
