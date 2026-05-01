import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/commons/BlogCard";
import Pagination from "../../components/commons/Pagination";
import blogPosts from "../../blogs-data/blogs-data.json";

const POSTS_PER_PAGE = 9;

export default function BlogListing() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ---------- Header ---------- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-textColor mb-4 font-main">
            Omnisol's Blog
          </h1>
          <p className="text-lg text-para max-w-2xl mx-auto font-Roboto">
            Insights, tips, and stories about AI, automation, and business intelligence
          </p>
        </div>

        {/* ---------- Blog Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block"
            >
              <BlogCard {...post} />
            </Link>
          ))}
        </div>

        {/* ---------- Pagination ---------- */}
        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
