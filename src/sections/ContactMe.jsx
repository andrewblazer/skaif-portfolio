import Headings from "../components/Headings";
import OutlineButton from "../components/OutlineButton";

export default function ContactMe() {
    return (
        <section className="flex flex-col gap-4 justify-center items-center px-4 sm:px-6 lg:px-16">
            <Headings title="Contact Me" description="Let's Connect Shall We?" />
            
            <div className="flex flex-col sm:flex-row gap-7 mt-7 w-full sm:w-3/4 lg:w-1/2 justify-center">
                <div className="flex flex-col gap-7 w-full sm:w-1/2">
                    <input
                        type="text"
                        className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
                        placeholder="Name"
                    />
                    <input
                        type="tel"
                        className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
                        placeholder="Timeline"
                    />
                </div>

                <div className="flex flex-col gap-7 w-full sm:w-1/2">
                    <input
                        type="email"
                        className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
                        placeholder="Email"
                    />
                    <select className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none">
                        <option>Service of Interest</option>
                    </select>
                    <textarea
                        type="text"
                        className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
                        placeholder="Project Details"
                        rows={4}
                    />
                </div>
            </div>

            <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center sm:justify-end my-4">
                <OutlineButton>Send</OutlineButton>
            </div>
        </section>
    );
}
