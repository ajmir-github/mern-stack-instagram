import {
  AvatarIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "@/components/Icons";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function LinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <NavLink
      to={href}
      className={({ isActive, isPending }) =>
        isPending
          ? "btn join-item grow btn-square btn-disabled"
          : isActive
          ? "btn join-item grow btn-square btn-primary"
          : "btn join-item grow btn-square btn-ghost"
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 w-full bg-base-100 p-2 md:p-4">
      <div className="max-w-screen-md flex  w-full join">
        <LinkButton href="/">
          <HomeIcon />
        </LinkButton>
        <LinkButton href="/search">
          <SearchIcon />
        </LinkButton>
        <LinkButton href="/add">
          <PlusIcon />
        </LinkButton>
        <LinkButton href="/settings">
          <SettingsIcon />
        </LinkButton>
        <LinkButton href="/profile">
          <AvatarIcon />
        </LinkButton>
      </div>
    </div>
  );
}
