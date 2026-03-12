import "./App.css";

function App() {
  return (
    <div className="px-5 py-10 font-display sm:20 md:px-30 lg:px-55">
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
      <div>My Socials: </div>
      <div className="text-3xl py-5 text-center">MY PROJECTS</div>
      <div className="grid grid-cols-2 gap-4 *:box-border *:border *:p-5">
        <div>
          <a
            className="text-sm"
            href="https://sway.cloud.microsoft/lH9b1s9XdexwUkDv?ref=Link&loc=mysways"
          >
            <div>Year 1, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Visual Design</div>
        </div>
        <div>
          <a
            className="text-sm"
            href="https://sway.cloud.microsoft/CZFthJ1MiAurlqQh?ref=Link&loc=mysways"
          >
            <div>Year 1, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Storytelling</div>
        </div>
        <div>
          <a
            className="text-sm"
            href="https://github.com/AnzinMaglente/Programming-Skills-Portfolio-"
          >
            <div>Year 1, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Programming Skills Portfolio</div>
        </div>

        <div>
          <a className="text-sm">
            <div>Year 1, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Web Dev</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 1, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Storytelling</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 1, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Storytelling</div>
        </div>

        <div>
          <a className="text-sm">
            <div>Year 2, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Advanced Programming</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 2, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Web Development</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 2, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Game Development</div>
        </div>

        <div>
          <a className="text-sm">
            <div>Year 2, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Advanced Programming</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 2, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Storytelling</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 2, Semester 2</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Digital Storytelling</div>
        </div>

        <div>
          <a className="text-sm">
            <div>Year 3, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Tomorrow's Web</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 3, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Research Project</div>
        </div>
        <div>
          <a className="text-sm">
            <div>Year 3, Semester 1</div>
            {/* Put image of link here */}
          </a>
          <div className="pt-2">Machine Learning</div>
        </div>
      </div>
    </div>
  );
}

export default App;
