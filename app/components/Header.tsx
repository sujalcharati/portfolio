import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 border-b border-gray-800 sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md">
      <Link href="/" className="group">
        <h1 className="text-2xl font-bold text-gray-100 tracking-wider group-hover:text-gray-400 transition-colors">
          SUJAL CHARATI
        </h1>
      </Link>
      <nav className="flex items-center space-x-8">
        <Link href="/" className="text-gray-400 hover:text-gray-100 font-medium transition-colors">
          Home
        </Link>
        <Link href="#projects" className="text-gray-400 hover:text-gray-100 font-medium transition-colors">
          Projects
        </Link>
        <Link href="#news" className="text-gray-400 hover:text-gray-100 font-medium transition-colors">
          News
        </Link>
      </nav>
    </header>
  );
}