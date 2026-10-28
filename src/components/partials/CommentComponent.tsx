import { Person } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Comment Component.
export default function CommentComponent({
  username = "Username",
  articlename = "article name",
  articlelink = "",
  userpicture = "",
  date = "00 Month 0000",
  comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
}) {
  return (
    <div className="flex mx-2 items-start gap-4 mb-9 bg-gray-50 shadow-sm rounded-xl border border-gray-200 hover:shadow-lg transition overflow-x-clip">
      <div className="w-20 h-20 lg:w-30 lg:h-30 my-5 mx-3 bg-gray-50 shadow-md rounded-full overflow-hidden">
        {userpicture ? (
          <img src={userpicture} className="w-full h-full" />
        ) : (
          <div>
            <Person style={{ fontSize: 120, height: 160 }} />
          </div>
        )}
      </div>
      <div className="block my-5 text-black-text items-center ">
        <Link to={articlelink}>
          <a className="w-20 lg:w-40 truncate text-xs text-blue-600 hover:underline cursor-pointer line-clamp-6">
            Commented on: {articlename}
          </a>
        </Link>
        <p className="text-sm text-gray-500">
          {username} · {date}
        </p>
        <p className="line-clamp-2 text-base text-gray-800 mt-1 leading-relaxed">
          {comment}
        </p>

        <div className="text-xs text-gray-500 flex gap-3 mt-4">
          <a className="cursor-pointer hover:text-blue-600 transition">Like</a>{" "}
          •{" "}
          <a className="cursor-pointer hover:text-blue-600 transition">Reply</a>{" "}
          •{" "}
          <a className="cursor-pointer hover:text-blue-600 transition">
            Report
          </a>
        </div>
      </div>
    </div>
  );
}
