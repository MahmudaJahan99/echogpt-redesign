import Hamburger from "../icons/Hamburger";
import Button from "./Button";

const TopNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="h-18 shrink-0 flex items-center justify-between gap-5 glass border-b border-border z-30"
    >
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="sidebar-navigation"
        className="cursor-pointer flex md:hidden border border-border text-primary p-2 rounded-xl ml-5 hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
      >
        <Hamburger aria-hidden="true" />
      </button>

      {/* SignIn Button */}
      <div className="w-50 mt-4  ml-auto">
        <Button text="Sign In" />
      </div>
    </nav>
  );
};

export default TopNav;
