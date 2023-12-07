import { SearchIcon } from "@/components/Icons";

export default function SearchRoute() {
  return (
    <div className="grid">
      <div className="p-2 md:p-4">
        <div className="join shadow w-full">
          <input className="input join-item grow" placeholder="Search" />
          <button className="btn join-item">
            <SearchIcon />
            <span className="hidden md:block">Search</span>
          </button>
        </div>
      </div>

      <div className="p-2 md:p-4 grid gap-2">
        <div className="grid">
          <div className="divider">Accounts (3)</div>
          <div>Accounts</div>
        </div>
        <div className="grid">
          <div className="divider">Posts (10)</div>
          <div>Posts</div>
        </div>
      </div>
    </div>
  );
}
