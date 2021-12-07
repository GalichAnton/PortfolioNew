import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animation";
import { NextPage } from "next";

const index: NextPage = () => {

  return (
    <motion.div
      className='flex flex-col px-6 pt-1'
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h5 className='my-3 font-medium'>
        Although I'm still quite a "young" specialist, I really like the world of front-end development,
        and I would like to develop my skills while benefiting the company in which I work
      </h5>
      <div className='p-4 mt-5 bg-gray-800 rounded-lg'>
        <h6 className='text-white'>
          What i offer
        </h6>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          animate="animate"
          initial="initial" >
          {
            services.map((item, i) => (
              <motion.div variants={fadeInUp}
                key={i} className='p-2 bg-gray-400 rounded-lg lg:col-span-1'>
                <ServiceCard service={item} />
              </motion.div>

            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}



export default index

/* export const getServerSideProps = async (context: GetServerSideProps) => {

  const res =  await fetch('http://localhost:3000/api/services')
  const data =  await res.json()
  console.log('SERVER',services)
  return {
    props: {
      services: data.services
    }


  }
} */