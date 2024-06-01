import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';


import { useFormik } from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object({

    name: Yup.string().min(2).max(30).required("Please enter your name "),
    email: Yup.string().email().required("Please enter your email"),

    message: Yup.string().required("message is required")


})

const Contact = () => {

    const initialValues = {
        name: "",
        email: "",
        message: ""

    }
    const [state, handleSubmit] = useForm("mnqekplz");
    const { values, handleBlur, errors, touched, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }

    console.log(errors)
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">
                Get In Touch
            </motion.h2>
            <div className="flex flex-wrap tracking-tighter border-b border-neutral-900 pb-4">

                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className=" lg:block lg:flex-auto  flex flex-wrap items-center justify-center gap-2 w-full  lg:w-1/4"  >

                    <div className="lg:text-base  text-xs my-4 items-center  flex  gap-1 lg:gap-2 align"><span><FaLocationDot /></span> {CONTACT.address}</div>
                    <div className="lg:text-base  text-xs my-4 items-center  flex gap-1 lg:gap-2"><span><FaPhone /></span>{CONTACT.phoneNo}</div>
                    <a href="#" className="lg:text-base  text-xs items-center  flex  gap-1 lg:gap-2"><span><CiMail /></span>{CONTACT.email}</a>

                </motion.div>


                <div className="px-3 block mx-auto lg:flex-auto w-full lg:w-3/4">
                    <motion.form
                        onSubmit={handleSubmit}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        action=""
                        className="space-y-8"
                    >
                        <div className="input-block">
                            <label htmlFor="fname" className="block mb-2 font-medium text-sm text-gray-900 dark:text-gray-300">
                                Full Name:
                            </label>
                            <input
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="name"
                                id="fname"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none"
                                placeholder="Your name"
                            />
                            {touched.name && errors.name ? <div className="text-red-500 text-sm">{errors.name}</div> : null}
                        </div>

                        <div className="input-block">
                            <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Email Address:
                            </label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                name="email"
                                id="mail"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@gmail.com"
                            />
                            {touched.email && errors.email ? <div className="text-red-500 text-sm">{errors.email}</div> : null}
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="mess" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your Message:
                            </label>
                            <textarea
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="message"
                                id="mess"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a message..."
                                rows="5"
                            />
                            {touched.message && errors.message ? <div className="text-red-500 text-sm">{errors.message}</div> : null}
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>

            </div>
        </div>
    )
}

export default Contact