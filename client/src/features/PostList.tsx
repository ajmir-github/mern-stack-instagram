import { CommentIcon, LinkIcon, MenuIcon, ShareIcon } from "@/components/Icons";

function generatePosts() {
  let array = [];
  for (let index = 1; index <= 30; index++) {
    array.push(index);
  }
  return array;
}

function PostCard() {
  return (
    <div className="md:rounded-box overflow-hidden shadow">
      <div className="card-body p-4 md:p-6">
        <div className="card-actions justify-between gap-2 md:gap-4 items-center">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="avatar">
              <div className="w-12 md:w-14 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="grid">
              <h4 className="text-sm font-bold">John Doe</h4>
              <div className="text-sm">27 Dec, 2022</div>
            </div>
          </div>
          <button className="btn btn-circle btn-ghost">
            <MenuIcon />
          </button>
        </div>
      </div>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="grid md:p-2 gap-4">
        <p className="p-2 md:py-4">
          If a dog chews shoes whose shoes does he choose?
        </p>

        <div className="flex join">
          <button className="join-item grow btn btn-ghost ">
            <LinkIcon />
            <span className="hidden sm:block">Like</span>
            <span className="font-normal sm:opacity-70">100</span>
          </button>
          <button className="join-item grow btn btn-ghost ">
            <CommentIcon />
            <span className="hidden sm:block">Comment</span>

            <span className="font-normal sm:opacity-70">23</span>
          </button>
          <button className="join-item grow btn btn-ghost ">
            <ShareIcon />
            <span className="hidden sm:block">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PostList() {
  const posts = generatePosts();
  return (
    <div className="grid  md:gap-4 md:my-4">
      {posts.map((index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
