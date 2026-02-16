import { useState } from 'react';
import { 
  Thermometer, MapPin, ArrowRight, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Bar, ComposedChart, Legend 
} from 'recharts';
import { 
  climateData, transportTabs, attractionCategories, 
  activitiesData, diningData, accommodationData 
} from '../data/visitData';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#0d1623] mb-3">{title}</h2>
    {subtitle && <p className="text-[#5d6c7b] text-lg">{subtitle}</p>}
    <div className="w-20 h-1 bg-[#0068c8] rounded-full mt-4" />
  </div>
);

export default function Visit({ isTeaser = false }: { isTeaser?: boolean }) {
  const [activeTransportTab, setActiveTransportTab] = useState('get-in');
  const [activeAttractionCat, setActiveAttractionCat] = useState('historical');

  if (isTeaser) {
    return (
      <section className="alex-section bg-white">
        <div className="alex-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="alex-section-tag mb-4 inline-block">Plan Your Visit</span>
              <h2 className="font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4">
                Explore Alexandria
              </h2>
              <p className="text-[#5d6c7b] text-lg">
                Discover world-class attractions, pristine beaches, and rich cultural experiences.
              </p>
            </div>
            <Link to="/visit" className="alex-btn-primary group inline-flex items-center">
              View Full Guide
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {attractionCategories.find(c => c.id === 'historical')?.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.target as HTMLImageElement).src = '/images/hero-bg.jpg'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/80 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-[#0d1623] group-hover:text-[#0068c8] transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-[#5d6c7b] text-xs leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                  <div className="text-[#0068c8] text-xs font-bold flex items-center">
                    Discover More <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0068c8]">
          <img
            src="/images/Alexandria-Bibliotheca-interior.jpg"
            alt="Alexandria Beach"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="font-['Montserrat'] text-4xl md:text-6xl font-bold mb-6">
            Plan Your Journey
          </h1>
          <p className="text-xl opacity-90">
            Everything you need to know to visit the Pearl of the Mediterranean
          </p>
        </div>
      </section>

      <div className="alex-container py-16 space-y-24">
        {/* Intro & Climate Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Climate & Orientation"
                subtitle="When to go and what to expect"
              />
              <p className="text-[#5d6c7b] leading-relaxed mb-6">
                {climateData.description}
              </p>

              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0d1623] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0068c8]" /> Orientation
                </h3>
                <p className="text-sm text-[#5d6c7b] leading-relaxed">
                  Alexandria is a ribbon city, stretching 30km along the coast.
                  The <strong>Corniche</strong> is its lifeline. Almost all
                  sights and hotels are along this strip. Transport is funnelled
                  here, making taxis and buses easy to find.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
              <div className="p-6 bg-[#0068c8] text-white flex justify-between items-center">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Thermometer className="w-5 h-5" /> Climate Statistics
                </h3>
                <span className="text-xs opacity-80 bg-white/10 px-2 py-1 rounded">
                  Source: WMO
                </span>
              </div>
              <div className="p-6 flex-grow min-h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={climateData.months.map((m, i) => ({
                      name: m,
                      temp: climateData.highs[i],
                      low: climateData.lows[i],
                      precip: climateData.precipitation[i],
                    }))}
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                    />
                    <YAxis
                      yAxisId="left"
                      orientation="left"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      unit="°"
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      unit="mm"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      }}
                      itemStyle={{ fontWeight: "bold" }}
                    />
                    <Legend verticalAlign="top" height={36} />
                    <Bar
                      yAxisId="right"
                      dataKey="precip"
                      name="Rain (mm)"
                      fill="#bfdbfe"
                      radius={[4, 4, 0, 0]}
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="temp"
                      name="High (°C)"
                      stroke="#ef4444"
                      fillOpacity={0.1}
                      fill="#fee2e2"
                      strokeWidth={3}
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="low"
                      name="Low (°C)"
                      stroke="#3b82f6"
                      fillOpacity={0}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="px-6 py-4 bg-[#f8fafc] border-t border-gray-100 flex gap-4 text-xs text-[#64748b] justify-center">
                <div className="flex items-center gap-1">
                  <Info className="w-3 h-3" /> Average High/Low and
                  Precipitation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Section */}
        <section>
          <SectionHeader title="Getting There & Around" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {transportTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTransportTab(tab.id)}
                  className={`px-6 py-4 rounded-xl text-left font-bold transition-all whitespace-nowrap md:whitespace-normal ${
                    activeTransportTab === tab.id
                      ? "bg-[#0068c8] text-white shadow-lg"
                      : "bg-[#f3f4f6] text-[#5d6c7b] hover:bg-[#e6f1fc]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 gap-6">
                {transportTabs
                  .find((t) => t.id === activeTransportTab)
                  ?.content.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.type}
                        className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-[#e6f1fc] rounded-full flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-[#0068c8]" />
                        </div>
                        <h4 className="font-bold text-[#0d1623] mb-2">
                          {item.type}
                        </h4>
                        <p className="text-sm text-[#5d6c7b]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section>
          <SectionHeader
            title="Things to See"
            subtitle="Historical monuments, museums, and modern marvels"
          />

          <div className="flex flex-wrap gap-3 mb-8">
            {attractionCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveAttractionCat(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeAttractionCat === cat.id
                      ? "bg-[#0d1623] text-white"
                      : "border border-gray-200 text-[#5d6c7b] hover:border-[#0d1623] hover:text-[#0d1623]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractionCategories
              .find((c) => c.id === activeAttractionCat)
              ?.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = "/images/hero-bg.jpg")
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 bg-white/10 backdrop-blur-md px-2 py-1 rounded mb-2 inline-block">
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl text-[#0d1623] group-hover:text-[#0068c8] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[#5d6c7b] text-sm leading-relaxed line-clamp-3 mb-6">
                      {item.desc}
                    </p>
                    <div className="flex items-center text-[#0068c8] font-bold text-sm">
                      Explore Details{" "}
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Lifestyle Grid (Do, Buy, Learn) */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitiesData.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="bg-[#f8fafc] p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#0068c8]" />
                    <h3 className="font-bold text-xl text-[#0d1623]">
                      {activity.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {activity.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#5d6c7b] flex items-start gap-2"
                      >
                        <span className="text-[#0068c8] text-lg leading-none">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dining & Sleeping */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Dining */}
          <div>
            <SectionHeader title="Eat & Drink" />
            <div className="space-y-6">
              {Object.entries(diningData).map(([key, items]) => (
                <div key={key}>
                  <h4 className="font-bold text-[#0068c8] uppercase tracking-wider text-sm mb-3">
                    {key === "midRange" ? "Mid-Range" : key}
                  </h4>
                  <div className="space-y-3">
                    {items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-baseline border-b border-gray-100 pb-2 last:border-0"
                      >
                        <span className="font-medium text-[#0d1623]">
                          {item.name}
                        </span>
                        <span className="text-xs text-[#5d6c7b] text-right truncate ml-4 w-1/2">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleeping */}
          <div>
            <SectionHeader title="Where to Stay" />
            <div className="space-y-6">
              {accommodationData.map((category) => (
                <div key={category.category}>
                  <h4 className="font-bold text-[#0068c8] uppercase tracking-wider text-sm mb-3">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.options.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-baseline border-b border-gray-100 pb-2 last:border-0"
                      >
                        <span className="font-medium text-[#0d1623]">
                          {item.name}
                        </span>
                        <span className="text-xs text-[#5d6c7b] text-right truncate ml-4 w-1/2">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tourist Offices */}
        <section className="bg-[#0d1623] text-white p-8 md:p-12 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
              <p className="text-white/70 max-w-xl">
                The Egyptian Tourist Authority has offices at Raml Station, Misr
                Railway Station, and the Airports. Dial{" "}
                <span className="text-[#3898ec] font-mono">19654</span> for
                tourist police emergency.
              </p>
            </div>
            <button className="px-8 py-3 bg-[#0068c8] hover:bg-[#005bb0] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#0068c8]/25 whitespace-nowrap">
              View Emergency Numbers
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
