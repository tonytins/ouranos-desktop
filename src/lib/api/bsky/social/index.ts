import { AtUri, BskyAgent } from "@atproto/api";

export const getFollowers = async (
  handle: string,
  agent: BskyAgent,
  cursor: string
) => {
  const followers = await agent.getFollowers({ actor: handle, cursor: cursor });

  if (!followers.success) throw new Error("Could not fetch followers");
  return followers;
};

export const getFollows = async (
  handle: string,
  agent: BskyAgent,
  cursor: string
) => {
  const follows = await agent.getFollows({ actor: handle, cursor: cursor });

  if (!follows.success) throw new Error("Could not fetch follows");
  return follows;
};

export const follow = async (agent: BskyAgent, did: string) => {
  const follow = await agent.follow(did);

  if (!follow.uri) throw new Error("Could not follow");
  return;
};

export const unfollow = async (agent: BskyAgent, did: string) => {
  const unfollow = await agent.deleteFollow(did);
  return unfollow;
};

export const unBlock = async (
  agent: BskyAgent,
  did: string,
  viewer: string
) => {
  const { rkey } = new AtUri(viewer);
  const res = await agent.app.bsky.graph.block.delete({
    repo: did,
    rkey,
  });
  return res;
};
