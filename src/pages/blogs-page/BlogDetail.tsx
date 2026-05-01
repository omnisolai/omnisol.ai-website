import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Bookmark, ChevronRight } from 'lucide-react';
import blogs from '../../blogs-data/blogs-data.json';
import { Link } from 'react-router-dom';

interface BlogDetailsProps {
    slug?: string;
    onBack?: () => void;
}

export default function BlogDetails({ slug, onBack }: BlogDetailsProps) {
    const [currentBlog, setCurrentBlog] = useState<any>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const blogSlug = slug || window.location.pathname.split('/').pop();
        const blog = blogs.find((b: any) => b.slug === blogSlug);
        setCurrentBlog(blog || blogs[0]);
        window.scrollTo(0, 0);
    }, [slug]);

    if (!currentBlog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bgmedium">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
                    <p className="text-textColor font-main">Loading...</p>
                </div>
            </div>
        );
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentBlog.title,
                    text: currentBlog.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-linear-to-br from-orange/5 via-white to-orange-400/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button
                        onClick={onBack || (() => window.history.back())}
                        className="inline-flex items-center gap-2 text-textColor hover:text-orange transition-colors duration-300 mb-6 group font-main font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Blog
                    </button>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cardBorder">
                        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                            <img
                                src={currentBlog.image}
                                alt={currentBlog.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                            <div className="absolute top-6 left-6">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-orange text-white shadow-lg font-main">
                                    {currentBlog.category}
                                </span>
                            </div>

                            <div className="absolute bottom-6 right-6 flex gap-3">
                                <button
                                    onClick={handleShare}
                                    className="p-3 rounded-full bg-white/90 backdrop-blur-md text-textColor hover:bg-orange hover:text-white transition-all duration-300 shadow-lg"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 lg:p-12">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-faqText mb-6 font-main">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-orange" />
                                    <span>{currentBlog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-orange" />
                                    <span>{currentBlog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-orange" />
                                    <span>{currentBlog.readTime}</span>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-bold text-textColor mb-6 leading-tight font-main">
                                {currentBlog.title}
                            </h1>

                            <p className="text-lg lg:text-xl text-para leading-relaxed mb-8 font-libresans">
                                {currentBlog.excerpt}
                            </p>

                            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-cardBorder">
                                <img
                                    src={currentBlog.avatar}
                                    alt={currentBlog.author}
                                    className="w-16 h-16 rounded-full border-2 border-orange shadow-lg"
                                />
                                <div>
                                    <p className="font-semibold text-textColor font-main">{currentBlog.author}</p>
                                    <p className="text-sm text-faqText font-libresans">{currentBlog.authorBio}</p>
                                </div>
                            </div>

                            {currentBlog.content.keyTakeaways && currentBlog.content.keyTakeaways.length > 0 && (
                                <div className="bg-gradient-to-br from-orange-400 to-orange/5 rounded-2xl p-6 lg:p-8 mb-10 border border-orange/20 shadow-sm">
                                    <h2 className="text-2xl font-bold text-textColor mb-4 font-main flex items-center gap-2">
                                        <span className="w-1.5 h-8 bg-orange rounded-full"></span>
                                        Key Takeaways
                                    </h2>
                                    <ul className="space-y-3">
                                        {currentBlog.content.keyTakeaways.map((takeaway: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 text-para font-libresans leading-relaxed">
                                                <ChevronRight className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                                                <span>{takeaway}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="prose prose-lg max-w-none mb-10">
                                <p className="text-para text-lg leading-relaxed mb-8 font-libresans">
                                    {currentBlog.content.introduction}
                                </p>

                                {currentBlog.content.mainHeading && (
                                    <h2 className="text-3xl font-bold text-textColor mb-6 mt-12 font-main">
                                        {currentBlog.content.mainHeading}
                                    </h2>
                                )}

                                {currentBlog.content.subHeadings && currentBlog.content.subHeadings.map((section: any, index: number) => (
                                    <div key={index} className="mb-10">
                                        <h3 className="text-2xl font-bold text-textColor mb-4 font-main flex items-start gap-3">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-semibold mt-1">
                                                {index + 1}
                                            </span>
                                            {section.title}
                                        </h3>
                                        <p className="text-para text-lg leading-relaxed whitespace-pre-line font-libresans pl-11">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}

                                {currentBlog.content.conclusion && (
                                    <div className="bg-gradient-to-br from-cardBgSeven to-cardBgTwo rounded-2xl p-6 lg:p-8 mb-10 border border-cardBorder mt-12">
                                        <h2 className="text-2xl font-bold text-textColor mb-4 font-main">Conclusion</h2>
                                        <p className="text-para text-lg leading-relaxed font-libresans">
                                            {currentBlog.content.conclusion}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {currentBlog.content.callToAction && (
                                <div className="bg-gradient-to-br from-orange via-orange-100 to-hero text-white rounded-2xl p-8 lg:p-10 mb-10 shadow-xl">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-main">Ready to Get Started?</h3>
                                    <p className="text-lg mb-6 opacity-95 font-libresans leading-relaxed">
                                        {currentBlog.content.callToAction}
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="px-8 py-4 bg-white text-orange rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-main">
                                        Contact Us Today
                                    </Link>
                                </div>
                            )}

                            {currentBlog.tags && currentBlog.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {currentBlog.tags.map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-badgeBg text-badgeText rounded-full text-sm font-medium border border-badgeBorder font-main hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {currentBlog.content.whatShouldBeMore && currentBlog.content.whatShouldBeMore.length > 0 && (
                                <div className="border-t border-cardBorder pt-8 mb-10">
                                    <h3 className="text-xl font-bold text-textColor mb-4 font-main">Future Enhancements</h3>
                                    <ul className="space-y-2">
                                        {currentBlog.content.whatShouldBeMore.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 text-faqText font-libresans">
                                                <span className="w-2 h-2 bg-orange rounded-full flex-shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {currentBlog.relatedPosts && currentBlog.relatedPosts.length > 0 && (
                <div className="bg-bgmedium py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-textColor mb-8 font-main">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {currentBlog.relatedPosts.map((post: any, index: number) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-cardBorder hover:border-orange"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-textColor mb-3 group-hover:text-orange transition-colors duration-300 font-main line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <button className="inline-flex items-center gap-2 text-orange font-semibold group-hover:gap-3 transition-all duration-300 font-main">
                                            Read More
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
