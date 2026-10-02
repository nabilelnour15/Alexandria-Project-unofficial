
import { motion } from 'framer-motion';
import { Calendar, Award, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { governorData } from '../data/governorData';
import PortraitPlaceholder from "../components/PortraitPlaceholder";

export default function GovernorSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="alex-container">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-4 py-1.5 bg-sea/10 text-sea text-xs font-bold rounded-full">
                {governorData.title}
              </span>
              <div className="h-[1px] w-12 bg-sea/30" />
            </div>

            <h2 className="text-ink mb-8">
              {governorData.honorific}{"\u00a0"}{governorData.name}
            </h2>

            <p className="text-lg text-ink-soft mb-10 max-w-xl leading-relaxed">
              {governorData.biography.summary}
            </p>

            <div className="flex items-start gap-3 p-4 mb-10 max-w-xl bg-sea/5 border border-sea/20 rounded-lg text-ink-soft text-sm">
              <Info className="w-5 h-5 text-sea flex-shrink-0 mt-0.5" />
              <p>{governorData.previousGovernorNote}</p>
            </div>

            <div className="flex flex-wrap gap-8 py-8 border-y border-limestone/70 mb-10">
              <div className="flex flex-col">
                <span className="text-ink-soft text-xs font-bold mb-1">
                  In office
                </span>
                <span className="text-ink font-bold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sea" />
                  {governorData.tenure}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-ink-soft text-xs font-bold mb-1">
                  Background
                </span>
                <span className="text-ink font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-sea" />
                  {governorData.background}
                </span>
              </div>
            </div>

            <Link
              to="/governor"
              className="alex-btn-primary inline-flex items-center gap-3 group"
            >
              Read the full biography
            </Link>
          </motion.div>

          {/* Portrait: use an official or press photo with credit (see docs/image-prompts.md) */}
          <PortraitPlaceholder className="lg:mt-12" />
        </div>
      </div>
    </section>
  );
}
