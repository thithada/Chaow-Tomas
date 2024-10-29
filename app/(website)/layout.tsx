export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="w-full h-16 bg-red-500 flex items-center justify-center text-white text-xl font-semibold shadow-md">
                Navbar
            </div>
            <div className="p-8 bg-gray-100 min-h-screen">
                {children}
            </div>
        </>
    )
}
