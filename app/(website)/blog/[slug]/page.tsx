"use client";

import exp from "constants";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const formattext = slug.replace(/-/g, " ");

  return (
    <p className="text-4xl font-bold mb-8 min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center">
      มื้อนี่เราก็จะมาโชว์ blog ที่ดึงจาก slug เน้อ{" "}
      <strong className="bg-red-600">{formattext}</strong>
    </p>
  );
};

export default BlogPost;
