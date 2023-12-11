import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

function AddTextPost() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Type here!"
      ></Textarea>
      <Button>Post</Button>
    </div>
  );
}

function AddImagePost() {
  return (
    <div className="flex flex-col items-start gap-4">
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        multiple
        accept="image/*"
      />
      <Textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></Textarea>
      <Button>Upload and Post</Button>
    </div>
  );
}
function AddVideoPost() {
  return (
    <div className="flex flex-col items-start gap-4">
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        accept="video/*"
      />
      <Textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></Textarea>
      <Button>Upload and Post</Button>
    </div>
  );
}

export default function AddRoute() {
  return (
    <div className="p-2 md:p-4">
      <Tabs defaultValue="account">
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
    </div>
  );
}
