import ProfileCard from "@/components/contentDisplay/profileCard/ProfileCard";
import { getFollows } from "@/lib/api/bsky/social";

interface Props {
  params: {
    handle: string;
  };
}

export default async function Page(props: Props) {
  const { handle } = props.params;
  const follows = await getFollows(handle);

  return (
    <section>
      <div className="px-3 sm:px-0">
        <h2 className="text-2xl font-semibold">Following</h2>
        <h3 className="text-lg text-neutral-500">@{handle}</h3>
      </div>
      <section className="flex flex-col mt-2">
        {follows &&
          follows.data.follows.map((profile) => (
            <ProfileCard key={profile.did} profile={profile} />
          ))}
      </section>
    </section>
  );
}
