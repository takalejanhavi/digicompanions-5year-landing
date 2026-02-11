'use client';

import FounderBlock from './FounderBlock';

export default function FounderSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 
                        bg-gradient-to-br from-purple-50/50 via-white to-green-50/30">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 
                      space-y-20 sm:space-y-24 lg:space-y-32">

        {/* CO-FOUNDER 1 */}
        <FounderBlock
          image="/ambarish_sir.png"
          quote="Five years of DigiCompanions represent far more than the passage of time. They reflect trust earned through consistency, lessons learned through experience, and a deep commitment to building digital growth that lasts. Every project, partnership, and milestone has shaped who we are — and continues to guide where we are headed."
          name="Ambarish Bhore"
          role="Co-Founder & Director"
          foundedYear="2021"
        />

        {/* CO-FOUNDER 2 */}
        <FounderBlock
          reverse
          image="/ambar_sir.png"
          quote="Real digital success has never been about chasing trends for us. It comes from showing up every day with discipline, asking the right questions, and earning trust over time. At DigiCompanions, our five-year journey is a reflection of thoughtful decisions, honest work, and a belief that meaningful growth is built step by step."
          name="Ambar Kumar"
          role="Co-Founder & CTO"
          foundedYear="2021"
        />

      </div>
    </section>
  );
}
