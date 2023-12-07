import { CommentIcon } from "@/components/Icons";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { HeartIcon, MoreVerticalIcon } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";

function generatePosts() {
  let array = [];
  for (let index = 1; index <= 30; index++) {
    array.push(index);
  }
  return array;
}

function PostCard() {
  const [commmentSection, setCommentSection] = useState(true);
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-2 md:gap-4 items-center">
          <Link className="flex gap-2 md:gap-4 items-center " to="/profile/sdf">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="grid">
              <h4 className="text-sm font-bold">John Doe</h4>
              <div className="text-sm">27 Dec, 2022</div>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"ghost"}>
                <MoreVerticalIcon />
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

      <CardContent className="p-0">
        {/* visual content */}
        <img
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </CardContent>

      <CardContent className="mt-2 py-2">
        {/* textual content */}
        <p className="prose-lg opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam
          esse doloremque ipsum magni a. Amet rem, nulla eius voluptatibus dolor
          ea cumque obcaecati quaerat dignissimos soluta perferendis assumenda
          iste.
        </p>
      </CardContent>

      <CardFooter className="flex p-2 gap-2">
        <Button variant={"ghost"} className="join-item grow gap-2">
          <HeartIcon />
          <Separator orientation="vertical" />
          <span className="text-xs opacity-50">24 links</span>
        </Button>
        <Button
          variant={commmentSection ? "default" : "ghost"}
          className="join-item grow gap-2"
          onClick={() => setCommentSection((a) => !a)}
        >
          <CommentIcon />
          <Separator orientation="vertical" />
          <span className="text-xs opacity-50">2 Comments</span>
        </Button>
      </CardFooter>

      <Collapsible open={commmentSection}>
        <CollapsibleContent className="p-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="flex flex-col grow items-end opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                ad in iusto quis ipsam quas aliquam eligendi, assumenda nemo
                provident corrupti molestiae voluptatibus dolorum sapiente?
                Possimus nesciunt eius veniam impedit?
              </p>
              <i className="opacity-50">27 Dev, 2022</i>
            </div>
          </div>

          <div className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col grow items-end">
              <Textarea
                placeholder="Write a comment…"
                className="w-full h-120"
              />
              <div className="flex gap-2 mt-2 justify-between">
                <Button variant={"secondary"}>Comment</Button>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export default function PostList() {
  const posts = generatePosts();
  return (
    <div className="flex flex-col gap-2">
      {posts.map((index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
