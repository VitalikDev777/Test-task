import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Test Task</h1>
      <p className="text-lg mb-6 max-w-md">
        This is a demo application created for a test task. It showcases skills in Next.js (App Router), 
        Tailwind CSS, and TypeScript.
      </p>
      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Go to Product Catalog
      </Link>
    </div>
  );
}
