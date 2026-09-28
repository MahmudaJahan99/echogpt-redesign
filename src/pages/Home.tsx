import ChatMain from "../components/Chat/ChatMain";

const Home = () => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-background">
      <div className="h-[calc(100vh-120px)] w-full flex flex-x-col justify-center items-center">
        <div className="w-full lg:w-2/3 h-full flex flex-col justify-between">
          <div className="w-full h-[calc(100%-160px)] overflow-x-auto custom-scrollbar text-foreground py-2.5">
            <div className="w-full text-center text-3xl md:text-4xl font-bold tracking-tight mt-10 text-foreground animate-fade-up">
              Hello There! 👋 How can I assist you today?
            </div>
            <div className="w-full text-center text-lg mt-2.5 text-muted-foreground animate-fade-up">
              Your personal AI assistant is ready to help—ask me anything,
              anytime.
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="group w-full rounded-2xl border border-border bg-card p-5 cursor-pointer shadow-soft hover:shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Unlock Your Creative Flow
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
                  Receive custom prompts that reflect your writing style,
                  helping you push past creative blocks and spark new ideas for
                  your projects.
                </p>
              </div>
              <div className="group w-full rounded-2xl border border-border bg-card p-5 cursor-pointer shadow-soft hover:shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Build a Resume That Shines
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
                  Craft a resume tailored to highlight your experience and match
                  the job you want, designed to grab the attention of potential
                  employers.
                </p>
              </div>
              <div className="group w-full rounded-2xl border border-border bg-card p-5 cursor-pointer shadow-soft hover:shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Set a Challenge That Transforms You
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
                  Create a personalized challenge based on your goals and
                  habits, designed to push you out of your comfort zone and help
                  you grow.
                </p>
              </div>
              <div className="group w-full rounded-2xl border border-border bg-card p-5 cursor-pointer shadow-soft hover:shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  Write Irresistible Social Content
                </div>
                <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
                  Generate catchy, clever captions for your photos or videos,
                  perfect for increasing engagement and sparking conversations.
                </p>
              </div>
            </div>
          </div>

          <ChatMain />

          <div className="hidden fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm">
            <div className="text-foreground border border-border rounded-2xl w-[95%] lg:w-112.5 flex flex-col bg-card shadow-card animate-fade-up">
              <div className="w-full flex items-center justify-between gap-5 p-4 border-b border-border">
                <div className="text-lg font-semibold tracking-tight">
                  Share Chat History
                </div>
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] cursor-pointer transition-all duration-200">
                  <svg
                    className="rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12h12M12 18V6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="w-full flex flex-col gap-2.5">
                  <div className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 font-medium">
                      <img
                        alt="Facebook"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        src="/_next/static/media/facebook.b34081d5.svg"
                        style={{ color: "transparent" }}
                      />
                      Facebook
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 font-medium">
                      <img
                        alt="LinkedIn"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        src="/_next/static/media/linkedin.44c32cda.svg"
                        style={{ color: "transparent" }}
                      />
                      LinkedIn
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 font-medium">
                      <img
                        alt="WhatsApp"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        src="/_next/static/media/whatsapp.884efc7d.svg"
                        style={{ color: "transparent" }}
                      />
                      WhatsApp
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 font-medium">
                      <img
                        alt="Telegram"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        src="/_next/static/media/telegram.c230b126.svg"
                        style={{ color: "transparent" }}
                      />
                      Telegram
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full h-px bg-border my-1"></div>
                  <div className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      Copy Link
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-screen fixed top-0 right-0 bg-surface border-l border-border z-999999 transition-transform duration-1000 ease-in-out transform w-full sm:w-100 lg:w-150 translate-x-full">
            <div className="relative w-full h-full flex items-center justify-center text-foreground py-5">
              <div className="w-11 h-11 text-white flex items-center justify-center rounded-xl bg-destructive hover:bg-destructive/90 cursor-pointer absolute top-2.5 right-2.5 transition-all duration-200 active:scale-95">
                <svg
                  className="rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12h12M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-full h-full flex flex-col items-center">
                <div className="w-full h-75 sm:h-55 px-5">
                  <div className="w-full text-center text-2xl lg:text-3xl text-foreground font-bold tracking-tight">
                    My Chat History
                  </div>
                  <div className="w-full text-center text-lg text-muted-foreground mt-2.5">
                    Access your complete chat history across diverse topics and
                    interactions with different models or characters.
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-center gap-5 my-5">
                    <div className="w-full h-11 px-4 rounded-xl bg-card text-foreground border transition-all duration-200 border-border flex items-center gap-1.25">
                      <svg
                        className="text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <input
                        type="text"
                        className="w-full text-base pl-2.5 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                        placeholder="Search chat history..."
                        value=""
                      />
                    </div>
                    <div className="w-full sm:w-87.5">
                      <div className="relative w-full">
                        <button className="w-full flex items-center justify-between gap-5 h-11 px-4 text-base font-medium text-foreground bg-card border border-border rounded-xl transition-all duration-200 hover:bg-muted focus:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/40">
                          <span className="text-muted-foreground">All</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1.5"
                              d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[calc(100%-300px)] sm:h-[calc(100%-220px)] px-5 overflow-y-auto custom-scrollbar flex flex-col items-center justify-center py-5">
                  <div className="flex flex-col items-center justify-center gap-2.5 text-lg text-muted-foreground py-16">
                    Empty Chat History
                  </div>
                </div>
              </div>
              <div className="hidden fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm">
                <div className="text-foreground border border-border rounded-2xl w-[95%] lg:w-112.5 flex flex-col bg-card shadow-card animate-fade-up">
                  <div className="w-full flex items-center justify-between gap-5 p-4 border-b border-border">
                    <div className="text-lg font-semibold tracking-tight">
                      Share Chat History
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] cursor-pointer transition-all duration-200">
                      <svg
                        className="rotate-45"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 12h12M12 18V6"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 w-full">
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="w-full flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium">
                          <img
                            alt="Facebook"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/static/media/facebook.b34081d5.svg"
                            style={{ color: "transparent" }}
                          />
                          Facebook
                        </div>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium">
                          <img
                            alt="LinkedIn"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/static/media/linkedin.44c32cda.svg"
                            style={{ color: "transparent" }}
                          />
                          LinkedIn
                        </div>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium">
                          <img
                            alt="WhatsApp"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/static/media/whatsapp.884efc7d.svg"
                            style={{ color: "transparent" }}
                          />
                          WhatsApp
                        </div>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium">
                          <img
                            alt="Telegram"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/static/media/telegram.c230b126.svg"
                            style={{ color: "transparent" }}
                          />
                          Telegram
                        </div>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="w-full h-px bg-border my-1"></div>
                      <div className="w-full flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          Copy Link
                        </div>
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer text-muted-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.95] transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default Home;
