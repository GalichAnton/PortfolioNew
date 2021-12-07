import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeFade } from "../animation";
const Resume = () => {
  return (
    <motion.div
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-6 py-2 ">

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={routeFade}
          initial="hidden"
          animate="visible">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Engineer for the operation of nuclear power plants
            </h5>
            <p className="font-semibold">Polytechnic University of Saint-Petersburg (2016-2021)<br />
              (also took many courses on udemy, youtube, yandex)</p>
            <p className="my-3">
              II became very interested in web development and realized that this is mine, what I would like to develop and work in
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Layout designer</h5>
            <p className="font-semibold">Everland (Russia)</p>

          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;