export default function GradientText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="bg-linear-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
      {children}
    </span>
  )
}
