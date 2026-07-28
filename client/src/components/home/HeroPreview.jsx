import { motion } from "framer-motion";
import {
    FaUserCircle,
    FaCheckCircle,
    FaFilePdf,
} from "react-icons/fa";

function HeroPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
        >

            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.3)]"
            >

                <div className="mb-8 flex items-center gap-4">

                    <FaUserCircle className="text-6xl text-cyan-300" />

                    <div>

                        <h2 className="text-xl font-bold">
                            John Doe
                        </h2>

                        <p className="text-slate-300">
                            MERN Stack Developer
                        </p>

                    </div>

                </div>

                <div className="space-y-5">

                    <Progress title="ATS Score" value="91%" />

                    <Progress title="Keyword Match" value="94%" />

                    <Progress title="Formatting" value="97%" />

                </div>

                <div className="my-8 h-px bg-white/10" />

                <div className="grid grid-cols-2 gap-3">

                    {[
                        "React",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "REST API",
                        "JWT Auth",
                    ].map(skill => (

                        <div
                            key={skill}
                            className="flex items-center gap-2 rounded-xl bg-white/5 p-3"
                        >

                            <FaCheckCircle className="text-green-400" />

                            {skill}

                        </div>

                    ))}

                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-red-500/10 p-4">

                    <div>

                        <p className="font-bold">
                            Resume.pdf
                        </p>

                        <p className="text-sm text-slate-400">
                            Ready to Download
                        </p>

                    </div>

                    <FaFilePdf className="text-3xl text-red-400" />

                </div>

            </motion.div>

        </motion.div>
    );
}

function Progress({ title, value }) {
    return (
        <div>

            <div className="mb-2 flex justify-between">

                <span>{title}</span>

                <span className="font-bold">
                    {value}
                </span>

            </div>

            <div className="h-2 rounded-full bg-white/10">

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: value }}
                    transition={{ duration: 1.5 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

            </div>

        </div>
    );
}

export default HeroPreview;