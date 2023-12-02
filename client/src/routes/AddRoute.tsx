function AddTextPost() {
  return (
    <div>
      <textarea
        className="textarea textarea-bordered w-full h-auto textarea-lg"
        placeholder="Type here!"
      ></textarea>
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
          checked
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
        />
        <div
          role="tabpanel"
          className="tab-content  border-base-300 rounded-box p-4 md:p-8"
        >
          Image/s
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
          Video
        </div>
      </div>
    </div>
  );
}
