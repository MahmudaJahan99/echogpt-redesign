const Logo = () => {
  return (
    <div className="w-full h-22 py-1.25 flex items-center overflow-hidden px-6">
      <a className="flex items-center gap-3" href="">
        <img src="/logo.svg" alt="EchoGPT logo" width={38} height={38} />
        <div className="text-[22px] font-extrabold tracking-[6px] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          EchoGPT
        </div>
      </a>
    </div>
  );
};

export default Logo;
