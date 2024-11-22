import { useState } from "react"

export default function Latihan() {
    const [count, SetCount] = useState(0);

    return (
        <div className="flex justify-center flex-col items-center h-screen w-full">
            <p>Count:</p>
            <h1>{count}</h1>
            <div className="flex gap-4 mt-4">
                <button onClick={
                    () => SetCount(count + 1)} className="px-5 bg-purple-800 hover:bg-purple-900 rounded">Tambah</button>
                <button onClick={() => SetCount(count - 1)} className="px-5 bg-purple-800 hover:bg-purple-900 rounded">Kurangi</button>
            </div>
        </div>
    )
}
