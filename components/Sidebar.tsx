import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Modal from './Modal'
import { useState } from 'react'
import ContactForm from './ContactForm'

const Sidebar = () => {
  const {theme, setTheme} = useTheme()
  const [open, setOpen] = useState<boolean>(false)
  const changeTheme = () =>{
    setTheme(theme==='light'? 'dark' :'light')
  }

  const handleOpenModal=()=>{
    setOpen(!open)
  } 
  return (
    <div >
      <Image
        src='/img/ava.jpg'
        alt='avatar'
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"></Image>
      <h3 className='my-4 text-3xl font-bold tracking-wider font-mainFont'>
        <span className='text-green-600'>Anton </span>
        Galich
        </h3>
      <p className='px-2 py-1 my-3 bg-gray-400 rounded-full dark:bg-gray-200'>Web Developer</p>
      <a href=''
        download='Resume'
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-400 rounded-full dark:bg-gray-200'>
        <GiTie className='w-6 h-6' />Resume
      </a>
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a rel="noreferrer" href='https://github.com/GalichAnton'
          target='_blank'>
          <AiFillGithub
            className='w-6 h-6 transition-shadow duration-700 cursor-pointer hover:shadow' /></a>
        <a rel="noreferrer"href='https://t.me/Anton_Galich'
          target='_blank'>
          <FaTelegramPlane
            className='w-6 h-6 transition-shadow duration-700 cursor-pointer hover:shadow' /> </a>
        <a rel="noreferrer" href='https://www.linkedin.com/in/antongalich'
          target='_blank'>
          <AiFillLinkedin
            className='w-6 h-6 transition-shadow duration-700 cursor-pointer hover:shadow' /> </a>
      </div>
      <div className='py-4 my-5 bg-gray-400 rounded-lg dark:bg-gray-200'>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Saint-Petersburg, Russia</span>
        </div>
        <p className='my-2'>inthesky133@gmail.com</p>
        <p className='my-2'>Whats Up +79213934623</p>
      </div>  
      <button 
      className='w-8/12 px-5 py-2 my-2 transition-all duration-500 rounded-full hover:shadow-md bg-gradient-to-r from-buttonBg1 to-buttonBg2'
      onClick={handleOpenModal}
      >
        Email me
      </button>
    
      <button 
      className='w-8/12 px-5 py-2 my-2 transition-all duration-500 rounded-full hover:shadow-md bg-gradient-to-r from-buttonBg1 to-buttonBg2'
      onClick={changeTheme}>Light
      </button>
      <Modal open={open} onOpen={handleOpenModal}>
      <ContactForm onClose={handleOpenModal}/>
      </Modal>
       
    </div>             

  )
}

export default Sidebar
