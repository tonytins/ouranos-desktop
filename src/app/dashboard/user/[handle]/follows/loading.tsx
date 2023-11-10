import ProfileCardSkeleton from "@/components/contentDisplay/profileCard/ProfileCardSkeleton";

export default function Loading() {
  return (
    <section>
      <h2 className="text-2xl font-semibold px-3 sm:px-0 mb-2 mt-3">
        Following
      </h2>
      <ProfileCardSkeleton />
    </section>
  );
}