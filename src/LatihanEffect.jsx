import { useEffect, useState } from "react";

export default function LatihanEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const hasil = await response.json();
                setData(hasil);
                console.log(hasil); // Hasil sudah cukup di-log, data tidak perlu.
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        };
        fetchDataUser();
    }, []);

    return (
        <div className="flex justify-center flex-col items-center h-screen w-full">
            {data.length > 0 ? (
                data.map((anu, index) => (
                    <p key={index}>{anu.email}</p> // Tambahkan "return" eksplisit di sini
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
