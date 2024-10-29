import exp from "constants"
import Link from "next/link"
import newsdb from "./db"

async function getALLNews() {
    return newsdb
}

export default async function NewsPage() {
  
  const news_list = await getALLNews()

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="text-center text-3xl font-bold text-gray-800 mb-6">
          หน้าแสดงรายการข่าว
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <ul className="space-y-4">
            {news_list.map(item => (
              <li key={item.id} className="text-lg text-blue-600 hover:underline">
                <Link href={`/news/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
