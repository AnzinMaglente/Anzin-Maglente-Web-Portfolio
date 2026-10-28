import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../../apis/article";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import moment from "moment";

interface Article {
  title: string;
  tag: string;
  delta: object;
  dateCreated: string;
  dateUpdated: string;
}

export default function ArticleContent() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<Article>();

  // converts delta to html
  const htmlconverter = (delta: any) => {
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    const htmlcontent = converter.convert();
    console.log(htmlcontent);
    return htmlcontent;
  };

  useEffect(() => {
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
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-140 px-37 pt-20 pb-5 bg-gray-300 from-1% via-secondary">
        <p>No article can be found</p>
        <Link to="/">
          <button>Go back?</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="min-h-140 px-37 pt-25 pb-5 bg-gray-300 from-1% via-secondary">
        <h1 className="min-h-[60px] max-h-[88px] py-2 text-3xl font-semibold text-center overflow-y-auto overflow-x-hidden">
          {article.title}
        </h1>
        <div className="flex flex-row justify-between px-4 pt-5 text-sm">
          <div className="flex flex-row gap-5">
            <p>
              Date Created:{" "}
              {moment(article.dateCreated).utc().format("DD/MM/YY")}
            </p>
            <p>
              Last Updated:{" "}
              {moment(article.dateUpdated).utc().format("DD/MM/YY")}
            </p>
          </div>
          <p>Tags: {article.tag}</p>
        </div>
        <div className="w-full py-4">
          <div className="ql-snow h-auto overflow-x-hidden">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: htmlconverter(article.delta) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
