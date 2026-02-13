import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { useEffect } from 'react';

export default function NewsArticlePage() {
    const { id } = useParams();
    const article = newsData.find((a) => a.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar isInternal />
                <div className="flex-1 flex flex-col items-center justify-center pt-20">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
                    <Link to="/news" className="text-[#0068c8] hover:underline flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to News
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar isInternal />
            <main className="pt-20 pb-20">
                {/* Hero Section */}
                <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623] via-[#0d1623]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 alex-container">
                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-1.5 bg-[#0068c8] text-white text-sm font-bold rounded-full uppercase tracking-wider mb-6 shadow-lg">
                                {article.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-['Montserrat']">
                                {article.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm md:text-base">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{new Date(article.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    <span>By {article.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="alex-container mt-12 md:mt-16">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-[#0068c8] mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to News
                        </Link>

                        {/* Article Body */}
                        <article className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed font-light">
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        </article>

                        {/* Tags & Share */}
                        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                                        <Tag className="w-4 h-4" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-[#e6f1fc] text-[#0068c8] rounded-xl font-semibold hover:bg-[#d0e6fa] transition-colors">
                                <Share2 className="w-5 h-5" />
                                Share Article
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
