function Skeleton() {
  return (
    <article className="flex animate-pulse items-center justify-between gap-2 border p-3 last:border-b md:first:rounded-t-2xl md:last:rounded-b-2xl odd:[&:not(:last-child)]:border-b-0 even:[&:not(:last-child)]:border-b-0">
      <div className="flex flex-wrap items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-neutral-200" />
        <div className="h-4 w-32 rounded-full bg-neutral-200" />
      </div>
    </article>
  );
}

export default function SavedFeedListSkeleton() {
  return (
    <section className="flex flex-col">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </section>
  );
}
