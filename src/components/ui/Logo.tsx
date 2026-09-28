const Logo = () => {
  return (
    <a
      href="/"
      className="w-full h-22 py-1.25 flex items-center overflow-hidden px-6"
    >
      <button type="button" className="flex items-center gap-3">
        <img
          aria-hidden="true"
          src="/logo.svg"
          alt="EchoGPT logo"
          width={38}
          height={38}
        />
        <div className="text-[22px] font-extrabold tracking-[6px] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          EchoGPT
        </div>
      </button>
    </a>
  );
};

export default Logo;
