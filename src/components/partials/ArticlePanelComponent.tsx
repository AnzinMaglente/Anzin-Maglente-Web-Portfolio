import { ThumbUp, Comment, Delete } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteArticle } from "../../apis/article";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Article Panel Component for admin home page
export default function ArticlePanelComponent({
  id = "",
  title = "Untitled Article",
  likes = 0,
  comments = 0,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  lastUpdated = "00/00/0000",
  tag = "None",
  image = "",
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    deleteArticle(id);
    window.location.reload();
  };
  return (
    <div className="w-[20rem] rounded-2xl border border-white/10 border-b bg-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this article?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This will be permanent.
          </Typography>
          <div className="flex pt-5 justify-between">
            <button
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
      {/* Preview Image */}
      <div className="relative w-full h-30 rounded-xl border bg-gradient-to-br from-gray-100 to-gray-200 border-b border-gray-300/30 transition hover:scale-[1.01] hover:shadow-lg">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : null}
        <button
          className="absolute right-4 top-2 flex flex-col justify-center text-slate-700"
          onClick={handleOpen}
        >
          <Delete />
        </button>
      </div>

      {/* Article Title and basic information */}
      <div className="flex mx-5 mt-2 items-center justify-between text-white-text">
        <h3 className="w-40 line-clamp-2">{title}</h3>
        <div className="flex gap-4 mt-1">
          <p className="text-xl">
            {likes} <ThumbUp />
          </p>
          <p className="text-xl">
            {comments} <Comment />
          </p>
        </div>
      </div>
      <span className=" bg-blue-600 text-white px-2 py-0.5 m-5 rounded-full text-xs font-medium">
        {tag}
      </span>
      <p className="mx-5 my-3 text-sm text-justify text-white-text line-clamp-2">
        {description}
      </p>

      {/* Edit button and Last updated date */}
      <div className="flex mx-5 my-5 items-center justify-between text-white-text">
        <p>
          Last Updated:
          <br />
          {moment(lastUpdated).utc().format("DD/MM/YY")}
        </p>
        <Link to={`/articleEditor/${id}`}>
          <button className="px-10 py-2 rounded-lg border bg-blue-600 hover:bg-blue-700 text-white">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
