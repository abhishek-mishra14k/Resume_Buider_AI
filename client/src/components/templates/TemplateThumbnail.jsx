function TemplateThumbnail({ type }) {
    const Page = ({ children, className = "" }) => (
        <div
            className={`h-44 w-32 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 group-hover:scale-105 ${className}`}
        >
            {children}
        </div>
    );

    switch (type) {
        case "ats":
            return (
                <Page>
                    <div className="border-b px-3 py-2">
                        <div className="h-2 w-20 rounded bg-slate-800" />
                        <div className="mt-2 h-1.5 w-14 rounded bg-slate-300" />
                    </div>

                    <div className="space-y-2 p-3">
                        <div className="h-2 rounded bg-slate-400" />
                        <div className="h-2 rounded bg-slate-300" />

                        <div className="mt-3 h-2 w-12 rounded bg-slate-800" />

                        <div className="h-2 rounded bg-slate-300" />
                        <div className="h-2 rounded bg-slate-200" />

                        <div className="mt-3 h-2 w-14 rounded bg-slate-800" />

                        <div className="h-2 rounded bg-slate-300" />
                    </div>
                </Page>
            );

        case "modern":
            return (
                <Page>
                    <div className="h-10 bg-gradient-to-r from-blue-600 to-indigo-700" />

                    <div className="space-y-2 p-3">
                        <div className="h-2 rounded bg-blue-500" />
                        <div className="h-2 rounded bg-slate-300" />

                        <div className="mt-3 h-2 rounded bg-blue-400" />

                        <div className="h-2 rounded bg-slate-300" />
                        <div className="h-2 rounded bg-slate-200" />

                        <div className="mt-3 flex gap-1">
                            <div className="h-4 w-8 rounded-full bg-blue-600" />
                            <div className="h-4 w-8 rounded-full bg-blue-500" />
                        </div>
                    </div>
                </Page>
            );

        case "creative":
        case "sidebar":
            return (
                <Page>
                    <div className="flex h-full">
                        <div className="w-9 bg-gradient-to-b from-slate-900 to-blue-800" />

                        <div className="flex-1 p-3">
                            <div className="h-2 rounded bg-slate-800" />

                            <div className="mt-3 h-2 rounded bg-slate-300" />
                            <div className="mt-2 h-2 rounded bg-slate-200" />

                            <div className="mt-3 h-2 w-10 rounded bg-blue-500" />

                            <div className="mt-2 h-2 rounded bg-slate-300" />
                            <div className="mt-2 h-2 rounded bg-slate-200" />
                        </div>
                    </div>
                </Page>
            );

        case "professional":
            return (
                <Page>
                    <div className="h-7 bg-slate-900" />

                    <div className="space-y-2 p-3">
                        <div className="h-2 rounded bg-slate-800" />
                        <div className="h-2 rounded bg-slate-300" />

                        <div className="mt-3 h-2 rounded bg-slate-800" />

                        <div className="h-2 rounded bg-slate-300" />
                        <div className="h-2 rounded bg-slate-200" />

                        <div className="mt-3 h-2 rounded bg-slate-800" />

                        <div className="h-2 rounded bg-slate-300" />
                    </div>
                </Page>
            );

        case "minimal":
        default:
            return (
                <Page>
                    <div className="p-3">
                        <div className="mx-auto h-2 w-16 rounded bg-slate-800" />

                        <div className="mt-5 space-y-2">
                            <div className="h-2 rounded bg-slate-300" />
                            <div className="h-2 rounded bg-slate-200" />

                            <div className="mt-4 h-2 w-12 rounded bg-slate-700" />

                            <div className="h-2 rounded bg-slate-300" />
                            <div className="h-2 rounded bg-slate-200" />
                        </div>
                    </div>
                </Page>
            );
    }
}

export default TemplateThumbnail;