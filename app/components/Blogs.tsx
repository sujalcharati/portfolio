import React from "react"
import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    title: "When process.env Sucks: A Node.js Performance Lesson",
    description: "A deep dive into optimizing Node.js applications by avoiding common pitfalls with environment variables.",
    href: "#",
  },
  {
    title: "Cookie-based Authentication: A Simple Guide for Secure Sessions",
    description: "Learn how to implement robust and secure cookie-based authentication in your web applications.",
    href: "#",
  },
  {
    title: "Understanding TypeScript's Readonly and Literal Types",
    description: "Exploring advanced TypeScript features for more robust and type-safe code.",
    href: "#",
  },
]

const BlogPostItem: React.FC<BlogPost> = ({ title, description, href }) => (
  <div className="py-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      <Link href={href} className="text-blue-600 hover:underline">
        {title}
      </Link>
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
)

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-16 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Posts</h2>
      <div>
        {blogPosts.map((post, index) => (
          <BlogPostItem key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

export default Blogs 