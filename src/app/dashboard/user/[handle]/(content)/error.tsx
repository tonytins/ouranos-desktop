"use client";

import FeedAlert from "@/components/feedback/feedAlert/FeedAlert";

export default function Error() {
  return (
    <FeedAlert variant="doesNotExist" message="User was not found" standalone />
  );
}
