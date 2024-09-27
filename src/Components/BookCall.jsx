import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const BookCallImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449267/general/bookCall.svg'

const BookCall = ({bookCallRef}) => {

    const form = useRef()

    const formInputStyle = `w-[100%] bg-[transparent] py-[10px] px-[15px] mb-[15px] placeholder:text-[#484848] placeholder:text-[13px] text-[17px] text-[black] rounded-md border-[1px] border-[#484848] outline-none`

  const today = new Date().toISOString().split("T")[0]; // For the date input

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_BOOK_CALL, form.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message!');
          console.log('FAILED...', error.text);
        },
      );
   };

  return (
    <div className='bg-[#953F66] flex justify-center items-center flex-wrap  py-[4em] mt-[5em]' ref={bookCallRef}>
        <div className='lg:w-[30%] md:w-[70%] sm:w-[90%] w-[100%] mx-2 flex lg:flex-col md:flex-row sm:flex-row flex-col justify-center sm:items-start items-center'>
            <div className='sm:block sm:flex-none flex flex-col justify-center items-center lg:w-[100%] md:w-[50%] sm:w-[50%] w-[95%]'>
                <h3 className='text-primary text-[white] sm:text-[25px] text-[18px] font-semibold'>Lets Build Together.</h3>
                <p className='text-[#cacaca] sm:text-[15px] text-[12px] w-[75%] my-[10px] sm:text-left text-center'>Let’s bring your ideas to life! Whether you need brand strategy, design, or just some creative advice, we’re here to help. Schedule a quick call with our team, and let’s start building something amazing together!</p>
            </div>
            <img src={BookCallImg} className="lg:w-[80%] md:w-[50%] sm:w-[40%] w-[40%] lg:my-[3em]" alt="Book a call" />
        </div>

        <form onSubmit={sendEmail} ref={form} className='bg-[#D1D1D1] lg:w-[55%] md:w-[80%] sm:w-[90%] w-[100%] py-[4em] px-[30px] lg:mx-[3em] sm:my-5 my-7'>

            <h3 className='text-primary text-[#000000] text-[25px] font-semibold mb-[15px]'>Book a free 15 min call: </h3>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex sm:flex-row flex-col justify-between items-center w-[100%]'>

                    <div className='flex flex-col justify-center items-start sm:w-[47%] w-[95%] my-[15px] mx-auto'>
                        <label htmlFor="firstname" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>First Name: <span className='text-[red]'>*</span></label>
                        <input type="text" name='firstname' placeholder="First Name" className={formInputStyle} required />
                    </div>

                    <div className='flex flex-col justify-center items-start sm:w-[47%] w-[95%] my-[15px] mx-auto'>
                        <label htmlFor="lastname" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Last Name: <span className='text-[red]'>*</span></label>
                        <input type="text" name='lastname' placeholder="Last Name" className={formInputStyle}  required />
                    </div>

                </div>

                <div className='flex flex-col justify-center items-start sm:w-[90%] w-[95%] my-[15px] mx-auto'>
                    <label htmlFor="email" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Email: <span className='text-[red]'>*</span></label>
                    <input type="email" name='email' placeholder="example@gmail.com" className={formInputStyle}  required />
                </div>


                <div className='flex flex-col justify-center items-start sm:w-[90%] w-[95%] my-[15px] mx-auto'>
                    <label htmlFor="phone" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Phone Number: <span className='text-[red]'>*</span></label>
                    <input type="tel" name='phone' placeholder="Phone Number" className={formInputStyle}  required />
                </div>


                <div className='flex flex-col justify-center items-start sm:w-[90%] w-[95%] my-[15px] mx-auto'>
                    <label htmlFor="date" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Preferred Date: <span className='text-[red]'>*</span></label>
                   <input type="date" name='date' placeholder="dd/mm/yyyy" className={formInputStyle} min={today}  required />
                </div>

                <div className='flex flex-col justify-center items-start sm:w-[90%] w-[95%] my-[15px] mx-auto'>
                    <label htmlFor="subject" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Subject: <span className='text-[red]'>*</span></label>
                    <input type="text" name='subject' placeholder="Subject" className={formInputStyle}  required />
                </div>


                <div className='flex flex-col justify-center items-start sm:w-[90%] w-[95%] my-[15px] mx-auto'>
                    <label htmlFor="msg" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Message:</label>
                    <textarea name='msg' placeholder="Message" className={`${formInputStyle} resize-none h-[8em]`} />
                </div>

                <button className='bg-accent-color hover:bg-accent-hover py-[10px] px-[15px] text-primary-color font-semibold rounded-md my-[10px] w-[90%]'>Book Call</button>

            </div>

        </form>
    </div>
  )
}

export default BookCall
