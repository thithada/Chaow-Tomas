import Link from "next/link";

export default async function DisplayNewsByIdPage({
    params
}: {
    params: { id: number }
}) {

    params = await params
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        หน้าแสดงข้อมูลข่าวที่ {params.id}
                    </h1>
                    <p className="text-gray-600 mt-4">
                        นี่คือรายละเอียดของข่าวที่คุณเลือก
                    </p>
                    <div className="mt-6">
                        <Link href="/news">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                กลับไปหน้าแสดงรายการข่าว
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
