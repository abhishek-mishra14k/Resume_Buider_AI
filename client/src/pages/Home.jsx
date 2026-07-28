// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <>
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
//         <div className="mx-auto max-w-7xl px-8">
//           <div className="max-w-3xl">
//             <h1 className="mb-6 text-6xl font-bold leading-tight">
//               Build Professional Resume with AI
//             </h1>

//             <p className="mb-10 text-xl text-blue-100">
//               Create ATS-friendly resumes, analyze them using AI,
//               improve your score, and download beautiful templates
//               in minutes.
//             </p>

//             <div className="flex gap-6">
//               <Link
//                 to="/register"
//                 className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:scale-105"
//               >
//                 Get Started
//               </Link>

//               <Link
//                 to="/resume-builder"
//                 className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-blue-700"
//               >
//                 Build Resume
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto grid max-w-7xl gap-8 px-8 py-20 md:grid-cols-3">
//         <div className="rounded-xl bg-white p-8 shadow-lg">
//           <h2 className="mb-3 text-2xl font-bold">
//             AI Resume Analysis
//           </h2>

//           <p className="text-gray-600">
//             Get ATS score, grammar corrections, keyword suggestions,
//             and smart recommendations.
//           </p>
//         </div>

//         <div className="rounded-xl bg-white p-8 shadow-lg">
//           <h2 className="mb-3 text-2xl font-bold">
//             Beautiful Templates
//           </h2>

//           <p className="text-gray-600">
//             Choose from modern professional resume templates with
//             one click.
//           </p>
//         </div>

//         <div className="rounded-xl bg-white p-8 shadow-lg">
//           <h2 className="mb-3 text-2xl font-bold">
//             PDF Download
//           </h2>

//           <p className="text-gray-600">
//             Export high-quality resumes instantly in PDF format.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Stats />
      <Features />
      <WhyChooseUs />
      <CTA />
    </>
  );
}

export default Home;