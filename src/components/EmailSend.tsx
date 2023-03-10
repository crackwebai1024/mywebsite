import React, { useState } from "react";
import Swal from "sweetalert2";

export const EmailSend = () => {
  const [payload, setPayload] = useState({
    name: ``,
    email: ``,
    message: "",
  });

  function onInputChange(event: any) {
    const { name, value } = event.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  }

  async function submitRequest(e: any) {
    e.preventDefault();
    await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  function reSet() {
    Swal.fire(
      "Warning",
      "Sorry, Please send me an email directly or contact via social",
      "warning"
    );
    setTimeout(() => {
      setPayload({ name: ``, email: ``, message: `` });
    }, 5000);
  }
  return (
    <form onSubmit={submitRequest}>
      <div className="justify-between text-sm lg:flex ">
        <div className="w-full px-2 my-2 lg:w-1/2 xl:w-5/12">
          <input
            name="name"
            value={payload.name}
            className="w-full p-2 px-5 my-1 text-gray-800 border-b focus:border-green-500 sm:text-base sm:p-3 focus:outline-none "
            placeholder="Name"
            onChange={onInputChange}
          />
        </div>

        <div className="w-full px-2 my-2 lg:w-1/2 xl:w-5/12 ">
          <input
            name="email"
            value={payload.email}
            className="w-full p-2 px-5 my-1 text-gray-800 border-b sm:text-base sm:p-3 focus:outline-none focus:border-green-500"
            placeholder="Email"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="w-full px-2 my-2 ">
        <textarea
          name="message"
          value={payload.message}
          style={{
            resize: "none",
          }}
          className="w-full h-40 p-2 px-5 my-1 text-gray-800 border lg:h-48 focus:border-green-500 sm:text-base sm:p-3 focus:outline-none"
          placeholder="Message"
          onChange={onInputChange}
        />
      </div>

      <div className="relative">
        <button
          type="submit"
          onClick={reSet}
          className="absolute right-0 bottom-auto p-2 px-6 mr-4 bg-green-500 border border-green-300 rounded-md shadow hover:bg-green-300 focus:outline-none"
        >
          <p className="font-semibold tracking-wide text-white md:text-base">
            Submit
          </p>
          <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
            <span className="absolute inline-flex w-full h-full bg-indigo-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-3 h-3 bg-indigo-500 rounded-full"></span>
          </span>
        </button>
      </div>
    </form>
  );
};
