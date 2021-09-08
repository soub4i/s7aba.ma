import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, isSubmitSuccessful, errors }
    } = useForm();

    const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

    const onSubmit = (data) => {
        try {
            //sending mail here
            setIsSuccessSubmit(true);
            setTimeout(() => {
                reset({ name: '', email: '', msg: '' });
            }, 3000);
        } catch (err) {
            setIsSuccessSubmit(false);
            alert('An error occurred while sending the message. please try again.');
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col justify-center items-center bg-gray-50 md:h-screen py-8">
            <div className="">
                <h1 className="font-semibold text-gray-600 mb-2">
                    Feel free to contact us via{' '}
                    <a href="mailto:" className="text-blue-600">
                        Email
                    </a>{' '}
                </h1>
                <h3 className="font-medium text-gray-600 mb-2">
                    Or fill the contact form down below
                </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-2/3 md:w-1/2">
                <label htmlFor="name" className="font-semibold text-gray-500 mb-2 ">
                    Full Name
                </label>
                <input
                    type="text"
                    className="p-2 mb-6 h-8 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="name"
                    {...register('name')}
                    required
                />
                <label htmlFor="email" className="font-semibold text-gray-500 mb-2 ">
                    Email
                </label>
                <input
                    type="email"
                    className="p-2 mb-6 h-8 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="email"
                    {...register('email')}
                    required
                />
                <label htmlFor="msg" className="font-semibold text-gray-500 mb-2">
                    Message
                </label>
                <textarea
                    type="text"
                    rows="4"
                    className="p-2 mb-6  h-28 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="msg"
                    {...register('msg')}
                    required
                />
                {isSubmitSuccessful && isSuccessSubmit && (
                    <div>
                        <h5 className="font-semibold text-green-500 mb-4">
                            We have received your message, We will get back to you ASAP :) .
                        </h5>
                    </div>
                )}
                <button
                    type="submit"
                    className="p-1 self-center w-3/4 md:w-1/4 font-semibold text-blue-300 border-solid border-blue-300 border-2 rounded focus:outline-none focus:ring focus:border-blue-300 "
                    disabled={isSubmitting}>
                    {!isSubmitting && (
                        <span>
                            <i className="far fa-paper-plane pr-1"></i>Send
                        </span>
                    )}
                    {isSubmitting && <i class="fas fa-spinner fa-spin"></i>}
                </button>
            </form>
        </section>
    );
}
