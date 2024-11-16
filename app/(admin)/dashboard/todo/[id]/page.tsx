import { mysqlPool } from "@/utils/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TodoViewPage({
    params
}: {
    params: { id: number }
}) {
  const todoId = await params.id;
  const promisePool = mysqlPool.promise();
  const [rows, fields] = await promisePool.execute(`select * from todos where id = ${todoId}`);

  if (rows.length > 0) {

    const data = rows[0];
    return (
      <>
        <div className="p-3">
          <h1> Todo View : {todoId} </h1>
          <div>Title : {data.title}</div>
          <div>Description : {data.description}</div>
          <div>Created At : {data.created_at.toISOString()}</div>
          <div>Updated At : {data.updated_at.toISOString()}</div>

          <div className="mt-3">
            <Link href={'/dashboard/todo/' + todoId + '/edit'} className="p-3 bg-blue-300"> Edit Todo </Link>
          </div>
        </div>
      </>
    );
  }else{
    return (
        <>
            <div className="p-3">
                <h1>NO DATA Found</h1>
            </div>
        </>
    )
  }
}