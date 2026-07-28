import { motion } from "framer-motion";
import {
    FaRobot,
    FaFilePdf,
    FaPalette,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const features = [
    {
        icon: <FaRobot />,
        title: "AI Resume Analysis",
        desc: "Receive ATS scores, keyword analysis, grammar suggestions and personalized improvements powered by AI.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: <FaPalette />,
        title: "Professional Templates",
        desc: "Choose from beautiful modern resume templates designed to impress recruiters and hiring managers.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <FaFilePdf />,
        title: "One-click PDF Export",
        desc: "Download pixel-perfect professional resumes instantly with high-quality PDF export.",
        color: "from-green-500 to-emerald-600",
    },
];

function Features() {
    return (
        <section className="bg-slate-50 py-24">
            <Container>
                <SectionTitle
                    badge="FEATURES"
                    title="Everything You Need"
                    subtitle="Build, optimize and manage professional resumes using AI-powered tools designed to maximize interview chances."
                />

                <div className="grid gap-10 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className="group h-full">
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-3xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                >
                                    {feature.icon}
                                </div>

                                <h3 className="mb-4 text-2xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="leading-8 text-slate-500">
                                    {feature.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Features;