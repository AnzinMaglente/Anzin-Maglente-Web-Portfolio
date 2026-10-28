import { Link } from "react-router-dom";
import moment from "moment";

// Article Display for home page.
export default function ArticleDisplayComponent({
  id = "",
  title = "Untitled Article",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  lastUpdated = "00/00/0000",
}) {
  return (
    <div className="relative h-45 rounded-xl shadow-inner bg-white  ">
      {/* <img className="h-full w-full object-cover" src={image ? image : ""} /> */}
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
      <div className="absolute inset-0 flex flex-col justify-center text-white-text">
        <h1 className="px-5 line-clamp-2 font-semibold">{title}</h1>
        <p className="px-5 text-xs text-gray-300">
          {moment(lastUpdated).utc().format("DD/MM/YY")}
        </p>
        <p className="px-5 my-2 text-sm line-clamp-2">{description}</p>
        <Link to={`/article/${id}`}>
          <button className="mx-5 my-1 px-2 py-1 self-end bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition cursor-pointer">
            Read Now
          </button>
        </Link>
      </div>
    </div>
  );
}
