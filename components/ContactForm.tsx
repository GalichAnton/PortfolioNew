import { FunctionComponent, useRef, useState } from "react"
import emailjs from 'emailjs-com';
const ContactForm: FunctionComponent<{
  onClose: Function;
}> = ({ onClose }) => {
  const formRef = useRef(null)
  const [done, setDone] = useState<boolean>(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_c7wju9q', 'template_f9wrlje', formRef.current, 'user_xRGCle2i7vLF781Aruakg')
      .then((result) => {
        setDone(true)
        console.log(result)
        formRef.current.reset()
        setTimeout(() => {
          onClose()
          setDone(false)
        }, 1500)
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
            First Name
          </label>
          <input required name="user_name" type='text' className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white" id="grid-first-name" placeholder="Jane" />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
            Last Name
          </label>
          <input required type='text' className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Doe" />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
            E-mail
          </label>
          <input required name="user_email" type='email' className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" />
          <p className="text-xs italic text-gray-600">Your contact email address</p>
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
            Phone
          </label>
          <input required name="user_phone" type='number' className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" />
          <p className="text-xs italic text-gray-600">Your contact  phone</p>
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
            Message
          </label>
          <textarea name="message" className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button type='submit' className="px-4 py-2 font-bold text-white rounded shadow bg-buttonBg1 hover:bg-teal-400 focus:shadow-outline focus:outline-none" >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
        {done ? 'Thank you!' : null}
      </div>
    </form>
  )
}

export default ContactForm
