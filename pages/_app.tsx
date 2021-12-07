import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider attribute='class'>
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
      <div className='col-span-12 p-4 text-center dark:shadow-custom-light shadow-custom-dark lg:col-span-3 rounded-2xl bg-gradient-to-r from-contentBg1 to-contentBg2 dark:bg-gradient-to-r dark:from-myLightMode1 dark:to-myLightMode2'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 bg-white dark:shadow-custom-light shadow-custom-dark lg:col-span-9 rounded-2xl bg-gradient-to-r from-contentBg1 to-contentBg2 dark:bg-gradient-to-r dark:from-myLightMode1 dark:to-myLightMode2'>
        <NavBar />
        <Component {...pageProps} />
      </div>

    </div>
  </ThemeProvider>
  )


}

export default MyApp
