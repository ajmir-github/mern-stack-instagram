import { CommentIcon, LinkIcon, MenuIcon, ShareIcon } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function generatePosts() {
  let array = [];
  for (let index = 1; index <= 30; index++) {
    array.push(index);
  }
  return array;
}

function PostCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-2 md:gap-4 items-center">
          <div className="flex gap-2 md:gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="grid">
              <h4 className="text-sm font-bold">John Doe</h4>
              <div className="text-sm">27 Dec, 2022</div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Button variant={"ghost"}>
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <p>visial content</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="join">
          <Button variant={"ghost"} className="join-item grow btn btn-ghost ">
            <LinkIcon />
          </Button>
          <Button variant={"ghost"} className="join-item grow btn btn-ghost ">
            <CommentIcon />
          </Button>
          <Button variant={"ghost"} className="join-item grow btn btn-ghost ">
            <ShareIcon />
          </Button>
        </div>
        <CardDescription>23k Likes</CardDescription>
      </CardFooter>
      <CardContent>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
    </Card>
  );

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
