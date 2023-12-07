function AddTextPost() {
  return (
    <div className="grid gap-4">
      <textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Type here!"
      ></textarea>
      <button className="btn btn-primary w-full">Post</button>
    </div>
  );
}

function AddImagePost() {
  return (
    <div className="grid gap-4">
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        multiple
        accept="image/*"
      />
      <textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></textarea>
      <button className="btn btn-primary w-full">Upload and Post</button>
    </div>
  );
}
function AddVideoPost() {
  return (
    <div className="grid gap-4">
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        accept="video/*"
      />
      <textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Desription here!"
      ></textarea>
      <button className="btn btn-primary w-full">Upload and Post</button>
    </div>
  );
}

export default function AddRoute() {
  return (
    <div className="p-2 md:p-4">
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Text"
        />
        <div
          role="tabpanel"
          className="tab-content  border-base-300 rounded-box p-4 md:p-8"
        >
          <AddTextPost />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Image"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content  border-base-300 rounded-box p-4 md:p-8"
        >
          <AddImagePost />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Video"
        />
        <div
          role="tabpanel"
          className="tab-content  border-base-300 rounded-box p-4 md:p-8"
        >
          <AddVideoPost />
        </div>
      </div>
    </div>
  );
}
