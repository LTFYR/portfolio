"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaMap, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Text } from "@/components/Text";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";
import MyAnimatedCursor from "@/components/MyAnimatedCursor";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrorMsg("Name field can't be empty");
    } else if (email === "") {
      setErrorMsg("Email is required");
    } else if (message === "") {
      setErrorMsg("Message is required");
    } else {
      setSuccessMsg(
        `Hello ${username}, Thank you for message. I'll answer you :)`
      );
    }
  };

  return (
    <>
      <Head>
        <title>LTFYR | Contact Page</title>
        <meta name="description" content="about page" />
      </Head>
      <PageTransition />

      <section
        style={{ height: "800px" }}
        id="contact"
        className="w-full bg-cover-image bg-no-repeat bg-cover bg-fixed text-black px-4 relative "
      >
        <div className="w-full h-ful bg-opacity-80 py-20 text-light dark:text-light">
          <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
            {/* <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Contact me
          </h1> */}
            <Text
              text="Contact me"
              className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl mb-16"
            />
            <div className="flex sm:flex-col md:flex-row justify-between items-center px-5">
              <div className="flex flex-col items-center gap-3">
                <FaMap className="text-4xl text-yellow-500" />
                <p className="text-sm tracking-wide">Azerbaijan,Baku</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FaEnvelope className="text-4xl text-yellow-500" />
                <p className="text-sm tracking-wide">
                  lutfiyar888lutfiyar@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FaPhoneAlt className="text-4xl text-yellow-500" />
                <p className="text-sm tracking-wide">077-324-16-69</p>
              </div>
            </div>
            {successMsg ? (
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "easyIn" }}
                className="contactmaxw600 h-full flex justify-center items-center mx-auto font-semibold px-4"
              >
                {successMsg}
              </motion.p>
            ) : (
              <form className="w-full flex flex-col items-center gap-4 md:gap-10">
                <div className="w-full flex sm:flex-row gap-4 items-center md:gap-10 px-4 lg:px-0">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Add your name"
                    className="w-1/2 sm:w-full py-2 px-4 text-base border border-solid border-yellow-500 rounded-2xl text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none  focus-within:border-yellow-500 duration-200"
                    type="text"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Add your email"
                    className="w-1/2 sm:w-full py-2 px-4 text-base border border-solid border-yellow-500 rounded-2xl text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none  focus-within:border-yellow-500 duration-200"
                    type="email"
                  />
                </div>
                <div className="w-full h-full px-4 lg:px-0 flex flex-col items-center gap-6">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="w-full text-base border border-solid border-yellow-500 rounded-2xl h-36 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none  focus-within:border-yellow-500 duration-200 resize-none"
                  ></textarea>
                  {errorMsg && (
                    <p className="w-full text-center text-base tracking-wider bg-red-500">
                      {errorMsg}
                    </p>
                  )}
                  <button
                    onClick={sendMessage}
                    className="w-full h-12 bg-yellow-500 text-base font-bold tracking-wide border-2 border-transparent hover:bg-black hover:text-white hover:border-yellow-500 duration-200"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
