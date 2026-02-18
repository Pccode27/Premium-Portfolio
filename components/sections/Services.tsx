import GlassCard from "../ui/GlassCard"

export default function Services() {
  return (
    <section className="py-24 px-5 md:px-20">

      <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
        What <span className="text-orange-500">I Do</span>
      </h2>

      <p className="text-center text-gray-400 mb-16">
        These are the services I provide
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <GlassCard>
          <h3 className="text-xl font-semibold mb-3">
            Front-End Development
          </h3>
          <p className="text-gray-400">
            NextJS, React, Tailwind, Responsive UI.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-semibold mb-3">
            Back-End Development
          </h3>
          <p className="text-gray-400">
            NodeJS, Express, MongoDB, REST APIs.
          </p>
        </GlassCard>

      </div>
    </section>
  )
}
