function App() {
  return (
    <div className="mx-2.5 my-5 px-5 py-10 font-display border shadow hover:shadow-2xl sm:px-20 md:px-30 lg:px-55">
      <img
        src="/anzin_profile_picture.jpg"
        alt="Profile Picture"
        className="w-40 h-40 rounded-full mb-4 border-4 border-zinc-300 box-border p-0.5"
      />
      <div className="text-3xl text-left">Anzin R. Maglente</div>
      <div className="text-xl py-5 text-justify">
        Hi there! My name is Anzin Maglente. A UAE based creative who
        specializes in producing creative media online. Particularly, in the
        fields of programming. I enjoy exploring unique ideas while putting a
        new spin on the old.
        <br />
        <br />
        When I am not programming, I like to write stories, design characters,
        learn music, and learn new skills!
        <br />
        <br />
        Welcome to my portfolio.
      </div>
      <div className="flex">
        <div className="py-auto text-xl">My Socials:</div>
        <div className="flex pl-2 py-auto gap-4">
          <a
            href="https://github.com/AnzinMaglente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-indigo-700 transition-colors duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anzin-maglente-a809b3330/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-indigo-700 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/VooBroo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-indigo-700 transition-colors duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="py-auto text-xl">My Email: anzin.maglente@gmail.com</div>
      <div className="py-auto text-xl">
        You can find my resume over here:{" "}
        <a
          href="https://docs.google.com/document/d/16XDk8sFw5e9Ms4csqYPMXms0JTLRXGR-/edit?usp=sharing&ouid=115388866597794014385&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700"
        >
          Resume
        </a>
      </div>
      <div className="text-3xl py-5">FEATURED WORKS</div>
      <div className="grid grid-cols-2 gap-4 justify-items-center *:box-content *:shadow *:px-2 *:pt-2 *:hover:shadow-2xl *:transition *:overflow-hidden ">
        <a href="https://raiitou.itch.io/a-walk-to-the-store">
          <img
            src="./A_Walk_To_The_Store_assessment.png"
            alt="Featured Work 1"
            className="w-360"
          />
        </a>
        <a href="https://github.com/DC-BSU-RAK/assignment-100-tomorrow-s-web-AnzinMaglente">
          <img
            src="./SneakSpeak_assessment.png"
            alt="Featured Work 2"
            className="w-360"
          />
        </a>
        <a href="https://github.com/AnzinMaglente/Fifth-Edition-Character-Builder-Application">
          <img
            src="./fifth-edition-character-builder-assessment.png"
            alt="Featured Work 3"
            className="w-360"
          />
        </a>
        <a href="https://www.kaggle.com/code/anzinmaglente/mushroom-classification-with-gradio">
          <img
            src="./mushroom_classification_assessment.png"
            alt="Featured Work 4"
            className="w-360"
          />
        </a>
        <a href="https://raiitou.itch.io/tale-of-shadows">
          <img
            src="./tale_of_shadows_assessment.png"
            alt="Featured Work 5"
            className="w-360"
          />
        </a>
        <a href="https://anzinmaglente.github.io/anzin-maglente-web-dev-Assessment-2.github.io/">
          <img
            src="./old_portfolio_assessment.png"
            alt="Featured Work 6"
            className="w-360"
          />
        </a>
      </div>
      <div className="text-3xl py-5 text-center">MY PORTFOLIOS</div>
      <div className="grid grid-cols-2 gap-4 *:box-border *:border *:p-5 *:rounded-xl *:bg-white *:shadow *:hover:shadow-2xl *:transition">
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://sway.cloud.microsoft/LyM98ZQOY0d17Flq?ref=Link&loc=mysways"
          >
            <div>Year 1, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Computing Fundamentals</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://sway.cloud.microsoft/CZFthJ1MiAurlqQh?ref=Link&loc=mysways"
          >
            <div>Year 1, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Digital Media and Storytelling</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Programming-Skills-Portfolio"
          >
            <div>Year 1, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Introduction to Programming</div>
        </div>

        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href=""
          >
            <div>Year 1, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Creative Strategies</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://sway.cloud.microsoft/MOOqxB8CrD7d1gZf?ref=Link&loc=mysways"
          >
            <div>Year 1, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">UX Design</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Assessment-1-WEB-DEV-Maglente-Anzin-R."
          >
            <div>Year 1, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Web Programming</div>
        </div>

        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/anzin-maglente-advanced-programming-portfolio"
          >
            <div>Year 2, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Advanced Programming</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Anzin-Maglente-Responsive-Web-Final-Assessment"
          >
            <div>Year 2, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Responsive Web Design</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://sway.cloud.microsoft/wjRATRfv6av8n6BL?ref=Link&loc=mysways"
          >
            <div>Year 2, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Emerging Technology</div>
        </div>

        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/Leewen-Adianah-L-Lumba-101/Big-Boss-Reload-Garage-Website"
          >
            <div>Year 2, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Creative Industry Challenge</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Area-Calculator-Application"
          >
            <div>Year 2, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Mobile Development Assessment 1</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Fifth-Edition-Character-Builder-Application"
          >
            <div>Year 2, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Mobile Development Assessment 2</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/Tale-of-Shadows-Game"
          >
            <div>Year 2, Semester 2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Game Development</div>
        </div>

        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/DC-BSU-RAK/assignment-100-tomorrow-s-web-AnzinMaglente"
          >
            <div>Year 3, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Tomorrow's Web</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://drive.google.com/drive/folders/1ngqgz7sTjnBt4QT9hT6Z7dLAdIxVBgL0?usp=drive_link"
          >
            <div>Year 3, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Research Project</div>
        </div>
        <div>
          <a
            className="flex justify-between text-sm hover:text-indigo-700 transition-colors duration-300"
            href="https://github.com/AnzinMaglente/anzin-magente-machine-learning-portfolio"
          >
            <div>Year 3, Semester 1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </a>
          <div className="pt-2">Machine Learning</div>
        </div>
      </div>
    </div>
  );
}

export default App;
