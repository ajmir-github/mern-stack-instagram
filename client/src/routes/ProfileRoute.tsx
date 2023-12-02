import PostList from "@/features/PostList";
import UserMetaData from "@/features/UserMetaData";

export default function ProfileRoute() {
  return (
    <div className="grid gap-2 md:gap-4">
      <UserMetaData />
      <div className="divider">Posts (23)</div>
      <PostList />
    </div>
  );
}
