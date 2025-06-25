import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 border-b border-gray-200 sticky top-0 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        SUJAL CHARATI
      </h1>
      <nav className="flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
          Home
        </Link>
        <Link href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">
          Projects
        </Link>
        <Link href="#blogs" className="text-gray-600 hover:text-gray-900 font-medium">
          Blogs
        </Link>
        <Link href="#news" className="text-gray-600 hover:text-gray-900 font-medium">
          News
        </Link>
      </nav>
    </header>
  );
}