import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">

            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Projects</motion.h1>

            <div>
                {
                    PROJECTS.map((project, index) => (

                        <div key={index} className="mb-0 flex flex-wrap lg:justify-center">
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                                <img src={project.image} alt={project.title} width={150} height={150} className="mt-4 mb-3 rounded lg:mt-0" />
                            </motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4 mb-5">
                                <h6 className="mp-2 font-semibold">
                                    {project.title}
                                </h6>

                                <p className="mb-4 text-nuetral-400">{project.description} <br /> <a className="text-purple-900 underline" href={project.link} target="_blank">Preview full website </a></p>
                                <div className="flex flex-wrap">
                                    {
                                        project.technologies.map((tech, index) => (
                                            <span key={index} className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech} </span>
                                        ))
                                    }

                                </div>
                            </motion.div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects