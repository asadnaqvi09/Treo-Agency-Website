import React from "react";

function ContactUs() {
  return (
    <>
      <section className="px-4 md:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:gap-12 items-start justify-between">
          {/* Left Content */}
          <div className="md:w-[30%] space-y-4 flex flex-col md:mt-[4rem]">
            <h2 className="text-3xl font-bold text-black">
              Let's a Conversation
            </h2>
            <p className="text-gray-500">
              We'd love to hear about your project and discuss how we can help
              you achieve your goals. Reach out to us using any of the methods
              below.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition duration-300 md:w-[60%]">
            <div className="formHeading flex flex-col text-start gap-2">
              <h1 className="font-bold text-black text-3xl">
                Send Us A Message
              </h1>
              <h3 className="font-semibold text-gray-600 text-md">
                Fill out the form below and we'll get back to you within 24
                hours.
              </h3>
            </div>
            <form action="" method="post" className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="Name flex flex-col">
                  Full Name*
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Your Full Name"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="email flex flex-col">
                  Email*
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="ServiceNeeded">
                <label htmlFor="">Service You Need*</label>
                <select
                  name="service"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                  <option value="">Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app-development">
                    Mobile App Development
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                </select>
              </div>
              <div className="Message">
                <label htmlFor="">Project Details*</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project , timeline budget, and any specific requirements you have."
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full text-white font-bold text-lg py-2 rounded-lg border border-transparent 
             bg-gradient-to-r from-indigo-500 to-purple-500
             transition-all duration-300 ease-in-out 
             hover:from-indigo-400 hover:to-purple-400 
             hover:shadow-[0_4px_20px_rgba(139,92,246,0.5)] 
             hover:border-purple-400 
             cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
