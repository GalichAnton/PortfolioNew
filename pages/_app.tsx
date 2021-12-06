import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
    <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl bg-gradient-to-r from-contentBg1 to-contentBg2'>
      <Sidebar/>
    </div>
    <div className='flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl bg-gradient-to-r from-contentBg1 to-contentBg2'>
      <NavBar/>
      <Component {...pageProps} />
    </div>

  </div>


}

export default MyApp
