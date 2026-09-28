import Hamburger from "../icons/Hamburger";
import Button from "./Button";

const TopNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="h-18 flex items-center justify-between gap-5 glass border-b border-border sticky top-0 z-30"
    >
      <div className="flex items-center">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="sidebar-navigation"
          className="cursor-pointer flex md:hidden border border-border text-primary p-2 rounded-xl ml-5 hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
        >
          <Hamburger aria-hidden="true" />
        </button>

        <div className="md:hidden ml-5">
          <img
            alt="logo"
            //   fetchpriority="high"
            loading="lazy"
            width="40"
            height="40"
            className="mx-5"
            src="/logo.svg"
            style={{ color: "transparent" }}
          />
        </div>
      </div>

      {/* SignIn Button */}
      <div className="w-50">
        <Button text="Sign In" />
      </div>
    </nav>
  );
};

export default TopNav;
