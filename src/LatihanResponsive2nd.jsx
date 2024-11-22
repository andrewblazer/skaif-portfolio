import React from "react";

function LatihanResponsive2nd() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 p-4 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                    Responsive Demo
                </h1>
                <p className="text-sm md:text-lg font-light mt-2">
                    Tailwind CSS + React Example
                </p>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center p-8 gap-8 md:gap-16">
                <div className="max-w-md">
                    <h2 className="text-xl md:text-3xl font-semibold">
                        Welcome to the Dark Side
                    </h2>
                    <p className="text-gray-400 mt-2 md:mt-4 text-sm md:text-lg">
                        This is a responsive demo with dark colors. Resize the window to see the changes.
                    </p>
                </div>
                <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-lg md:text-2xl text-gray-300">Dark Box</span>
                </div>
            </section>

            {/* Features Section */}
            <section className="p-4 md:p-16 bg-gray-800">
                <h3 className="text-lg md:text-2xl font-medium mb-4">
                    Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-base md:text-xl font-semibold">
                            Fast
                        </h4>
                        <p className="text-sm md:text-base text-gray-400 mt-2">
                            Tailwind is incredibly fast for building interfaces.
                        </p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-base md:text-xl font-semibold">
                            Responsive
                        </h4>
                        <p className="text-sm md:text-base text-gray-400 mt-2">
                            Adjust layouts for different screen sizes easily.
                        </p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="text-base md:text-xl font-semibold">
                            Customizable
                        </h4>
                        <p className="text-sm md:text-base text-gray-400 mt-2">
                            Customize styles to fit your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 p-4 text-center">
                <p className="text-sm md:text-base text-gray-500">
                    Built with ❤️ using React and Tailwind CSS
                </p>
            </footer>
        </div>
    );
}

export default LatihanResponsive2nd;
