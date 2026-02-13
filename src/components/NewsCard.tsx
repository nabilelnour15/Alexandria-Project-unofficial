import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types/news';

interface NewsCardProps {
    article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0068c8] text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{article.author}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0d1623] mb-3 line-clamp-2 group-hover:text-[#0068c8] transition-colors font-['Montserrat']">
                    <Link to={`/news/${article.id}`}>
                        {article.title}
                    </Link>
                </h3>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map((tag) => ( // Show first 3 tags
                        <div key={tag} className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                            <Tag className="w-3 h-3" />
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="mt-auto">
                    <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center text-[#0068c8] font-semibold text-sm hover:underline"
                    >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
