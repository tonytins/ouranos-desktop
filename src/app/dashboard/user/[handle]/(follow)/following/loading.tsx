import ProfileCardSkeleton from "@/components/contentDisplay/profileCard/ProfileCardSkeleton";

export default function Loading() {
  return (
    <section>
      <div className="px-3 sm:px-0">
        <h2 className="text-2xl font-semibold mb-2">Following</h2>
        <div className="bg-neutral-200 animate-pulse w-1/3 h-4 mb-2 rounded" />
      </div>
      <ProfileCardSkeleton />
    </section>
  );
}
