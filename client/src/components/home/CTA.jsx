import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-8">

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-10 py-20 text-center text-white shadow-2xl"
                >

                    <h2 className="mb-6 text-5xl font-black">
                        Ready to Build Your Dream Resume?
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
                        Join thousands of job seekers using AI to create
                        professional resumes that impress recruiters.
                    </p>

                    <Link
                        to="/resume-builder"
                        className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Build Resume

                        <FaArrowRight />

                    </Link>

                </motion.div>

            </div>
        </section>
    );
}

export default CTA;