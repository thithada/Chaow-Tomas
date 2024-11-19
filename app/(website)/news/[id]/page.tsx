import Link from "next/link";

export default async function DisplayNewsByIdPage({
    params
}: {
    params: { id: number }
}) {
    params = await params;
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md mx-auto text-center border border-gray-700">
                    <h1 className="text-3xl font-extrabold text-white">
                        ข่าวที่ {params.id}
                    </h1>
                    <p className="text-gray-400 mt-4">
                        รายละเอียดข่าวที่คุณเลือกจะแสดงอยู่ที่นี่
                    </p>
                    <div className="mt-6">
                        <Link href="/news">
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-purple-500 hover:to-blue-400 transform hover:scale-105 transition duration-300">
                                กลับไปหน้าแสดงรายการข่าว
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
