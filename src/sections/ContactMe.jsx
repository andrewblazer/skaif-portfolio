import { useForm } from "@formspree/react";
import Headings from "../components/Headings";
import OutlineButton from "../components/OutlineButton";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xdkodyoo");
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(message) {
    setModalMessage(message);
    setIsOpen(true);
  }

  function validateForm(event) {
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !email || !phone) {
      openModal("Please fill out all required fields.");
      return false; // Prevent form submission
    }
    return true;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm(event)) {
      handleSubmit(event).then(() => {
        if (state.succeeded) {
          openModal("Your message has been sent successfully!");
        } else if ((state.errors.getAllFieldErrors()).length > 0) {
          openModal("There was an error submitting the form. Please try again.");

        }
      });
    }
  };

  return (
    <div>
      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Notification
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{modalMessage}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Form */}
      <form
        id="contact"
        onSubmit={onSubmit}
        className="scroll-m-24 flex flex-col gap-4 justify-center items-center px-4 sm:px-6 lg:px-16"
      >
        <Headings title="Contact Me" description="Let's Connect Shall We?" />

        <div className="flex flex-col sm:flex-row gap-7 mt-7 w-full sm:w-3/4 lg:w-1/2 justify-center">
          <div className="flex flex-col gap-7 w-full sm:w-1/2">
            <input
              type="text"
              className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
              placeholder="Name"
              name="name"
            />
            <input
              type="tel"
              className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
              placeholder="Phone Number"
              name="phone"
            />
            <input
              type="text"
              className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
              placeholder="Timeline"
              name="timeline"
            />
          </div>

          <div className="flex flex-col gap-7 w-full sm:w-1/2">
            <input
              type="email"
              className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
              placeholder="Email"
              name="email"
            />
            <select
              name="interest"
              className="bg-white text-slate-950 appearance-none rounded-lg px-4 py-3 outline-none"
            >
              <option value={null}>Service of Interest</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Static Web Development">
                Static Web Development
              </option>
              <option value="Dynamic Web Development">
                Dynamic Web Development
              </option>
              <option value="Dynamic Web Development With Domain">
                Dynamic Web Development With Domain
              </option>
            </select>
            <textarea
              type="text"
              name="details"
              className="appearance-none bg-white bg-opacity-10 rounded-lg px-4 py-3 outline-none"
              placeholder="Project Details"
              rows={4}
            />
          </div>
        </div>

        <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center sm:justify-end my-4">
          <OutlineButton>Send</OutlineButton>
        </div>
      </form>
    </div>
  );
}
