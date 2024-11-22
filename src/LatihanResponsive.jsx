import { useEffect, useRef, useState } from "react";

export default function LatihanResponsive() {
    const [Todos, setTodos] = useState([]);
    const isInitialMount = useRef(true);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem("todos", JSON.stringify(Todos));
        }
    }, [Todos]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.todos.value.trim();
        if (newTodo) {
            setTodos([...Todos, newTodo]);
            event.target.reset();
        }
    };

    return (
        // ini jadi flex row kalau di tablet sampai desktop
        <main className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 text-gray-200 min-h-screen">
            <section className="flex flex-col items-center md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-center text-xl md:text-2xl font-bold mb-6 text-gray-100">
                    Add a Todo
                </h1>
                <form
                    className="flex flex-col w-full max-w-md"
                    onSubmit={handleSubmit}
                >
                    <textarea
                        name="todos"
                        rows="4"
                        placeholder="Add a new todo..."
                        className="appearance-none bg-gray-700 w-full px-4 py-3 mb-4 rounded-md text-gray-100 placeholder-gray-400 resize-none focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 py-3 px-6 rounded-md text-white font-medium transition duration-300"
                    >
                        Add
                    </button>
                </form>
            </section>
            <section className="flex flex-col md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-center text-xl md:text-2xl font-bold mb-6 md:text-left text-gray-100">
                    Todo List
                </h1>
                <div className="flex flex-wrap gap-4 w-full">
                    {Todos.length > 0 ? (
                        Todos.map((todo, index) => (
                            <div
                                key={index}
                                className="bg-indigo-500 bg-opacity-75 px-4 py-3 rounded-md text-gray-100 shadow-md hover:shadow-lg transition duration-300 w-full md:w-auto"
                            >
                                {todo}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center w-full">
                            No todos yet. Add something!
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
