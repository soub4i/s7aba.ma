export default function Contact() {
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('Mazal mkhadamch');
                }}
                className="flex flex-col w-2/3 md:w-1/2">
                <label htmlFor="name" className="font-semibold text-gray-500 mb-2 ">
                    Full Name
                </label>
                <input
                    type="text"
                    className="mb-6 h-8 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="name"
                    required
                />
                <label htmlFor="email" className="font-semibold text-gray-500 mb-2 ">
                    Email
                </label>
                <input
                    type="email"
                    className="mb-6 h-8 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="email"
                    required
                />
                <label htmlFor="msg" className="font-semibold text-gray-500 mb-2">
                    Message
                </label>
                <input
                    type="text"
                    className="  mb-6  h-28 shadow-lg  rounded focus:outline-none focus:ring focus:border-blue-300"
                    name="msg"
                />
                <button
                    type="submit"
                    className="p-1 self-center w-3/4 md:w-1/4 font-semibold text-blue-300 border-solid border-blue-300 border-2 rounded focus:outline-none focus:ring focus:border-blue-300 ">
                    <i className="far fa-paper-plane pr-1"></i> Send
                </button>
            </form>
        </section>
    );
}
