import { mysqlPool } from "@/utils/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import Form from 'next/form'

export default async function TodoEditPage({
    params
}: {
    params: { id: number }
}) {
  const todoId = await params.id;
  const promisePool = mysqlPool.promise();
  const [rows, fields] = await promisePool.execute(`select * from todos where id = ${todoId}`);

  const updateForm = async (formData) => {
    'use server'
    console.log(formData);

    if(rows.length > 0 ){

    } else {
    }
  }

  if (rows.length > 0) {
    //has data
    const data = rows[0];
    return (
        <div className="p-3">
            <Form action="">
                <div>Title : <input type="text" className="border-2" name="title" defaultValue={data.title} /> </div>
                <div>Description : <textarea className="border-2" name="description" defaultValue={data.description} /> </div>
                <div>
                    <button type="submit" className="p-3 bg-blue-300"> Save </button>
                </div>
            </Form>
        </div>
    )
  } else {
    //nodata
    redirect("/dashboard/todo")
  }
}