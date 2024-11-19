export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="w-full h-16 bg-gray-900 flex items-center justify-center text-gray-200 text-xl font-semibold shadow-md">
                Tomas barber
            </div>
            <div className="p-8 bg-gray-800 min-h-screen text-gray-300">
                {children}
            </div>
        </>
    );
}
