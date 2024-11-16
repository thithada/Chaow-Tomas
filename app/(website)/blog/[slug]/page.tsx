"use client"

import exp from "constants";
import { useParams } from "next/navigation";

const BlogPost = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const formattext = slug.replace(/-/g," ")

    return (
        <p className="text text-2xl ">
            มื้อนี่เราก็จะมาโชว์ blog ที่ดึงจาก slug เน้อ <strong className="bg-cyan-300">{formattext}</strong>
        </p>
    );
}
 
export default BlogPost;