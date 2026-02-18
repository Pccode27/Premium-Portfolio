export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode
  variant?: "primary" | "outline"
}) {
  const base = "px-6 py-3 rounded-xl font-semibold transition duration-300"

  const styles =
    variant === "primary"
      ? "bg-orange-500 text-black hover:scale-105"
      : "border border-gray-500 hover:bg-gray-800"

  return <button className={`${base} ${styles}`}>{children}</button>
}
