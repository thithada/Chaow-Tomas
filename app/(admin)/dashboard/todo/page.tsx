import { mysqlPool } from "@/utils/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TodoPage({}) {
  const promisePool = mysqlPool.promise();
  const todos = await promisePool.execute("select * from todos");
  const [rows, fields] = todos;
  return (
    <>
      <div className="p-3">
        <h1>Todo list page</h1>

        <ul>
          {rows.map((row) => (
            <li key={row.id}>
              <Link
                className="underline text-blue-500"
                href={"/dashboard/todo/" + row.id}
              >
                {row.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
