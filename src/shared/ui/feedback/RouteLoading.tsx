export function RouteLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="h-6 w-44 rounded bg-[var(--border)] animate-pulse" />
      <div className="mt-4 h-4 w-72 rounded bg-[var(--border)] animate-pulse" />
      <div className="mt-8 grid gap-3">
        <div className="h-24 rounded bg-[var(--border)] animate-pulse" />
        <div className="h-24 rounded bg-[var(--border)] animate-pulse" />
        <div className="h-24 rounded bg-[var(--border)] animate-pulse" />
      </div>
    </div>
  )
}