import { motion } from "framer-motion";
import HeroPreview from "./HeroPreview";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import {
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white">

            {/* Background Blobs */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            <Container>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <Badge className="mb-6 bg-blue-500/20 text-blue-200">
                            🚀 AI Powered Resume Builder
                        </Badge>

                        <h1 className="mb-6 text-5xl font-black leading-tight lg:text-7xl">

                            Build

                            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Professional
                            </span>

                            AI Resumes

                        </h1>

                        <p className="mb-10 max-w-xl text-lg leading-8 text-slate-300">
                            Create beautiful ATS-friendly resumes,
                            analyze them with AI, improve your score,
                            and download professional PDFs in minutes.
                        </p>

                        <div className="mb-10 flex flex-wrap gap-5">

                            <Button to="/resume-builder">
                                Build Resume
                                <FaArrowRight className="ml-2" />
                            </Button>

                            <Button
                                to="/ai-analyzer"
                                variant="secondary"
                            >
                                Analyze Resume
                            </Button>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {[
                                "ATS Friendly",
                                "AI Suggestions",
                                "Professional Templates",
                                "PDF Download",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <FaCheckCircle className="text-green-400" />

                                    <span>{item}</span>

                                </div>

                            ))}

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <HeroPreview />

                </div>

            </Container>

        </section>
    );
}

export default Hero;