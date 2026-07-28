import { motion } from "framer-motion";
import {
    FaFileAlt,
    FaRobot,
    FaStar,
    FaUsers,
} from "react-icons/fa";

import Container from "../ui/Container";
import Card from "../ui/Card";
import CountUpNumber from "../ui/CountUpNumber";

const stats = [
    {
        icon: <FaFileAlt />,
        number: 1000,
        suffix: "+",
        title: "Resumes Created",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: <FaRobot />,
        number: 95,
        suffix: "%",
        title: "ATS Accuracy",
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        icon: <FaStar />,
        number: 4,
        suffix: "",
        title: "Professional Templates",
        color: "text-yellow-500",
        bg: "bg-yellow-50",
    },
    {
        icon: <FaUsers />,
        number: 24,
        suffix: "/7",
        title: "AI Assistance",
        color: "text-green-600",
        bg: "bg-green-50",
    },
];

function Stats() {
    return (
        <section className="bg-white py-20">
            <Container>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full text-center">
                                <div
                                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.bg} ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <h2 className="mb-3 text-4xl font-black text-slate-900">
                                    <CountUpNumber
                                        value={item.number}
                                        suffix={item.suffix}
                                    />
                                </h2>

                                <p className="text-lg font-semibold text-slate-600">
                                    {item.title}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Stats;