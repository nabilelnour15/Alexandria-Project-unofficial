import { Calendar, User, ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types/news';

interface HotNewsCardProps {
    article: NewsArticle;
}

export default function HotNewsCard({ article }: HotNewsCardProps) {
    return (
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px] md:h-[500px]">
            {/* Background Image */}
            <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623] via-[#0d1623]/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                {/* Hot Badge */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff4d4d] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg animate-pulse-glow">
                        <Flame className="w-3.5 h-3.5" />
                        Hot Topic
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {article.category}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-['Montserrat']">
                    <Link to={`/news/${article.id}`} className="hover:text-[#3898ec] transition-colors">
                        {article.title}
                    </Link>
                </h2>

                {/* Meta & Summary */}
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                        </div>
                    </div>

                    <p className="text-white/80 text-lg mb-6 line-clamp-2 md:line-clamp-3">
                        {article.summary}
                    </p>

                    <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center px-6 py-3 bg-[#0068c8] text-white font-semibold rounded-xl hover:bg-[#0055a5] transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-[#0068c8]/30"
                    >
                        Read Full Story
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
