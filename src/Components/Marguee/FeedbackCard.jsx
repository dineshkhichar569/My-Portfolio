export default function FeedbackCard({
  type,
  platform,
  stars,
  review,
  name,
  role,
}) {
  return (
    <div
      className=" md:w-[350px] w-[300px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl
      md:p-6 p-3
      flex-shrink-0
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/50
      hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
      "
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <span className="uppercase tracking-[4px] text-xs text-white/60">
            {type}
          </span>

          <span className="rounded bg-green-500/20 px-2 py-1 text-[10px] text-green-400">
            {platform}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(stars)].map((_, index) => (
            <span
              key={index}
              className="inline-block text-lg animate-spin-slow"
              style={{ animationDuration: "3s" }}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 md:leading-8 leading-6 text-white/80">"{review}"</p>

      <div className="mt-3 border-t border-white/10 pt-2">
        <h3 className="font-semibold text-cyan-400">— {name}</h3>

        <p className="text-sm text-white/50">{role}</p>
      </div>
    </div>
  );
}
