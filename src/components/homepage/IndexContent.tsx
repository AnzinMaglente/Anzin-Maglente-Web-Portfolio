import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import ArticleComponent from "../partials/ArticleDisplayComponent.tsx";
import { CodeOff, Feed, ImportantDevices, Share } from "@mui/icons-material";
import { getAllArticles } from "../../apis/article.tsx";

// responsive variable for carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Articles {
  _id: string;
  image: string;
  title: string;
  description: string;
  updatedAt: string;
}

function isJwtExpired(token: any) {
  try {
    if (!token || typeof token !== "string") {
      throw new Error("Invalid token format");
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT structure");
    }

    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
    );

    if (!payload.exp) {
      throw new Error("Token does not contain 'exp' claim");
    }

    const expiryTime = payload.exp * 1000;
    const currentTime = Date.now();

    return currentTime >= expiryTime;
  } catch (err: any) {
    console.error("JWT check failed:", err.message);
    return true;
  }
}

export default function IndexContent() {
  // Variables for dynamic content
  const [articles, setArticles] = useState<Articles[]>([]);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await getAllArticles();
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    getArticles();

    if (isJwtExpired(localStorage.getItem("token"))) {
      localStorage.setItem("token", "");
      console.log("JWT is expired");
    } else {
      console.log("JWT is valid");
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300 text-black-text">
      {/* Hero Banner */}
      <section className="relative w-full mb-10 flex flex-col items-center text-white-text">
        <img
          className="h-full w-full object-cover"
          src="src\assets\Hero Image Banner.jpg"
        />
        <div className="absolute inset-0 w-full h-full object-cover bg-blue-400/60" />
        <div className="absolute top-1/5 lg:top-2/5 w-full flex flex-col items-center">
          <h1 className="max-w-3xl text-2xl md:text-3xl text-center font-semibold leading-17">
            Create Stunning and Intuitive Articles in Seconds with
          </h1>
          <img className="h-fit w-fit" src="src\assets\sneakspeak_logo.png" />
          <p className="max-w-3xl mt-2 text-sm md:mt-4 md:text-xl text-center text-gray-300 leading-9">
            A powerful, modern-day platform designed to help you publish
            professional-grade content effortlessly.
          </p>
          <Link to={"/signin"} className="mt-8">
            <button className="px-8 py-3 text-lg bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition cursor-pointer">
              Start Creating Today!
            </button>
          </Link>
        </div>
      </section>

      {/* Text Section */}
      <InView threshold={1} triggerOnce={true}>
        {({ inView, ref }) => (
          <section
            className={inView ? "px-6 text-center" : "opacity-0"}
            ref={ref}
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Add and Personalize Your Content
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Create your blog within minutes using a flexible, responsive
              template. Add your own images, videos, text, and audio—and fully
              customize the design to fit your personal brand.
            </p>
          </section>
        )}
      </InView>

      {/* Website Preview */}
      <div className="relative w-11/12 md:w-4/5 h-72 mx-auto mt-12 bg-gray-300 rounded-xl shadow-inner">
        <img
          className="h-full w-full object-cover"
          src="src\assets\sample preview.png"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl text-white-text">
          Watch your ideas turn into a beautiful page
        </p>
      </div>

      <hr className="flex w-4/5 mx-auto my-20 border-grey-1" />

      {/* Features Grid */}
      <InView threshold={1} triggerOnce={true}>
        {({ inView, ref }) => (
          <section className="px-8" ref={ref}>
            <h2 className="text-3xl font-semibold text-center mb-10 text-blue-600">
              What We Offer:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Mobile Responsiveness",
                  text: "Your visitors will have a smooth viewing experience as your articles will be optimized for all devices.",
                  icon: <ImportantDevices sx={{ fontSize: 45 }} />,
                  time: "",
                },
                {
                  title: "Social Media",
                  text: "Link your accounts to your page in order to share your pictures and videos directly to your articles.",
                  icon: <Share sx={{ fontSize: 45 }} />,
                  time: "animate-delay-500",
                },
                {
                  title: "Contact Forms",
                  text: "Make it easy for people to contact you by adding a contact form that goes into your email.",
                  icon: <Feed sx={{ fontSize: 45 }} />,
                  time: "animate-delay-1000",
                },
                {
                  title: "No Coding Required",
                  text: "Don’t know how to code? No worries, everything here is made in consideration for just that!",
                  icon: <CodeOff sx={{ fontSize: 45 }} />,
                  time: "animate-delay-1500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={
                    inView
                      ? "p-6 border rounded-xl bg-white shadow hover:shadow-lg transition text-center animate-fade-up animate-ease-in animate-once " +
                        item.time
                      : "opacity-0"
                  }
                >
                  <p className="mb-3 text-blue-600">{item.icon}</p>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="flex w-70 mx-auto text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </InView>

      {/* Featured Articles */}
      <section className="mt-24 px-8 pb-15 max-w-6xl mx-auto">
        <h2 className="mb-6 text-2xl font-semibold">Featured Articles:</h2>
        {articles && articles.length > 0 ? (
          <>
            <Carousel
              showDots={true}
              arrows={false}
              autoPlay={true}
              responsive={responsive}
              infinite={true}
              itemClass="px-5"
            >
              {articles.map((item) => (
                <ArticleComponent
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  lastUpdated={item.updatedAt}
                />
              ))}
            </Carousel>
          </>
        ) : (
          <>
            <div className="flex h-25 px-8 items-center">No articles found</div>
          </>
        )}
      </section>
    </div>
  );
}
