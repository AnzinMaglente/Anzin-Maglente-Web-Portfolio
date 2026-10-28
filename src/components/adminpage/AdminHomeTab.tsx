import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticlePanel from "../partials/ArticlePanelComponent";
import { getAllUserArticles } from "../../apis/article";

interface Articles {
  _id: string;
  image: string;
  title: string;
  tag: string;
  likes: number;
  comments: number;
  description: string;
  updatedAt: string;
}

export default function AdminHomeTab() {
  // Variables for dynamic content
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await getAllUserArticles();
        console.log(response);
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    getArticles();
  }, []);

  return (
    <div>
      <div className="flex mx-6 items-center justify-between">
        {/* Section Title */}
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-600">Articles</h2>
          <Link to={"/articleEditor"}>
            <button className="p-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow cursor-pointer">
              Create New Article
            </button>
          </Link>
        </div>
      </div>
      <hr className="w-19/20 mx-auto my-6 border-gray-700" />
      <div className="overflow-y-scroll h-120 pt-6">
        {articles && articles.length != 0 ? (
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-13 gap-y-8 mx-6 overflow-x-hidden">
            {/* Sample Article */}
            {articles.map((item) => (
              <ArticlePanel
                key={item._id}
                id={item._id}
                title={item.title}
                tag={item.tag}
                likes={item.likes}
                comments={item.comments}
                description={item.description}
                lastUpdated={item.updatedAt}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="flex px-8 items-center">
            Haven't started? Click on the "Create New Article" button to begin
          </div>
        )}
      </div>
    </div>
  );
}
