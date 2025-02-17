import { FaFacebookMessenger, FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTelegram, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { toast } from "react-toastify";
const Contact = () => {

    const handleSendButton = () => {
        toast('This section is under maintaining Process.')
    }

    return (
        <div className="mb-12">
            <h1 className="text-2xl md:text-5xl flex items-center font-bold"><IoMdContact className="text-7xl text-blue-600" /> Contact With Us</h1>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                <div className="flex flex-col md:w-[40%] gap-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered textarea-lg w-full"></textarea>
                    <button onClick={handleSendButton} className="btn btn-outline btn-primary  w-[40%] bg-lime-400 border-none text-[#FFFFFF]">
                        Send
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h3 className="text-3xl">Visit our social pages</h3>
                    <div className="text-4xl flex gap-4">
                        <a href="#"><FaFacebookSquare /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaTwitterSquare /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                    <h3 className="text-3xl">Chat With Us</h3>
                    <div className="text-4xl flex gap-4">
                        <a href="#"><FaFacebookMessenger /></a>
                        <a href="#"><FaWhatsappSquare /></a>
                        <a href="#"><FaTelegram /></a>
                    </div>
                    <h3 className="text-3xl">Call Our Hot-Lines</h3>
                    <a className="text-3xl" href="#">01699308-485</a>
                </div>
            </div>
            <h3 className="text-3xl font-semibold text-center mt-12">Thanks for visiting us</h3>
        </div>
    );
};

export default Contact;
