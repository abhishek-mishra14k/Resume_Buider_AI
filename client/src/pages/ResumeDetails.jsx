import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function ResumeDetails() {
    const { id } = useParams();

    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await api.get(`/resume/${id}`);
                setResume(res.data.resume);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResume();
    }, [id]);

    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    if (!resume) {
        return <h2 className="text-center mt-10">Resume not found.</h2>;
    }

    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold">{resume.fullName}</h1>

                    <Link
                        to="/dashboard"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                        Back
                    </Link>
                </div>

                <p className="text-gray-600">{resume.email}</p>
                <p className="text-gray-600">{resume.phone}</p>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                        Summary
                    </h2>

                    <p className="mt-3">{resume.summary}</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold border-b pb-2">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {resume.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default ResumeDetails;