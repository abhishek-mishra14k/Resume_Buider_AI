import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiJavascript,
    SiGoogle,
} from "react-icons/si";

import Container from "../ui/Container";

const tech = [
    {
        icon: <FaReact />,
        name: "React",
        color: "text-cyan-500",
        link: "https://react.dev"
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "text-green-600",
        link: "https://nodejs.org/en"
    },
    {
        icon: <SiExpress />,
        name: "Express",
        color: "text-gray-700",
        link: "https://expressjs.com"
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "text-green-500",
        link: "https://www.mongodb.com"
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind",
        color: "text-sky-500",
        link: "https://tailwindcss.com"
    },
    {
        icon: <SiJavascript />,
        name: "JavaScript",
        color: "text-yellow-400",
        link: "https://www.javascript.com"
    },
    {
        icon: <SiGoogle />,
        name: "Gemini AI",
        color: "text-blue-500",
        link: "https://www.google.com/gemini/"
    },
    {
        icon: <FaGithub />,
        name: "GitHub",
        color: "text-slate-700",
        link: "https://github.com"
    },
];

function TechStack() {
    return (
        <section className="border-y border-slate-200 bg-white py-14">
            <Container>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center text-sm font-semibold uppercase tracking-[6px] text-slate-500"
                >
                    Built With Modern Technologies
                </motion.p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">

                    {tech.map((item, index) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.07,
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.05,
                            }}
                            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-500 hover:bg-blue-50"
                        >
                            <div
                                className={`mb-3 text-5xl transition-transform duration-300 group-hover:rotate-6 ${item.color}`}
                            >
                                {item.icon}
                            </div>

                            <p className="text-sm font-semibold text-slate-700">
                                {item.name}
                            </p>
                        </motion.a>
                    ))}

                </div>

            </Container>
        </section>
    );
}

export default TechStack;