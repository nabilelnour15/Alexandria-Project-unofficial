import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import HotNewsCard from '../components/HotNewsCard';
import { newsData } from '../data/newsData';
import { Flag } from 'lucide-react';

export default function NewsPage() {
    const hotNews = newsData.filter((article) => article.isHot);
    // const regularNews = newsData.filter((article) => !article.isHot);

    // Fallback if no hot news is defined
    const featuredHotNews = hotNews.length > 0 ? hotNews[0] : newsData[0];
    const otherRegularNews = newsData.filter(a => a.id !== featuredHotNews.id);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar isInternal />
            <main className="pt-24 pb-20">
                {/* Header */}
                <div className="alex-container mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#0068c8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0068c8]/20">
                            <Flag className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-[#0d1623] font-['Montserrat']">
                                Latest News
                            </h1>
                            <p className="text-gray-500 mt-1">Updates from the Bride of the Mediterranean</p>
                        </div>
                    </div>
                </div>

                {/* Hot News Section */}
                <section className="alex-container mb-20">
                    <HotNewsCard article={featuredHotNews} />
                </section>

                {/* News Grid */}
                <section className="alex-container">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-[#0d1623] font-['Montserrat']">
                            Recent Updates
                        </h2>
                        {/* Filter placeholders could go here */}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherRegularNews.map((article) => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
