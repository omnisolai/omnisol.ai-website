import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogCardProps } from "../../types/BlogCard";
export default function BlogCard({
  title,
  author,
  date,
  readTime,
  category,
  image,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm border border-lightborder">
      <div className="relative h-48 overflow-hidden bg-gray">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-badgeBg text-badgeText border border-badgeBorder rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-textColor mb-3 line-clamp-2 font-main hover:text-orange transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-4 border-t border-lightborder">
          <div className="flex items-center gap-4 text-xs text-para">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-orange" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-orange" />
              <span>{readTime}</span>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-ReadmoreText hover:text-orange transition-colors group">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-lightborder">
          <p className="text-xs text-para">
            By <span className="font-medium text-textColor">{author}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
