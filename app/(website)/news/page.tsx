import Link from "next/link";
import newsdb from "./db";

async function getALLNews() {
    return newsdb;
}

export default async function NewsPage() {
    const news_list = await getALLNews();

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
                <div className="text-center text-3xl font-extrabold text-white mb-8">
                    หน้าแสดงรายการข่าว
                </div>

                <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
                    <ul className="space-y-4">
                        {news_list.map(item => (
                            <li key={item.id} className="text-lg">
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-blue-400 hover:text-blue-300 hover:underline transition duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
