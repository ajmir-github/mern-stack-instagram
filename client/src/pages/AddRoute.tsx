import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

function AddTextPost() {
  return (
    <div className="flex flex-col gap-4 p-1">
      <Textarea
        className="textarea w-full h-auto textarea-lg"
        placeholder="Type here!"
      ></Textarea>
      <Button>Post</Button>
    </div>
  );
}

function AddImagePost() {
  return (
    <div className="flex flex-col gap-4 p-1">
      <div className="grid w-full gap-2">
        <Label htmlFor="images">Images</Label>
        <Input id="images" type="file" multiple accept="image/*" />
      </div>
      <Textarea
        className="textarea  w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></Textarea>
      <Button>Upload and Post</Button>
    </div>
  );
}
function AddVideoPost() {
  return (
    <div className="flex flex-col gap-4 p-1">
      <div className="grid w-full gap-2">
        <Label htmlFor="video">Video</Label>
        <Input id="video" type="file" accept="video/*" />
      </div>
      <Textarea
        className="textarea  w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></Textarea>
      <Button>Upload and Post</Button>
    </div>
  );
}

export default function AddRoute() {
  return (
    <Tabs defaultValue="post-tab">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="post-tab">Post</TabsTrigger>
        <TabsTrigger value="image-tab">Image/s</TabsTrigger>
        <TabsTrigger value="video-tab">Video</TabsTrigger>
      </TabsList>
      <TabsContent value="post-tab">
        <AddTextPost />
      </TabsContent>
      <TabsContent value="image-tab">
        <AddImagePost />
      </TabsContent>
      <TabsContent value="video-tab">
        <AddVideoPost />
      </TabsContent>
    </Tabs>
  );
}
