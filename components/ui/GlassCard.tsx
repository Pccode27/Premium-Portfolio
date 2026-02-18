export default function GlassCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="
      relative
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-2xl
      p-8
      transition
      hover:border-orange-400/40
      hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]
      hover:-translate-y-1
    ">
      {children}
    </div>
  )
}
