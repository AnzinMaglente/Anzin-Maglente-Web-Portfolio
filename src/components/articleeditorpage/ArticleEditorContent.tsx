import "react-quill-new/dist/quill.snow.css";
import ReactQuillComponent from "./ReactQuillComponent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { editArticle, getArticle, saveArticle } from "../../apis/article";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import Delta from "quill-delta";

interface Article {
  userID: string;
  title: string;
  description: string;
  tag: string;
  delta: Delta;
}

export default function ArticleEditorContent() {
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article>({
    userID: "",
    title: "",
    description: "",
    tag: "",
    delta: new Delta(),
  });
  const [htmlContent, setHtmlContent] = useState("");
  const { id } = useParams<{ id: string }>();

  useState(() => {
    if (!id) return;

    const fetchArticle = async () => {
      try {
        const response = await getArticle(id);
        console.log(response);
        setArticle(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchArticle();
  });

  useEffect(() => {
    if (!article.delta?.ops) return;

    const converter = new QuillDeltaToHtmlConverter(article.delta.ops, {
      paragraphTag: "p",
    });

    setHtmlContent(converter.convert());
  }, [article.delta]);

  // handles submit button
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!id) {
      try {
        let articleResponse = null;

        articleResponse = await saveArticle(article);
        if (articleResponse.success) {
          toast.success("Article saved!");
          navigate("/admin", { replace: true });
        } else {
          toast.error(articleResponse.message || "Article failed to save");
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    } else {
      try {
        let articleResponse = null;

        articleResponse = await editArticle(id, article);
        if (articleResponse.success) {
          toast.success("Article edited!");
          navigate("/admin", { replace: true });
        } else {
          toast.error(articleResponse.message || "Article failed to edit");
        }
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  }

  return (
    <div className=" bg-gray-300 pt-20 pb-5">
      <div className="min-h-140 mx-10 md:mx-37 px-5 pt-10 pb-5 bg-white border-2 border-black rounded-md bg-gradient-to-b from-white-2 from-1% via-secondary shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {!id ? (
          <h2 className="text-3xl font-semibold">Create New Article</h2>
        ) : (
          <h2 className="text-3xl font-semibold">Edit Article</h2>
        )}
        <hr className="w-full mx-auto my-5 border-grey-1" />

        <div className="flex">
          <form className="w-1/2 mr-5 box-border" onSubmit={handleSubmit}>
            {/* Article Image Preview */}
            <div className="mb-3">
              <label className="w-auto mr-5 text-xl">
                Article Preview Image:
              </label>

              {/* Do drop down instead or somethnig like that */}
            </div>
            {/* Article Title */}
            <div className="mb-3">
              <label className="w-auto mr-5 text-xl">Article Title:</label>
              <input
                type="text"
                className="w-1/2 xl:ml-15.5 px-2 mt-2 border-1 shadow-md overflow-y-auto"
                value={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              />
            </div>
            {/* Article Description */}
            <div className="mb-3">
              <label className="w-auto mr-5 text-xl">
                Article Description:
              </label>
              <input
                type="text"
                className="w-1/2 px-2 mt-2 border-1 shadow-md overflow-y-auto"
                value={article.description}
                onChange={(e) =>
                  setArticle({ ...article, description: e.target.value })
                }
              />
            </div>
            {/* Article Tag */}
            <div>
              <label className="w-30 mr-5 text-xl">Article Tags:</label>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={article.tag}
                onChange={(e) =>
                  setArticle({ ...article, tag: e.target.value })
                }
              >
                <FormControlLabel
                  value="Life"
                  control={<Radio />}
                  label="Life"
                />
                <FormControlLabel
                  value="Gaming"
                  control={<Radio />}
                  label="Gaming"
                />
                <FormControlLabel
                  value="Reviews"
                  control={<Radio />}
                  label="Reviews"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="None"
                  control={<Radio />}
                  label="None"
                />
              </RadioGroup>
            </div>
            <label className="w-auto mt-5 text-xl">Article Editor:</label>
            <div className="mb-60 lg:mb-40 xl:mb-35 mt-6">
              {/* Article Editor*/}
              <ReactQuillComponent
                value={article.delta}
                onChange={(delta) => setArticle((prev) => ({ ...prev, delta }))}
              />
            </div>
            {/* Buttons */}
            <div className="flex mb-5 items-center justify-between">
              <Link to="/admin">
                <button className="h-10 px-8 bg-slate-900 hover:bg-slate-800 text-white-text  transition rounded-xl shadow cursor-pointer">
                  Cancel
                </button>
              </Link>
              <div>
                <button
                  type="submit"
                  className="h-10 px-8 ml-6 bg-slate-900 hover:bg-slate-800 text-white-text  transition rounded-xl shadow cursor-pointer"
                >
                  {!id ? "Post" : "Edit"}
                </button>
              </div>
            </div>
          </form>
          <div className="w-1/2 ml-5 box-border">
            {/* Article Editor Preview */}
            <h3 className="text-2xl mb-5">Preview:</h3>
            <div className="w-full overflow-x-hidden overflow-y-auto border border-gray-300 rounded-md p-4">
              <div className="ql-snow h-163 overflow-y-auto overflow-x-hidden">
                <div
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
