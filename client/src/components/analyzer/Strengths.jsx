function Suggestions({ analysis }) {
    return (
        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

            <h2 className="mb-5 text-3xl font-bold">
                💡 AI Suggestions
            </h2>

            {(analysis?.suggestions || []).length > 0 ? (

                <ul className="space-y-4">

                    {analysis.suggestions.map((suggestion, index) => (

                        <li
                            key={index}
                            className="flex items-start gap-3 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 shadow-sm transition hover:shadow-md"
                        >
                            <span className="mt-1 text-lg">💡</span>

                            <span className="text-gray-700">
                                {suggestion}
                            </span>
                        </li>

                    ))}

                </ul>

            ) : (

                <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">

                    <p className="text-lg font-medium text-gray-600">
                        No AI suggestions available.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Analyze your resume to receive personalized ATS improvement suggestions.
                    </p>

                </div>

            )}

        </div>
    );
}

export default Suggestions;