import Reveal from "../ui/Reveal"
import GlassCard from "../ui/GlassCard"

export default function Education() {
  return (
    <section className="py-24 px-5 md:px-20">

      <Reveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Educational <span className="text-orange-500">Background</span>
        </h2>
      </Reveal>

      <div className="space-y-10">

        <Reveal>
          <GlassCard>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Institute Of Engineering And Technology, Lucknow
                </h3>
                <p className="text-gray-400">MCA</p>
              </div>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                2023 – 2025
              </span>
            </div>
          </GlassCard> 
          <GlassCard>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Dyal Singh College, Delhi University
                </h3>
                <p className="text-gray-400">Physics Hons.</p>
              </div>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                2018 – 2022
              </span>
            </div>
          </GlassCard>
        </Reveal>

      </div>

    </section>
  )
}
